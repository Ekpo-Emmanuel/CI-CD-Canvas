import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://ezojlihknxyowdmalmwx.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6b2psaWhrbnh5b3dkbWFsbXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwODY3OTMsImV4cCI6MjA0MTY2Mjc5M30.0Q4UT7XYlKSiC-p4QuDoceMYzPVl8Yd6Z_srYSPSvH8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
