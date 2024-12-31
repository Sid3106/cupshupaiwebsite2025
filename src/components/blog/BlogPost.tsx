import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { useBlogPost } from '../../hooks/useBlogPost';

export function BlogPost() {
  const { slug } = useParams();
  const { post, isLoading, error } = useBlogPost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error?.message || 'Post not found'}
          </h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary-600 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        <img 
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex items-center">
            <img 
              src={post.author.avatar}
              alt={post.author.name}
              className="h-10 w-10 rounded-full mr-3"
            />
            <span className="text-gray-700">{post.author.name}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}