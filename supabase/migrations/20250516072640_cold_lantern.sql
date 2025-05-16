/*
  # Fix registration policy for profiles table

  1. Changes
    - Drop existing policies
    - Create new policies for registration flow
    - Add policy for public profile creation during signup

  2. Security
    - Maintain RLS
    - Allow profile creation during registration
    - Restrict profile access to authenticated users
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Public can create profile during registration" ON profiles;
DROP POLICY IF EXISTS "Users can create own profile" ON profiles;
DROP POLICY IF EXISTS "Users can create profile during registration" ON profiles;

-- Create new policies
CREATE POLICY "Enable insert for registration"
ON profiles
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Enable read for users"
ON profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Enable update for users"
ON profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);