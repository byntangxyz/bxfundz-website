import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bxfundz.my.id";

  // ✅ Halaman statis
  const staticPages = ["/", "/about", "/portfolio", "/blog"].map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date().toISOString(),
  }));

  // ✅ Ambil daftar blog dari `src/content/blog`
  const postsDir = path.join(process.cwd(), "src/content/blog");
  let blogPages = [];
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir);
    blogPages = files.map((file) => ({
      url: `${siteUrl}/blog/${file.replace(".md", "")}`,
      lastModified: new Date().toISOString(),
    }));
  }

  return [...staticPages, ...blogPages];
}
