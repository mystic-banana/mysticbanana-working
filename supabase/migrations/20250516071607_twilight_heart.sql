/*
  # Add INSERT policy for profiles table

  1. Security Changes
    - Add new RLS policy to allow authenticated users to create their own profile
    - Policy ensures users can only create a profile with their own user ID
    
  Note: This complements existing policies that allow users to read and update their own profiles
*/

CREATE POLICY "Users can create own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);