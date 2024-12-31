import { supabase } from '../lib/supabase';

export async function subscribeToNewsletter(email: string) {
  try {
    console.log('Attempting to subscribe:', email);

    // Check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from('subscriptions')
      .select('id, status')
      .eq('email', email)
      .single();

    console.log('Existing subscription check:', { existing, checkError });

    if (existing) {
      if (existing.status === 'unsubscribed') {
        // Reactivate subscription
        const { error: updateError } = await supabase
          .from('subscriptions')
          .update({ status: 'active', last_email_sent: new Date().toISOString() })
          .eq('id', existing.id);

        if (updateError) throw updateError;
        return { success: true, message: 'Welcome back! Your subscription has been reactivated.' };
      }
      throw new Error('This email is already subscribed to our newsletter.');
    }

    // Insert new subscription
    const { error: insertError } = await supabase
      .from('subscriptions')
      .insert([{
        email,
        status: 'active',
        last_email_sent: new Date().toISOString()
      }]);

    console.log('Insert attempt result:', { insertError });

    if (insertError) {
      if (insertError.code === '23505') { // Unique violation
        throw new Error('This email is already subscribed to our newsletter.');
      }
      throw insertError;
    }

    return { success: true, message: 'Thank you for subscribing to our newsletter!' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}