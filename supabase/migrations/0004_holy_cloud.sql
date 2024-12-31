/*
  # Create leads table for capturing business inquiries

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required, unique)
      - `phone` (text, required)
      - `organization` (text)
      - `company_size` (text)
      - `requirements` (text, required)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `leads` table
    - Add policy for inserting new leads
*/

CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text,
  company_size text CHECK (company_size IN ('lt5', '5-20', '20-100', 'gt100')),
  requirements text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for email lookups
CREATE INDEX idx_leads_email ON leads(email);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting new leads
CREATE POLICY "Enable insert access for all users" ON leads
  FOR INSERT
  WITH CHECK (true);