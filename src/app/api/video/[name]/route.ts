import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { createReadStream, statSync } from "fs";
import { Readable } from "stream";

// Must use Node.js runtime — Edge runtime has no fs access
export const runtime = "nodejs";

function nodeToWebStream(nodeStream: Readable): ReadableStream<Uint8Array> {
  return new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk: Buffer) => {
        controller.enqueue(new Uint8Array(chunk));
      });
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      nodeStream.destroy();
    },
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  // Security: only allow safe mp4 filenames — no path traversal
  if (!name.match(/^[a-z0-9-]+\.mp4$/) || name.includes("..")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const videoPath = path.join(process.cwd(), "public", "video", name);

  let stats;
  try {
    stats = statSync(videoPath);
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }

  const fileSize = stats.size;
  const rangeHeader = request.headers.get("range");

  if (rangeHeader) {
    const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
    if (!match) {
      return new NextResponse("Invalid Range", {
        status: 416,
        headers: { "Content-Range": `bytes */${fileSize}` },
      });
    }

    const start = parseInt(match[1], 10);
    const end = match[2]
      ? parseInt(match[2], 10)
      : Math.min(start + 2 * 1024 * 1024 - 1, fileSize - 1); // 2MB default chunk

    if (start >= fileSize) {
      return new NextResponse("Range Not Satisfiable", {
        status: 416,
        headers: { "Content-Range": `bytes */${fileSize}` },
      });
    }

    const clampedEnd = Math.min(end, fileSize - 1);
    const chunkSize = clampedEnd - start + 1;
    const stream = createReadStream(videoPath, { start, end: clampedEnd });

    return new NextResponse(nodeToWebStream(stream), {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${clampedEnd}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": "video/mp4",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  // Full file — no Range header
  const stream = createReadStream(videoPath);

  return new NextResponse(nodeToWebStream(stream), {
    status: 200,
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": fileSize.toString(),
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
