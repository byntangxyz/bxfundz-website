import fs from "fs";
import path from "path";

export async function GET() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);

  const urls = files.map((file) => {
    const slug = file.replace(".md", "");
    return `<url><loc>${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}</loc></url>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("\n")}
    </urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
