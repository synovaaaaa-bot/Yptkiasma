import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ayxhasnnbfyfelhvhxkt.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_FGAmELpe1aqCPmTpVPpyMA_UvpX4BkY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
