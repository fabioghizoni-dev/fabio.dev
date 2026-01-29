import type {
  DrawType,
  FileExtension,
  Options,
  ShapeType,
} from "qr-code-styling";
import QRCode from "qr-code-styling";

const initQrCode = () => {
  const params = new URLSearchParams(window.location.search);

  const getParam = <T = string>(key: string, fallback?: T): T | null => {
    const val = params.get(key);
    if (val === null) return fallback ?? null;
    return (typeof fallback === "number" ? parseInt(val) : val) as T;
  };

  const size = getParam<number>("size");
  const img = getParam("img", "/logo.svg")!;
  const shape = getParam<ShapeType>("shape")!;
  const bgColor = getParam("bgColor", "#fff")!;
  const margin = getParam<number>("margin", 10)!;
  const type = getParam<DrawType>("type", "svg")!;
  const dotsColor = getParam("dotsColor", "#000")!;
  const dotsType = getParam("dotsType", "rounded")!;
  const imgSize = getParam<number>("imgSize", 0.4)!;
  const bgRound = getParam<number>("bgRound", 0.05)!;
  const imgMargin = getParam<number>("imgMargin", 10)!;
  const data = getParam("data", "https://chatgpt.com/")!;
  const width = size ?? getParam<number>("w", innerHeight)!;
  const height = size ?? getParam<number>("h", innerHeight)!;

  // QR Code options
  const qrOptions: Options = {
    width,
    height,
    type: type,
    image: img,
    data: data,
    shape: shape,
    margin: margin,
    imageOptions: {
      margin: imgMargin,
      imageSize: imgSize,
    },
    dotsOptions: {
      color: dotsColor,
      type: dotsType,
    },
    backgroundOptions: {
      round: bgRound,
      color: bgColor,
    },
  };

  const qr = new QRCode(qrOptions);

  const qrDiv = document.getElementById("qr")!;
  if (qrDiv) qr.append(qrDiv);

  const hasDownloadParam = params.has("download");
  const downloadExtension = params.get("download") || "svg";

  const validExtensions: FileExtension[] = [
    "svg",
    "png",
    "jpeg",
    "webp",
  ] as const;

  const isValidExtensions = validExtensions.includes(
    downloadExtension as FileExtension,
  );

  const downloadName = params.get("name") || "qr";

  if (hasDownloadParam && isValidExtensions) {
    qr.download({
      name: downloadName,
      extension: downloadExtension as FileExtension,
    });
  }
};

addEventListener("DOMContentLoaded", initQrCode);
