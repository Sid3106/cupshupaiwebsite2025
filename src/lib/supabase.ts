import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

// Test connection and table access
export async function testSubscriptionTable() {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('count')
      .single();

    if (error) {
      console.error('Supabase subscription table error:', error);
      return false;
    }

    console.log('Successfully connected to subscriptions table');
    return true;
  } catch (error) {
    console.error('Supabase connection error:', error);
    return false;
  }
}