import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jdtsexrbbiaictwntihy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkdHNleHJiYmlhaWN0d250aWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NTUwNDUsImV4cCI6MjAyNTUzMTA0NX0.kCZsh_JWH2mWUxHTBTm3G_5H4rkvMnLEYiItXIBZWOQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
