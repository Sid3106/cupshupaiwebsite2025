import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const { formData, handleChange, handleSubmit, isSubmitting, isSuccess } = useContactForm();

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg border-2 border-[#00A979]">
        <h3 className="text-xl font-semibold text-[#00A979] mb-2">Thank You!</h3>
        <p className="text-gray-600">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full min-w-[300px] h-[48px] px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-[#00A979] focus:ring focus:ring-[#00A979] focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full min-w-[300px] h-[48px] px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-[#00A979] focus:ring focus:ring-[#00A979] focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full min-w-[300px] h-[48px] px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-[#00A979] focus:ring focus:ring-[#00A979] focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full min-w-[300px] px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-[#00A979] focus:ring focus:ring-[#00A979] focus:ring-opacity-50"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center py-3 px-4 h-[48px] border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#00A979] hover:bg-[#008761] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A979] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}