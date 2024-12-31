import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import type { BlogPost } from '../../../types/blog';

interface SlideContentProps {
  post: BlogPost;
}

export function SlideContent({ post }: SlideContentProps) {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-64">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-sm mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm">
                {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
              </span>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}