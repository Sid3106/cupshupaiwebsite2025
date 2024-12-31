import { supabase } from '../lib/supabase';

export async function getLogoUrl(): Promise<string> {
  try {
    const { data, error } = await supabase
      .storage
      .from('cupshup_images')
      .getPublicUrl('CupShupLogo.png');

    if (error) {
      throw error;
    }

    return data.publicUrl;
  } catch (error) {
    console.error('Error fetching logo:', error);
    return '/src/assets/cupshup-logo.svg';
  }
}