import { supabase } from './supabase';
import { Database } from './database.types';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
type AdminAuditLog = Database['public']['Tables']['admin_audit_log']['Row'];

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>) {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(post)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteBlogPost(id: string) {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      admin_users (
        id,
        role
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getBlogPostBySlug(slug: string) {
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
    .single();

  if (error) throw error;
  return data;
}

export async function logAdminAction(log: Omit<AdminAuditLog, 'id' | 'created_at'>) {
  const { error } = await supabase
    .from('admin_audit_log')
    .insert([log]);

  if (error) throw error;
}

export async function getAdminAuditLogs() {
  const { data, error } = await supabase
    .from('admin_audit_log')
    .select(`
      *,
      admin_users (
        id,
        role
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}