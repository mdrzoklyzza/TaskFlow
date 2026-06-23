import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ioadvsntlepmiiwbccjk.supabase.co/";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvYWR2c250bGVwbWlpd2JjY2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDk2MjYsImV4cCI6MjA5NzY4NTYyNn0.h15D8obIqQnvl_4HutnDQVGRLi4TlqK6XQ7TNtXBA4o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);