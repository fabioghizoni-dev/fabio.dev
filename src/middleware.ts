import { defineMiddleware } from "astro:middleware";
import c from "clogs.ts";

const unauthorized = () => {
  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Area"',
    },
  });
}

export const onRequest = defineMiddleware((context, next) => {
  const { pathname, protocol } = context.url;

  if (!pathname.startsWith("/admin")) {
    return next();
  }

  const proto = context.request.headers.get("x-forwarded-proto") ?? protocol;

  if (proto !== "https" && !import.meta.env.DEV) {
    c.log("HTTPS is required, status: 426.")
    return new Response("HTTPS required", { status: 426 });
  }

  // 1️⃣ IP validation
  const forwardedFor = context.request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  const ip = forwardedFor ?? context.request.headers.get("cf-connecting-ip") ?? context.clientAddress;
  c.log(`Machine with IP address: ${ip}`);

  if (!ip || !import.meta.env.ALLOWED_IPS.includes(ip)) {
    return new Response("Access denied (IP)", { status: 403 });
  }

  // 2️⃣ Basic auth validation
  const auth = context.request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return unauthorized();
  }

  const [user, pass] = atob(auth.replace("Basic ", "")).split(":");

  if (
    user !== import.meta.env.ADMIN_USER ||
    pass !== import.meta.env.ADMIN_PASS
  ) {
    return unauthorized();
  }

  return next();
});
