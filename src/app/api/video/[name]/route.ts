import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { openSync, statSync, readSync, closeSync } from "fs";

// Must use Node.js runtime — Edge runtime has no fs access
export const runtime = "nodejs";

function readChunk(filePath: string, start: number, end: number): Buffer {
  const length = end - start + 1;
  const buf = Buffer.allocUnsafe(length);
  const fd = openSync(filePath, "r");
  readSync(fd, buf, 0, length, start);
  closeSync(fd);
  return buf;
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
      return new NextResponse("Range Not Satisfiable", {
        status: 416,
        headers: { "Content-Range": `bytes */${fileSize}` },
      });
    }

    const start = parseInt(match[1], 10);
    // If end is omitted (bytes=0-), serve full remainder
    const requestedEnd = match[2] ? parseInt(match[2], 10) : fileSize - 1;
    const end = Math.min(requestedEnd, fileSize - 1);

    if (start >= fileSize) {
      return new NextResponse("Range Not Satisfiable", {
        status: 416,
        headers: { "Content-Range": `bytes */${fileSize}` },
      });
    }

    const chunk = readChunk(videoPath, start, end);

    return new NextResponse(chunk, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunk.length.toString(),
        "Content-Type": "video/mp4",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  // Full file request — read entire file into buffer
  const chunk = readChunk(videoPath, 0, fileSize - 1);

  return new NextResponse(chunk, {
    status: 200,
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": fileSize.toString(),
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
