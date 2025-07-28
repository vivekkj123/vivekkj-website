const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  try {
    // Use CommonJS imports for server-side compatibility
    const fs = require('fs');
    const path = require('path');
    const matter = require('gray-matter');
    
    const baseUrl = 'https://vivekkj.in';
    
    // Get all blog posts
    const postsDirectory = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(postsDirectory);
    
    const posts = files
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter } = matter(markdownWithMeta);
        
        return {
          frontmatter,
          slug: filename.replace('.md', '')
        };
      })
      .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/posts</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${posts
    .map((post) => {
      return `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.frontmatter.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    })
    .join('')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback sitemap with just main pages
    const baseUrl = 'https://vivekkj.in';
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/posts</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(fallbackSitemap);
    res.end();

    return {
      props: {},
    };
  }
};

export default Sitemap; 