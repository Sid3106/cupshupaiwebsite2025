import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/blog';

// Fallback posts when fetch fails
const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    slug: 'future-of-ai-in-business',
    excerpt: 'Exploring how AI is transforming modern business operations and workflows.',
    content: 'Full article content here...',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    publishedAt: new Date().toISOString(),
    readTime: '5 min read',
    tags: ['AI', 'Business', 'Technology']
  },
  {
    id: '2',
    title: 'AI Tools for Small Businesses',
    slug: 'ai-tools-small-business',
    excerpt: 'A comprehensive guide to implementing AI tools in small business operations.',
    content: 'Full article content here...',
    coverImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    publishedAt: new Date().toISOString(),
    readTime: '4 min read',
    tags: ['AI Tools', 'SMB', 'Guide']
  }
];

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        setIsLoading(true);
        // For now, use fallback posts instead of fetching
        // When Supabase is properly set up, replace this with actual fetch
        if (isMounted) {
          setPosts(fallbackPosts);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching posts:', err);
          setError(err instanceof Error ? err : new Error('Failed to fetch posts'));
          setPosts(fallbackPosts); // Use fallback posts on error
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { posts, isLoading, error };
}