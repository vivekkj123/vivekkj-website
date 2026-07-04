import matter from "gray-matter";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import { useState, useMemo } from "react";
import { sortByDate } from "../utils";
import { motion } from "framer-motion";

const Posts = ({ posts = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Use useMemo for better performance
  const filteredPosts = useMemo(() => {
    return posts.filter(post => 
      post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] to-[#0b0f19] text-white px-4 md:px-8 lg:px-16">
      <Head>
        <title>Blog | Vivek K J</title>
      </Head>
      
      <div className="max-w-7xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            A place for sharing my thoughts, ideas, and experiences. All opinions shared on this blog are solely my own and do not represent the views of any organization or entity.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-primary-fg focus:ring-2 focus:ring-primary-fg/20 transition-all duration-300 placeholder:text-gray-500"
          />
          <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={item}
              className="flex"
            >
              <Link
                href={`/posts/${post.slug}`}
                className="group w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] hover:border-primary-fg/30 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary-fg/5 transition-all duration-300"
              >
                {post.frontmatter.coverImage && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.frontmatter.coverImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={post.frontmatter.title}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
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
                  </div>

                  <div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.frontmatter.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[10px] font-medium bg-primary-fg/10 text-primary-fg rounded-full border border-primary-fg/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-gray-400 line-clamp-2">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
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
}

export default Posts;
