import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Newsletter subscription logic here
      setStatus('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      setStatus('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
        <Mail className="h-12 w-12 text-[#00A979] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest news, insights, and innovations in AI technology
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-[48px] px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-[#00A979] focus:ring focus:ring-[#00A979] focus:ring-opacity-50"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#00A979] text-white rounded-lg hover:bg-[#008761] transition-colors duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              <Send className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>
        {status && (
          <p className={`mt-4 font-medium ${
            status.includes('Failed') ? 'text-red-500' : 'text-[#00A979]'
          }`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
}