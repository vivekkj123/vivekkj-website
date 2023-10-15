import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import matter from "gray-matter";
import Link from "next/link";
import { sortByDate } from "../utils";
import path from "path";

// import fs from 'fs'
const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div
      className="bg-primary-bg text-white
  h-screen lg:px-64 px-8
  
  "
    >
      <Head>
        <title>Posts | Vivek K J</title>
      </Head>
      <div className="PostsContainer pt-20"></div>
      <h2 className=" text-primary-fg font-bold text-4xl ">Posts</h2>
      {posts?.map((post) => (
        <Link
          href={`/posts/${post.slug}`}
          key={post.slug}
          className="grid grid-cols-1 pt-8 text-xl"
        >
          <h4 className="font-semibold">{post.frontmatter.title}</h4>
          <h4 className="text-sm">{new Date(post.frontmatter.date).toLocaleDateString('en-GB')}</h4>
        </Link>
      ))}
      {posts.length === 0 ? <h2>Nothing to see here !</h2> : null}
    </div>
  );
};
export async function getStaticProps() {
  const fs = require("fs");
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
export default Posts;
