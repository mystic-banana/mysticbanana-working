/*
  # Fix profiles table RLS policies

  1. Changes
    - Update RLS policy for profile creation to allow new users to create their profile
    - Ensure policy uses auth.uid() for security

  2. Security
    - Modify INSERT policy to allow profile creation during registration
    - Maintain existing SELECT and UPDATE policies
*/

DROP POLICY IF EXISTS "Users can create own profile" ON profiles;

CREATE POLICY "Users can create own profile"
ON profiles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = id
);

CREATE POLICY "Public can create profile during registration"
ON profiles
FOR INSERT
TO public
WITH CHECK (
  -- Allow profile creation during registration
  true
);