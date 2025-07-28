# 🚀 Vivek K J - Personal Portfolio & Blog

A modern, responsive personal portfolio website built with Next.js, featuring a blog, projects showcase, and optimized for performance and SEO.

![Portfolio Preview](https://i.ibb.co/fz775kXd/VIVEK-K-J-02-01-2025-06-29-PM.jpg)

## ✨ Features

- **🎨 Modern Design**: Clean, responsive design with dark theme and glassmorphism effects
- **📝 Blog System**: Markdown-based blog with syntax highlighting and reading time
- **🖼️ Image Optimization**: Automatic image optimization with WebP support
- **⚡ Performance Optimized**: Lazy loading, dynamic imports, and optimized bundles
- **🔍 SEO Optimized**: Structured data, sitemap, and comprehensive meta tags
- **📱 PWA Ready**: Progressive Web App with offline capabilities
- **🎯 Interactive Elements**: Smooth animations, scroll effects, and interactive components
- **💬 Comments**: Disqus integration for blog comments
- **📊 Analytics Ready**: Google Analytics integration ready

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with SSR/SSG
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety (configurable)

### Content & Blog
- **Gray Matter** - Front matter parsing
- **Marked** - Markdown rendering
- **Reading Time** - Reading time calculation

### Performance & Optimization
- **Next Image Export Optimizer** - Image optimization
- **Sharp** - Image processing
- **Dynamic Imports** - Code splitting
- **Lazy Loading** - Performance optimization

### UI/UX
- **FontAwesome** - Icon library
- **AOS** - Animate On Scroll
- **Swiper** - Touch slider
- **React Spinners** - Loading animations

### SEO & Analytics
- **Next SEO** - SEO optimization
- **Structured Data** - JSON-LD schemas
- **Sitemap Generation** - Dynamic sitemap
- **PWA** - Progressive Web App

## 📁 Project Structure

```
vivekkj-website/
├── components/          # React components
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects gallery
│   ├── WhoAmI.jsx      # About section
│   ├── LatestPosts.jsx # Blog preview
│   ├── ContactMe.jsx   # Contact form
│   ├── Footer.jsx      # Footer
│   └── ...
├── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── posts/          # Blog pages
│   ├── sitemap.xml.js  # Dynamic sitemap
│   └── ...
├── posts/              # Markdown blog posts
│   ├── *.md           # Blog post files
│   └── ...
├── public/             # Static assets
│   ├── images/         # Image assets
│   ├── fonts/          # Custom fonts
│   ├── robots.txt      # SEO robots
│   └── ...
├── styles/             # CSS modules
├── lib/                # Utility functions
├── json/               # Data files
└── utils/              # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vivekkj123/vivekkj-website.git
   cd vivekkj-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Adding Blog Posts

1. **Create a new markdown file** in the `posts/` directory
2. **Add front matter** at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
description: "Brief description of your post"
tags: ["tag1", "tag2"]
coverImage: "/images/path-to-image.jpg"
---
```

3. **Write your content** in Markdown format
4. **The post will automatically appear** in your blog

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  'primary-fg': '#165bdc',
  'primary-bg': '#0A0A0B',
  // ... more colors
}
```

### Content
- **Personal Info**: Update `components/Hero.jsx` and `components/WhoAmI.jsx`
- **Projects**: Edit `json/projects.json`
- **Skills**: Modify `components/Skills.jsx`
- **Social Links**: Update in `components/Hero.jsx`

### SEO
- **Meta Tags**: Configure in `pages/_app.js`
- **Structured Data**: Update in individual components
- **Sitemap**: Automatically generated from blog posts

## ⚡ Performance Optimizations

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Dynamic imports for heavy libraries
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Static generation with ISR
- **PWA**: Offline capabilities and app-like experience

## 🔍 SEO Features

- **Structured Data**: JSON-LD schemas for rich snippets
- **Meta Tags**: Comprehensive Open Graph and Twitter Cards
- **Sitemap**: Dynamic XML sitemap generation
- **Canonical URLs**: Prevent duplicate content
- **Robots.txt**: Search engine crawling instructions

## 📱 PWA Features

- **Offline Support**: Service worker for offline access
- **App-like Experience**: Installable web app
- **Push Notifications**: Ready for implementation
- **Background Sync**: Data synchronization


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - The React framework
- **Tailwind CSS** - Utility-first CSS framework
- **FontAwesome** - Icon library
- **Vercel** - Deployment platform

## 📞 Contact

- **Website**: [vivekkj.in](https://vivekkj.in)
- **Email**: contact@vivekkj.in
- **LinkedIn**: [iamvivekkj](https://linkedin.com/in/iamvivekkj)
- **GitHub**: [vivekkj123](https://github.com/vivekkj123)

---

⭐ **Star this repository if you found it helpful!**
