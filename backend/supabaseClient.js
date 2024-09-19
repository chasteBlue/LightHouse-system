//new
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://cayfvgjakympxwknatco.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNheWZ2Z2pha3ltcHh3a25hdGNvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzc4MDI3MCwiZXhwIjoyMDM5MzU2MjcwfQ.Wr1jpEbcUhAhfoWz4bH2FYvlz8kIgIKEcDIK7mjGq78';

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key are required.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = { supabase };
