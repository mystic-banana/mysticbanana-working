import { supabase } from './supabase';
import { Database } from './database.types';

type Reading = Database['public']['Tables']['readings']['Insert'];

export async function saveReading(reading: Omit<Reading, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('readings')
    .insert([reading])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserReadings(userId: string) {
  const { data, error } = await supabase
    .from('readings')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getReadingById(id: string) {
  const { data, error } = await supabase
    .from('readings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}