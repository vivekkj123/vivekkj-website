import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React from "react";
import readingTime from "reading-time";
import styles from "../../styles/postStyle.module.css";
import Head from "next/head";
const Post = ({
  frontmatter: { title, date, tags },
  slug,
  content,
  ReadTime,
}) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{title} | Vivek K J</title>
        <meta name="title" content={`${title} | Vivek K J`} />
        <meta
          property="og:image"
          content={`https://og-image-generator-blog.vercel.app/api/og?title=${title}`}
        />
        <meta
          property="twitter:image"
          content={`https://og-image-generator-blog.vercel.app/api/og?title=${title}`}
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://www.vivekkj.in/posts" />
        <meta property="og:title" content={`${title} | Vivek K J`} />
        <meta property="twitter:title" content={`${title} | Vivek K J`} />
        <meta
          content={
            `vivek, VIVEK K J, foss, debian, web developer, vivu, വിവേക്, വിവേക് കെ ജെ, programmer, developer, open source, ` +
            tags.map((tag) => tag)
          }
          name="keywords"
        />
      </Head>
      <article className="prose-lg Post px-6 min-h-screen lg:px-40 pt-20 text-white bg-primary-bg">
        <h1 className="text-primary-fg capitalize text-4xl text-center font-bold ">
          {title}
        </h1>
        <div className="lg:my-6 flex items-center lg:flex-row flex-col leading-none lg:justify-between">
          <p>
            Tags:{" "}
            {tags.map((tag, i) => (
              <span key={tag}>
                {tag}
                {i !== tags.length - 1 ? "," : ""}
              </span>
            ))}
          </p>
          <p>{ReadTime.text}</p>
          <p>Posted On: {new Date(date).toLocaleDateString("en-GB")}</p>
        </div>
        <p
          className={`lg:py-10 lg:px-20 space-y-1 break-words whitespace-pre-line ${styles.post}`}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></p>
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
