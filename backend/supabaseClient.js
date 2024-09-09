import { createClient } from '@supabase/supabase-js';

// Your Supabase URL and public API key from your Supabase dashboard
const supabaseUrl = 'https://cayfvgjakympxwknatco.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNheWZ2Z2pha3ltcHh3a25hdGNvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzc4MDI3MCwiZXhwIjoyMDM5MzU2MjcwfQ.Wr1jpEbcUhAhfoWz4bH2FYvlz8kIgIKEcDIK7mjGq78";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
