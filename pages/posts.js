import matter from "gray-matter";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { sortByDate } from "../utils";

// import fs from 'fs'
const Posts = ({ posts }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">

      {currentItems?.map((post) => (
        <Link
        href={`/posts/${post.slug}`}
        key={post.slug}
        className="flex flex-col justify-center py-4 text-xl bg-secondary-bg  px-6 rounded-3xl"
        >
            {post.frontmatter.coverImage && (
            <ExportedImage
            src={post.frontmatter.coverImage}
            width={20}
            height={20}
            alt={post.frontmatter.title}
            style={{ objectFit: "scale-down" }}
            className="h-32 mx-auto w-auto hidden md:block rounded-xl"
            />
          )}
          <div className="hover:text-primary-fg my-4 transition-colors delay-200">
            <h4 className="font-semibold">{post.frontmatter.title}</h4>
            <h4 className="text-sm">
              {new Date(post.frontmatter.date).toLocaleDateString("en-GB")}
            </h4>
          </div>
        
        </Link>
      ))}
      </div>
      {posts.length === 0 ? <h2>Nothing to see here !</h2> : null}
      <ReactPaginate
        breakLabel="..."
        nextLabel="➡️"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="⬅️"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-4 gap-2 "
        pageClassName="bg-secondary-bg px-2 py-2 h-8 w-8 flex items-center justify-center rounded-full hover:bg-primary-bg hover:text-white rounded-full"
        nextClassName="bg-secondary-bg px-2 py-2 rounded-md"
        previousClassName="bg-secondary-bg px-2 py-2 rounded-md"
        activeClassName="bg-primary-fg text-black"
      />
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
