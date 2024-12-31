import React from 'react';
import { Building } from 'lucide-react';

export function CompanyStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Building className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
        </div>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            CupShup AI, a subsidiary of Outlier Innovations Private Limited, brings a decade of expertise 
            in business solutions to the AI space. Our journey began with a simple mission: to make 
            advanced AI technology accessible to small and medium businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}