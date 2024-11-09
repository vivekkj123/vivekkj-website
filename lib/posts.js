import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils';

export function getAllPosts() {
  try {
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

    return posts.sort(sortByDate);
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
} 