import React from 'react';
import { PostSlider } from '../blog/PostSlider/PostSlider';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export function FeaturedPosts() {
  const { posts, isLoading } = useBlogPosts();
  const featuredPosts = posts.slice(0, 4); // Get first 4 posts

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay updated with our latest insights and innovations
          </p>
        </div>

        <PostSlider posts={featuredPosts} />
      </div>
    </section>
  );
}