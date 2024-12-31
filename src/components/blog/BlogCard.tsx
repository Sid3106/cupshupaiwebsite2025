import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}