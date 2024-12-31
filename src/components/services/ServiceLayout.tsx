import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LeadForm } from '../forms/LeadForm/LeadForm';

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ServiceLayout({ title, description, children }: ServiceLayoutProps) {
  const [showLeadForm, setShowLeadForm] = React.useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link to="/services" className="text-gray-500 hover:text-primary">Services</Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-primary font-medium">{title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-white/90">{description}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can help you implement {title.toLowerCase()} solutions.
          </p>
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            For more information about {title}, reach out to us at{' '}
            <a href="mailto:contact@cupshup.ai" className="text-primary hover:underline">
              contact@cupshup.ai
            </a>
          </p>
        </div>
      </main>

      {showLeadForm && <LeadForm onClose={() => setShowLeadForm(false)} />}
    </div>
  );
}