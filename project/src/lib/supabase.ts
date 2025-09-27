import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fulzrnmqxioyckwikrjh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1bHpybm1xeGlveWNrd2lrcmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NjAwMjUsImV4cCI6MjA3NDUzNjAyNX0.MLKejx8xCXICM43nv8_nZdwJqyOP0FkwSMohNcSLHM0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface UserProfile {
  id: string
  email: string
  name: string
  role: string
  linkedin_url?: string
  created_at: string
  updated_at: string
}