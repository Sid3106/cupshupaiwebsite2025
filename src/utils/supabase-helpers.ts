import { supabase } from '../config/supabase';

export async function testConnection() {
  try {
    const { data, error } = await supabase.from('posts').select('count').single();
    
    if (error) {
      throw error;
    }
    
    console.log('Supabase connection successful');
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error);
    return false;
  }
}

export async function handleSupabaseError(error: unknown) {
  if (error instanceof Error) {
    // Handle specific Supabase error types
    if ('code' in error) {
      switch (error.code) {
        case '23505':
          return 'This record already exists.';
        case 'PGRST301':
          return 'Row-level security policy violation.';
        default:
          return error.message;
      }
    }
    return error.message;
  }
  return 'An unknown error occurred';
}