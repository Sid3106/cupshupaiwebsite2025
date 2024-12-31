/*
  # Add subscriptions table

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `created_at` (timestamptz)
      - `status` (text) - For tracking subscription status
      - `last_email_sent` (timestamptz) - For rate limiting

  2. Security
    - Enable RLS on `subscriptions` table
    - Add policy for inserting new subscriptions
*/

CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  last_email_sent timestamptz
);

-- Create index for email lookups
CREATE INDEX idx_subscriptions_email ON subscriptions(email);

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting new subscriptions
CREATE POLICY "Enable insert for all users" ON subscriptions
  FOR INSERT
  WITH CHECK (true);

-- Create policy for reading own subscription
CREATE POLICY "Enable read for all users" ON subscriptions
  FOR SELECT
  USING (true);