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
        <title>{title} | Vivek K J</title>
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
          <p>Posted On: {date}</p>
        </div>
        <p
          className={`lg:py-10 ${styles.post}`}
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
