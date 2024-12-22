import { ReactNode } from 'react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
  // Optional fields
  author?: string;
  tags?: string[];
  readingTime?: string;
  coverImage?: string;
  isPublished?: boolean;
  lastModified?: string;
  category?: string;
}

// Base BlogPost object that can be extended by individual posts
export const BaseBlogPost: Omit<BlogPost, 'id' | 'slug' | 'title' | 'excerpt' | 'content'> = {
  date: new Date().toISOString().split('T')[0],
  author: 'Your Name',
  isPublished: true,
  tags: [],
  category: 'Uncategorized',
};

export type BlogPostStatus = 'draft' | 'published' | 'archived';

export interface BlogPostMetadata {
  totalPosts: number;
  categories: string[];
  tags: string[];
}