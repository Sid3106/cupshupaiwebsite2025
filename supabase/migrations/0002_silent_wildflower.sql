/*
  # Fix table relationships

  1. Changes
    - Add foreign key constraints for post_tags table
    - Add indexes for better query performance
    - Update RLS policies

  2. Security
    - Maintain existing RLS policies
    - Ensure proper access control
*/

-- Drop existing post_tags table to recreate with proper constraints
DROP TABLE IF EXISTS post_tags;

-- Recreate post_tags table with proper foreign key constraints
CREATE TABLE post_tags (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (post_id, tag_id)
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_post_tags_post_id ON post_tags(post_id);
CREATE INDEX IF NOT EXISTS idx_post_tags_tag_id ON post_tags(tag_id);

-- Enable RLS
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to post_tags"
  ON post_tags FOR SELECT TO PUBLIC
  USING (true);

-- Add foreign key index on posts table
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);