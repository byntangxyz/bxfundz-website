import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Calendar from "@/components/icons/Calender";
import Person from "@/components/icons/Person";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/content/blog",
    `${params.slug}.md`
  );
  if (!fs.existsSync(filePath)) return { title: "Blog Not Found" };

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title || "Blog Post",
    description: data.description || "Read this blog post.",
    openGraph: {
      title: data.title || "Blog Post",
      description: data.description || "Read this blog post.",
      url: `/blog/${params.slug}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src/content/blog",
    `${params.slug}.md`
  );
  if (!fs.existsSync(filePath))
    return <p className="text-center text-red-500">Post not found</p>;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto p-6 text-dark dark:text-white">
      <h1 className="text-4xl mb-4 font-bold text-blue-800 dark:text-blue-400 text-center">
        {data.title}
      </h1>
      <Image
        src={data.img}
        width={480}
        height={270}
        alt="blog-image"
        className="m-auto mb-4 rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"
      />
      <div className="flex gap-3 text-center m-auto justify-center">
        <p className="dark:text-gray-400 text-gray-800 text-sm mt-1 flex gap-2">
          <Calendar />
          {data.date}
        </p>
        <p className="dark:text-gray-400 text-gray-800 text-sm mt-1 flex gap-2">
          <Person />
          {data.author}
        </p>
      </div>

      <hr className="my-4 border-gray-700" />
      <div className="prose dark:prose-invert prose prose-a:underline leading-relaxed">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-blue-400 underline hover:text-blue-300 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            h1: ({ children }) => (
              <>
                <h1 className="text-4xl font-bold">{children}</h1>
                <br />
              </>
            ),
            h2: ({ children }) => (
              <>
                <h2 className="text-2xl font-semibold" id={children}>
                  {children}
                </h2>
                <br />
              </>
            ),
            h3: ({ children }) => (
              <>
                <h2 className="text-xl font-semibold" id={children}>
                  {children}
                </h2>
                <br />
              </>
            ),

            p: ({ children }) => (
              <>
                <p className="text-[1rem]">{children}</p>
                <br />
              </>
            ),
            li: ({ children }) => (
              <>
                <li className="ml-3">&#9679; {children}</li>
                <br />
              </>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
