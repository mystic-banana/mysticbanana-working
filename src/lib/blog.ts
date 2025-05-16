import { supabase } from './supabase';
import { Database } from './database.types';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

export async function getPublishedPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      admin_users (
        id,
        role
      )
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      admin_users (
        id,
        role
      )
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) throw error;
  return data;
}

export async function getPostsByCategory(category: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      admin_users (
        id,
        role
      )
    `)
    .eq('category', category)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
}