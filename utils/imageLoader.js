export default function wsrvLoader({ src, width, quality }) {
  // In development, serve the image directly with a width query param.
  // Next.js requires the returned URL to change based on the width parameter to satisfy its check,
  // while the local dev server will ignore the query param and serve the file correctly.
  if (process.env.NODE_ENV === 'development') {
    return src.includes('?') ? `${src}&w=${width}` : `${src}?w=${width}`;
  }

  // Your production site domain (wsrv.nl needs absolute URLs to fetch the source images)
  const productionUrl = 'https://vivekkj.in';
  
  // Convert relative paths to absolute URLs using the production domain
  const absoluteSrc = src.startsWith('http') ? src : `${productionUrl}${src}`;

  // wsrv.nl API parameters:
  // url: The URL of the image to resize (must be publicly accessible)
  // w: Width of the output image
  // q: Quality of the output image (default is 75)
  // output: Output format (webp)
  return `https://wsrv.nl/?url=${encodeURIComponent(absoluteSrc)}&w=${width}&q=${quality || 75}&output=webp`;
}
