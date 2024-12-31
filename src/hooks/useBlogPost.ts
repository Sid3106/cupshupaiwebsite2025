import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/blog';

// Fallback posts map for direct access
const fallbackPostsMap: Record<string, BlogPost> = {
  'future-of-ai-in-business': {
    id: '1',
    title: 'The Future of AI in Business',
    slug: 'future-of-ai-in-business',
    excerpt: 'Exploring how AI is transforming modern business operations and workflows.',
    content: `# The Future of AI in Business

## Introduction
Artificial Intelligence is revolutionizing how businesses operate, from streamlining workflows to enhancing decision-making processes.

## Key Areas of Impact
1. Process Automation
2. Customer Service
3. Data Analysis
4. Decision Making

## Implementation Strategies
- Start with clear objectives
- Choose the right tools
- Train your team
- Monitor and optimize

## Conclusion
AI is not just a trend but a fundamental shift in how businesses operate.`,
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    publishedAt: new Date().toISOString(),
    readTime: '5 min read',
    tags: ['AI', 'Business', 'Technology']
  },
  'ai-tools-small-business': {
    id: '2',
    title: 'AI Tools for Small Businesses',
    slug: 'ai-tools-small-business',
    excerpt: 'A comprehensive guide to implementing AI tools in small business operations.',
    content: `# AI Tools for Small Businesses

## Getting Started
Learn how to implement AI tools effectively in your small business operations.

## Essential Tools
1. Customer Service Automation
2. Data Analysis Tools
3. Process Optimization
4. Marketing Automation

## Implementation Guide
- Assess your needs
- Set a budget
- Choose the right tools
- Train your team

## Success Stories
Real examples of small businesses transforming with AI.`,
    coverImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    publishedAt: new Date().toISOString(),
    readTime: '4 min read',
    tags: ['AI Tools', 'SMB', 'Guide']
  }
};

export function useBlogPost(slug: string | undefined) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setError(new Error('No slug provided'));
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    async function fetchPost() {
      try {
        setIsLoading(true);
        // For now, use fallback posts instead of fetching
        const fallbackPost = fallbackPostsMap[slug];
        
        if (!fallbackPost) {
          throw new Error('Post not found');
        }

        if (isMounted) {
          setPost(fallbackPost);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching post:', err);
          setError(err instanceof Error ? err : new Error('Failed to fetch post'));
          setPost(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { post, isLoading, error };
}