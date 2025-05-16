/*
  # Fix recursive admin users policy

  1. Changes
    - Drop existing recursive policy on admin_users table
    - Create new non-recursive policy for admin_users table
  
  2. Security
    - Maintains RLS on admin_users table
    - Adds policy for authenticated users to read admin_users table if they are an admin
*/

-- Drop the existing policy that causes recursion
DROP POLICY IF EXISTS "Admin users can read all admin_users" ON admin_users;

-- Create new policy that avoids recursion by using auth.uid() directly
CREATE POLICY "Admin users can read all admin_users"
ON admin_users
FOR SELECT
TO authenticated
USING (
  -- Simply check if the current user has a record in admin_users
  id = auth.uid()
);