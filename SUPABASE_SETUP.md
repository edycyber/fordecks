# Supabase Setup Instructions

## Step 1: Create a Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be provisioned

## Step 2: Get Your Connection Details

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL** (looks like: `https://xxxxx.supabase.co`)
3. Copy your **anon/public key** (a long JWT token)

## Step 3: Update the Client Configuration

Open `src/integrations/supabase/client.ts` and replace:
- `supabaseUrl` with your actual Project URL
- `supabaseAnonKey` with your actual anon/public key

## Step 4: Run the Database Migration

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase/migrations/001_initial_schema.sql`
3. Paste it into the SQL Editor
4. Click "Run" to create the tables and insert initial data

## Step 5: Install Supabase Client

Run this command in your terminal:
```bash
npm install @supabase/supabase-js
```

## Database Schema

### access_codes table
- `id`: UUID (primary key)
- `code`: TEXT (unique)
- `is_active`: BOOLEAN
- `created_at`: TIMESTAMPTZ

### pitch_decks table
- `id`: UUID (primary key)
- `company`: TEXT
- `year`: TEXT
- `stage`: TEXT
- `amount`: TEXT
- `description`: TEXT
- `link`: TEXT
- `created_at`: TIMESTAMPTZ

## Example Credentials Format

**Project URL:**
```
https://abcdefghijklmn.supabase.co
```

**Anon Key (example format):**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.example_signature_part
```

Your actual keys will be different and much longer!
