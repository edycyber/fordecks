import { createClient } from '@supabase/supabase-js';

// Example Supabase connection details
// Replace these with your actual Supabase project credentials from https://supabase.com/dashboard/project/_/settings/api
const supabaseUrl = 'https://ovdowwrdxxrghocxvfrm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92ZG93d3JkeHhyZ2hvY3h2ZnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTQ1OTAsImV4cCI6MjA3ODA5MDU5MH0.er4qSMRUlRs8VRsCPvKNGJjra5B4wNj7ZMNjw7Uf5ZE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
