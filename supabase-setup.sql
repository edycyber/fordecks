-- Run this SQL in your Supabase SQL Editor
-- (Dashboard → SQL Editor → New Query)

-- Create pitch_decks table
CREATE TABLE IF NOT EXISTS pitch_decks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL,
  year TEXT NOT NULL,
  stage TEXT NOT NULL,
  amount TEXT NOT NULL,
  description TEXT NOT NULL,
  link TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE pitch_decks ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can read pitch decks"
  ON pitch_decks FOR SELECT
  TO public
  USING (true);

-- Insert the Eleven Labs deck as first entry
INSERT INTO pitch_decks (company, year, stage, amount, description, link)
VALUES (
  'Eleven Labs',
  '2023',
  'Pre-Seed',
  '$2m',
  'Eleven Labs offers AI text-to-speech (TTS) dubbing software to generate lifelike speech in any language and voice.',
  'https://drive.google.com/file/d/16p8InLz7fl4OV2LXHKbLSGlVP7X34uUm/view'
);
