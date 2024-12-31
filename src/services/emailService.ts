import { supabase } from '../lib/supabase';

const EMAIL_TEMPLATES = {
  SUBSCRIPTION_CONFIRMATION: {
    subject: 'Welcome to CupShup AI Newsletter!',
    content: `
      Thank you for subscribing to our newsletter!
      
      You'll now receive updates about:
      - Latest AI innovations
      - Industry insights
      - Tips and best practices
      - Product updates
      
      Best regards,
      The CupShup AI Team
    `
  }
};

export async function sendConfirmationEmail(email: string): Promise<void> {
  try {
    // In a real implementation, you would integrate with your email service provider
    // For now, we'll just log the action and update the last_email_sent timestamp
    console.log('Sending confirmation email to:', email);
    
    // Update last_email_sent timestamp
    const { error } = await supabase
      .from('subscriptions')
      .update({ last_email_sent: new Date().toISOString() })
      .eq('email', email);

    if (error) throw error;
  } catch (err) {
    console.error('Failed to send confirmation email:', err);
    // Don't throw the error to prevent blocking the subscription process
  }
}