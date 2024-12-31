import { supabase } from '../lib/supabase';
import type { RegistrationFormData } from '../types/auth';

export async function registerUser(data: RegistrationFormData) {
  const { data: user, error } = await supabase
    .from('users')
    .insert([
      {
        name: data.fullName,
        email: data.email,
        organization: data.organization,
        org_size: data.orgSize,
        industry: data.industry,
        created_at: new Date().toISOString()
      }
    ])
    .select()
    .single();

  if (error) {
    if (error.code === '23505') { // Unique violation
      throw new Error('A user with this email already exists');
    }
    throw new Error('Failed to register user');
  }

  return user;
}