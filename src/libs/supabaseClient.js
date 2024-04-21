import { createClient } from '@supabase/supabase-js'

export const supabase = createClient("https://rpwbrvcviqwfbsshrqls.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwd2JydmN2aXF3ZmJzc2hycWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3Mjk1MDYsImV4cCI6MjAyOTMwNTUwNn0.grjLIg_NXpC4IchiVp-1Znh6fl3cQmviHhToj2eDy5s");