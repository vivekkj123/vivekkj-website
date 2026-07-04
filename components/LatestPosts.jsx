import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

const LatestPosts = ({ posts }) => {
  // Use useMemo for better performance
  const latestPosts = useMemo(() => posts.slice(0, 3), [posts]);

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
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Latest Posts
          </h2>
          <Link 
            href="/posts"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            <span>View all posts</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {latestPosts.map((post) => (
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
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.frontmatter.coverImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={post.frontmatter.title}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span>{new Date(post.frontmatter.date).toLocaleDateString("en-US", { 
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                      <span>•</span>
                      <span>{post.frontmatter.readTime || '5 min read'}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-fg transition-colors line-clamp-2">
                      {post.frontmatter.title}
                    </h3>
                  </div>

                  <div>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.frontmatter.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[10px] font-medium bg-primary-fg/10 text-primary-fg rounded-full border border-primary-fg/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-400 text-sm line-clamp-2">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestPosts; 