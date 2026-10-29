import fs from "fs";
import path from "path";

export async function GET() {
  const sourcePath =
    "C:/Users/1/.gemini/antigravity/brain/00672896-3da8-48fc-a4b3-c5f6c03b4aaf/.user_uploaded/media_1793268427585_a83507c5.jpg";

  try {
    const destDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const destPath = path.join(destDir, "pillars-master.jpg");

    if (fs.existsSync(sourcePath)) {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(sourcePath, destPath);
      }
      const buffer = fs.readFileSync(destPath);
      return new Response(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    if (fs.existsSync(destPath)) {
      const buffer = fs.readFileSync(destPath);
      return new Response(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }
  } catch (err) {
    console.error("Error serving pillars master image:", err);
  }

  return new Response("Not found", { status: 404 });
}

