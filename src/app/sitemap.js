import fs from "fs";
import path from "path";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bxfundz.my.id";

  // ✅ Daftar halaman statis
  const staticPages = ["/", "/about", "/portfolio", "/blog"].map((page) => {
    return `<url><loc>${siteUrl}${page}</loc></url>`;
  });

  // ✅ Ambil daftar postingan blog
  const postsDir = path.join(process.cwd(), "src/content/blog");
  let blogUrls = [];
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir);
    blogUrls = files.map((file) => {
      const slug = file.replace(".md", "");
      return `<url><loc>${siteUrl}/blog/${slug}</loc></url>`;
    });
  }

  // ✅ Gabungkan semua URL ke dalam sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.join("\n")}
      ${blogUrls.join("\n")}
    </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
