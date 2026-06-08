import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Manas Majhi";
  const category = searchParams.get("category") || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#faf8f5",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#c2410c",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "#78716c",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {category || "Essay"}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            paddingTop: "32px",
            paddingBottom: "32px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 60 ? "52px" : "68px",
              fontWeight: "500",
              color: "#1c1917",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #e7e5e4",
            paddingTop: "32px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              color: "#292524",
              fontWeight: "500",
            }}
          >
            Manas Majhi
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#a8a29e",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            manasmajhi.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
