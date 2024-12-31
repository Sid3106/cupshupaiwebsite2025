/*
  # Blog Schema Setup

  1. New Tables
    - authors (for blog post authors)
    - posts (for blog articles)
    - tags (for post categorization)
    - post_tags (junction table for posts-tags relationship)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create authors table
CREATE TABLE IF NOT EXISTS authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  avatar text,
  bio text,
  created_at timestamptz DEFAULT now()
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  cover_image text,
  author_id uuid REFERENCES authors(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL
);

-- Create junction table for posts and tags
CREATE TABLE IF NOT EXISTS post_tags (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Enable RLS
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to authors"
  ON authors FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Allow public read access to posts"
  ON posts FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Allow public read access to tags"
  ON tags FOR SELECT TO PUBLIC
  USING (true);

CREATE POLICY "Allow public read access to post_tags"
  ON post_tags FOR SELECT TO PUBLIC
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_tags_slug ON tags(slug);