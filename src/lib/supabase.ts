import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://jgoclmjztpkcgyazqite.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_YWYkToY7GNvHiJfog1PVJQ_1S7xWHTg';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Falling back to mock data mode.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
