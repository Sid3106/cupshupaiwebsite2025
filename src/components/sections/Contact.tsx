import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from './useContactForm';
import { ContactForm } from './ContactForm';
import { NewsletterForm } from './NewsletterForm';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#00A979] sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Let's discuss how we can help transform your business with AI
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <ContactForm />
        </div>

        <div className="mt-20">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}