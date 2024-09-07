import { createClient } from '@supabase/supabase-js';

// Your Supabase URL and public API key from your Supabase dashboard
const supabaseUrl = 'https://cayfvgjakympxwknatco.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
