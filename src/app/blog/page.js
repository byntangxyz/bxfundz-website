import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogList() {
  // Pastikan ini hanya dijalankan di server
  const postsDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(postsDir))
    return <p className="text-center text-gray-400">No posts found.</p>;

  const files = fs.readdirSync(postsDir);
  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title || "Untitled",
      slug: file.replace(".md", ""),
      date: data.date || "No date",
    };
  });

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-white text-dark">
        Blog
      </h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border border-gray-700 rounded-lg p-4 bg-white dark:bg-dark hover:bg-gray-400 dark:hover:bg-gray-800 transition"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400">
                {post.title}
              </h2>
              <p className="text-gray-800 dark:text-gray-400 text-sm mt-1">{post.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
