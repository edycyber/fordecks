import { createClient } from '@supabase/supabase-js';

// Example Supabase connection details
// Replace these with your actual Supabase project credentials from https://supabase.com/dashboard/project/_/settings/api
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItcHJvamVjdC1pZCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQ1MTkyODAwLCJleHAiOjE5NjA3Njg4MDB9.example-anon-key-replace-with-your-actual-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
