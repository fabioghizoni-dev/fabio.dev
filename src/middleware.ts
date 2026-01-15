import { defineMiddleware } from "astro:middleware";
import c from "clogs.ts/src/c";

const ALLOWED_IPS = ["::1", "45.187.118.73"];

const unauthorized = () => {
  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Area"',
    },
  });
}

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  if (!pathname.startsWith("/admin")) {
    return next();
  }

  const clientAddress = context.clientAddress;
  const forwarded = context.request.headers.get("x-forwarded-for");
  // 1️⃣ Validação de IP
  const ip = clientAddress || forwarded;
  c.debug(`Machine with IP address: ${ip}`);

  if (!ip || !ALLOWED_IPS.includes(ip)) {
    return new Response("Access denied (IP)", { status: 403 });
  }

  // 2️⃣ Validação Basic Auth
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
