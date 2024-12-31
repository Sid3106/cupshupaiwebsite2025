import React from 'react';
import { BlogCard } from './BlogCard';
import type { BlogPost } from '../../types/blog';

interface BlogListProps {
  posts: BlogPost[];
  isError?: boolean;
}

export function BlogList({ posts, isError }: BlogListProps) {
  if (isError) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          Unable to load blog posts at the moment. Please try again later.
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No blog posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}