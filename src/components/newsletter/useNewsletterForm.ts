import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { validateEmail, isRateLimited } from './utils';
import { sendConfirmationEmail } from '../../services/emailService';

export function useNewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate email
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if email already exists
      const { data: existing, error: fetchError } = await supabase
        .from('subscriptions')
        .select('id, last_email_sent')
        .eq('email', email)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (existing) {
        if (isRateLimited(existing.last_email_sent)) {
          setError('Please wait 24 hours before trying again.');
          return;
        }
        setError('This email is already subscribed.');
        return;
      }

      // Insert new subscription
      const { error: insertError } = await supabase
        .from('subscriptions')
        .insert([{
          email,
          status: 'active',
          last_email_sent: new Date().toISOString()
        }]);

      if (insertError) throw insertError;

      // Send confirmation email
      await sendConfirmationEmail(email);

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    handleSubmit,
    isSubmitting,
    error,
    isSuccess
  };
}