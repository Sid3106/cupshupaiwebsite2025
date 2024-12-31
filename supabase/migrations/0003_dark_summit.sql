/*
  # Add sample content

  1. New Content
    - Sample authors with proper UUIDs
    - Sample tags with valid IDs
    - Sample blog posts with realistic content
    - Post-tag relationships
  
  2. Security
    - Enable RLS policies
    - Add proper indexes
*/

-- Insert sample authors
INSERT INTO authors (id, name, avatar, bio) VALUES
  ('d1e94950-6f8e-4c4d-9bd4-4e1e4fae5b78', 'Sarah Chen', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', 'AI Research Lead with 10+ years experience in machine learning and automation'),
  ('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Michael Rodriguez', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'Senior AI Engineer specializing in workflow automation and process optimization'),
  ('a98b3c5d-4e6f-4372-9567-1e02b2c3d479', 'Emily Watson', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', 'Tech Writer and AI Consultant focusing on emerging technologies');

-- Insert sample tags
INSERT INTO tags (id, name, slug) VALUES
  ('31f7a873-6f8e-4c4d-9bd4-4e1e4fae5b78', 'AI Tools', 'ai-tools'),
  ('42e8b964-58cc-4372-a567-0e02b2c3d479', 'Automation', 'automation'),
  ('53d9c055-4e6f-4372-9567-1e02b2c3d479', 'Machine Learning', 'machine-learning'),
  ('64c0d146-6f8e-4c4d-9bd4-4e1e4fae5b78', 'Business', 'business'),
  ('75b1e237-58cc-4372-a567-0e02b2c3d479', 'Technology', 'technology');

-- Insert sample posts
INSERT INTO posts (id, title, slug, content, excerpt, cover_image, author_id) VALUES
  (
    '86a2f328-6f8e-4c4d-9bd4-4e1e4fae5b78',
    'The Future of AI in Business Automation',
    'future-of-ai-business-automation',
    E'Artificial Intelligence is revolutionizing how businesses operate, from streamlining workflows to enhancing decision-making processes. This comprehensive guide explores the latest developments in AI-powered business automation and their practical applications.\n\n## Understanding AI Automation\n\nAI automation combines artificial intelligence with robotic process automation (RPA) to create intelligent systems that can handle complex tasks. Unlike traditional automation, AI-powered systems can learn, adapt, and make decisions based on data patterns.\n\n## Key Benefits\n\n1. Increased Efficiency\n2. Reduced Errors\n3. Cost Savings\n4. Improved Customer Experience\n5. Better Decision Making\n\n## Implementation Strategies\n\nSuccessful AI automation implementation requires careful planning and execution. Here are the key steps:\n\n1. Assess Current Processes\n2. Identify Automation Opportunities\n3. Choose the Right Tools\n4. Plan Implementation Phases\n5. Monitor and Optimize\n\n## Real-World Applications\n\nLeading companies are already leveraging AI automation to transform their operations. Here are some notable examples...',
    'Explore how AI is transforming business automation and learn implementation strategies for success.',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    'd1e94950-6f8e-4c4d-9bd4-4e1e4fae5b78'
  ),
  (
    '97c3e419-58cc-4372-a567-0e02b2c3d479',
    'Building Effective AI Agents for Business',
    'building-effective-ai-agents',
    E'AI agents are becoming increasingly sophisticated, offering businesses new ways to automate complex tasks and enhance customer interactions. This article explores the essential components of effective AI agents and best practices for implementation.\n\n## What Are AI Agents?\n\nAI agents are software programs that can perceive their environment and take actions to achieve specific goals. They combine multiple AI technologies, including natural language processing, machine learning, and decision-making algorithms.\n\n## Key Components\n\n1. Natural Language Understanding\n2. Task Processing\n3. Learning Capabilities\n4. Integration Abilities\n5. Response Generation\n\n## Implementation Guide\n\nBuilding effective AI agents requires careful consideration of various factors:\n\n1. Define Clear Objectives\n2. Choose the Right Architecture\n3. Implement Learning Mechanisms\n4. Ensure Proper Integration\n5. Monitor Performance\n\n## Best Practices\n\nTo maximize the effectiveness of AI agents...',
    'Learn how to build and implement effective AI agents for business automation.',
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479'
  );

-- Create post-tag relationships
INSERT INTO post_tags (post_id, tag_id) VALUES
  ('86a2f328-6f8e-4c4d-9bd4-4e1e4fae5b78', '31f7a873-6f8e-4c4d-9bd4-4e1e4fae5b78'),
  ('86a2f328-6f8e-4c4d-9bd4-4e1e4fae5b78', '42e8b964-58cc-4372-a567-0e02b2c3d479'),
  ('86a2f328-6f8e-4c4d-9bd4-4e1e4fae5b78', '64c0d146-6f8e-4c4d-9bd4-4e1e4fae5b78'),
  ('97c3e419-58cc-4372-a567-0e02b2c3d479', '31f7a873-6f8e-4c4d-9bd4-4e1e4fae5b78'),
  ('97c3e419-58cc-4372-a567-0e02b2c3d479', '53d9c055-4e6f-4372-9567-1e02b2c3d479'),
  ('97c3e419-58cc-4372-a567-0e02b2c3d479', '75b1e237-58cc-4372-a567-0e02b2c3d479');

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);

-- Enable RLS and create policies
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON posts
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON tags
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON post_tags
    FOR SELECT USING (true);