import React from 'react';
import { Target } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Target className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To democratize AI technology and empower every small and medium business 
            with intelligent solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}