import React from 'react';
import { Mail } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-12 w-12 text-white mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-xl text-white/90 mb-8">
          Ready to transform your business with AI? Let's talk!
        </p>
        <a
          href="mailto:contact@cupshup.ai"
          className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          contact@cupshup.ai
        </a>
      </div>
    </section>
  );
}