import matter from "gray-matter";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { useState } from "react";
import { sortByDate } from "../utils";

const Posts = ({ posts = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = posts.filter(post => 
    post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0B] to-[#1A1A1A] text-white px-4 md:px-8 lg:px-16">
      <Head>
        <title>Blog | Vivek K J</title>
      </Head>
      
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          A place for sharing my thoughts, ideas, and experiences.
        </p>

        {/* Search Bar */}
        <div className="relative mb-16">
          <input
            type="text"
            placeholder="Search articles"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-primary-fg"
          />
          <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {post.frontmatter.coverImage && (
                <div className="relative h-64 w-full">
                  <ExportedImage
                    src={post.frontmatter.coverImage}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={post.frontmatter.title}
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{new Date(post.frontmatter.date).toLocaleDateString("en-US", { 
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  <span>•</span>
                  <span>{post.frontmatter.readTime || '5 min read'}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary-fg transition-colors">
                  {post.frontmatter.title}
                </h2>
                <p className="text-gray-400 line-clamp-2">
                  {post.frontmatter.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const fs = require('fs');
    const files = fs.readdirSync(path.join('posts'));
    
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      
      return {
        frontmatter,
        slug: filename.replace('.md', '')
      };
    });

    return {
      props: {
        posts: posts.sort(sortByDate)
      }
    };
  } catch (error) {
    console.error('Error loading posts:', error);
    return {
      props: {
        posts: []
      }
    };
  }
}

export default Posts;
