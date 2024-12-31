import { useState } from 'react';
import { supabase } from '../../../lib/supabase';
import type { LeadFormData } from './types';

export function useLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Map form data to match database columns exactly
      const formattedData = {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        organization: data.organization || null,
        company_size: data.companySize || null,
        requirements: data.requirements
      };

      const { error: insertError } = await supabase
        .from('leads')
        .insert([formattedData]);

      if (insertError) {
        console.error('Form submission error:', insertError);
        throw new Error('Failed to submit form. Please try again.');
      }

      setIsSuccess(true);
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit form';
      setError(message);
      console.error('Supabase request failed:', err);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error
  };
}