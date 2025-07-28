import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React from "react";
import readingTime from "reading-time";
import styles from "../../styles/postStyle.module.css";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useState } from "react";
import DisqusComments from "../../components/DisqusComments";

const Post = ({
  frontmatter: { title, date, description, tags },
  slug,
  content,
  ReadTime,
}) => {
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    // Configure marked to add IDs to headings
    marked.use({
      headerIds: true,
      headerPrefix: "", // removes the default 'user-content-' prefix
    });

    // Extract headings from content
    const matches = content.match(/^#{2,3}\s+(.+)$/gm) || [];
    const extractedHeadings = matches.map((heading) => ({
      level: heading.match(/^#{2,3}/)[0].length,
      text: heading.replace(/^#{2,3}\s+/, ""),
      id: heading
        .replace(/^#{2,3}\s+/, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-"),
    }));
    setHeadings(extractedHeadings);
    
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    // Wait for content to be rendered
    setTimeout(() => {
      document.querySelectorAll("h2, h3").forEach((heading) => {
        // Ensure heading has an ID that matches our extracted headings
        if (!heading.id) {
          heading.id = heading.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-");
        }
        observer.observe(heading);
      });
    }, 100);

    return () => observer.disconnect();
  }, [content]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0B] to-[#1A1A1A] text-white">
      <Head>
        <meta
          property="og:image"
          content={`https://og-image-generator-blog.vercel.app/api/og?title=${encodeURIComponent(
            title
          )}`}
        />
        <meta
          property="twitter:image"
          content={`https://og-image-generator-blog.vercel.app/api/og?title=${encodeURIComponent(
            title
          )}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.vivekkj.in/posts/${slug}`}
        />
        <meta property="og:title" content={`${title} | Vivek K J`} />
        <meta property="description" content={description}/>
        <meta property="og:description" content={description}/>
        <meta property="twitter:title" content={`${title} | Vivek K J`} />
        <meta
          content={
            `vivek, VIVEK K J, foss, debian, web developer, vivu, വിവേക്, വിവേക് കെ ജെ, programmer, developer, open source, ` +
            tags.join(", ")
          }
          name="keywords"
        />
      </Head>
      <NextSeo
        title={`${title} | Vivek K J`}
        description={description}
        openGraph={{
          url: `https://vivekkj.in/${slug}`,
          title: title,
          description: description,
          images: [
            {
              url: `https://og-image-generator-blog.vercel.app/api/og?title=${encodeURIComponent(
                title
              )}`,
              width: 800,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: "@iamvivekkj",
          site: "@iamvivekkj",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">{title}</h1>

            <div className="flex flex-wrap gap-4 items-center text-gray-400 mb-12">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{ReadTime.text}</span>
              {tags && tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/5 backdrop-blur-xl rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div
              className={styles.post}
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
          </article>
         
          {/* Table of Contents */}
          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-8 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {/* Root title */}
                  <div className="font-bold text-white mb-4">{title}</div>
                  {/* Indented headings */}
                  <div className="border-l-2 border-white/10 pl-4 ml-2 space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm ${
                          heading.level === 3 ? "ml-4" : ""
                        } ${
                          activeHeading === heading.id
                            ? "text-primary-fg"
                            : "text-gray-400 hover:text-white"
                        } transition-colors`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>
          )}
        </div>
        <DisqusComments
            url={`https://vivekkj.in/posts/${slug}`}
            identifier={slug}
            
            title={title}
          />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const fs = require("fs");
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fs = require("fs");
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  let ReadTime = readingTime(content);
  return {
    props: {
      frontmatter,
      slug,
      content,
      ReadTime,
    },
  };
}

export default Post;
