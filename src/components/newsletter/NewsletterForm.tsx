import React from 'react';
import { Mail, Send } from 'lucide-react';
import { useNewsletterSubscription } from '../../hooks/useNewsletterSubscription';

export function NewsletterForm() {
  const { 
    email, 
    setEmail, 
    handleSubmit, 
    isSubmitting, 
    error, 
    isSuccess,
    successMessage 
  } = useNewsletterSubscription();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest news, insights, and innovations in AI technology
        </p>

        {isSuccess ? (
          <div className="text-primary font-medium">
            {successMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 h-[48px] px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
            {error && (
              <p className="mt-2 text-red-500 text-sm">{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}