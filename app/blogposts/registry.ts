
import { aComfortableLife } from './posts/1-a-comfortable-life';
import { nextjsDeployment } from './posts/0-nextjs-deployment';
import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  aComfortableLife,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}