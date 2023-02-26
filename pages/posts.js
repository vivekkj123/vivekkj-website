import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

const Posts = () => {
  return (
    <div
      className="bg-primary-bg text-white
  h-screen px-64
  
  "
    >
      <Head>
        <title>Posts | Vivek K J</title>
      </Head>
      <div className="PostsContainer pt-20"></div>
      <h2 className=" text-primary-fg font-bold text-4xl ">Posts</h2>
      <div className="justify-between flex pt-8 text-xl">
        <h4 className="font-semibold">Post 1</h4>
        <h4 className="">Dec 23, 2022</h4>
      </div> <div className="justify-between flex pt-8 text-xl">
        <h4 className="font-semibold">Post 1</h4>
        <h4 className="">Dec 23, 2022</h4>
      </div> <div className="justify-between flex pt-8 text-xl">
        <h4 className="font-semibold">Post 1</h4>
        <h4 className="">Dec 23, 2022</h4>
      </div> <div className="justify-between flex pt-8 text-xl">
        <h4 className="font-semibold">Post 1</h4>
        <h4 className="">Dec 23, 2022</h4>
      </div>
    </div>
  );
};

export default Posts;
