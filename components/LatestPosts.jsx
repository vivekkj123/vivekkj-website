import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { useMemo } from "react";

const LatestPosts = ({ posts }) => {
  // Use useMemo for better performance
  const latestPosts = useMemo(() => posts.slice(0, 3), [posts]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Latest Posts
          </h2>
          <Link 
            href="/posts"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.slug}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {post.frontmatter.coverImage && (
                <div className="relative h-48 w-full">
                  <ExportedImage
                    src={post.frontmatter.coverImage}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={post.frontmatter.title}
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{new Date(post.frontmatter.date).toLocaleDateString("en-US", { 
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  <span>•</span>
                  <span>{post.frontmatter.readTime || '5 min read'}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-fg transition-colors">
                  {post.frontmatter.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {post.frontmatter.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts; 