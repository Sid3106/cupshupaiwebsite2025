-- Add users table for registration
ALTER TABLE users ADD COLUMN
  organization VARCHAR(255),
  org_size VARCHAR(50) CHECK (org_size IN ('lt5', '5-20', '20-100', 'gt100')),
  industry VARCHAR(100);

-- Add indexes for better query performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_organization ON users(organization);