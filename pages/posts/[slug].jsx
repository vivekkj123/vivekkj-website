import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React from "react";
import readingTime from "reading-time";
import styles from "../../styles/postStyle.module.css";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Post = ({
  frontmatter: { title, date, description, tags },
  slug,
  content,
  ReadTime,
}) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          property="og:image"
          content={`https://og-image-generator-blog.vercel.app/api/og?title=${encodeURIComponent(title)}`}
        />
        <meta
          property="twitter:image"
          content={`https://og-image-generator-blog.vercel.app/api/og?title=${encodeURIComponent(title)}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.vivekkj.in/posts/${slug}`} />
        <meta property="og:title" content={`${title} | Vivek K J`} />
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
              url: `https://og-image-generator-blog.vercel.app/api/og?title=${encodeURIComponent(title)}`,
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen text-white bg-primary-bg">
        <h1 className="text-primary-fg capitalize text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold mb-8 text-center">
          {title}
        </h1>
        <div className="bg-secondary-bg rounded-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm sm:text-base">
            Posted on: {new Date(date).toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-sm sm:text-base">{ReadTime.text}</p>
          <p className="text-sm sm:text-base">
            Tags: {tags.join(", ")}
          </p>
        </div>
        <div
          className={`prose prose-lg prose-invert max-w-none ${styles.post}`}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </article>
    </React.Fragment>
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