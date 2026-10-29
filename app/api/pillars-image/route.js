import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const destPath = path.join(process.cwd(), "public", "images", "pillars-master.jpg");

    if (fs.existsSync(destPath)) {
      const buffer = fs.readFileSync(destPath);
      return new Response(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  } catch (err) {
    console.error("Error serving pillars master image:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

