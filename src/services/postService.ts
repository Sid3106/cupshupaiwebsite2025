import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types/blog';

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select(`
        *,
        author:author_id(name, avatar),
        post_tags(tag_id(name))
      `)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    if (!posts) {
      return [];
    }

    return posts.map(post => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.cover_image,
      author: {
        name: post.author?.name || 'Anonymous',
        avatar: post.author?.avatar || ''
      },
      publishedAt: post.created_at,
      readTime: `${Math.ceil(post.content.split(' ').length / 200)} min read`,
      tags: post.post_tags?.map(pt => pt.tag_id.name) || []
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select(`
        *,
        author:author_id(name, avatar),
        post_tags(tag_id(name))
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }

    if (!post) return null;

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.cover_image,
      author: {
        name: post.author?.name || 'Anonymous',
        avatar: post.author?.avatar || ''
      },
      publishedAt: post.created_at,
      readTime: `${Math.ceil(post.content.split(' ').length / 200)} min read`,
      tags: post.post_tags?.map(pt => pt.tag_id.name) || []
    };
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    throw error;
  }
}