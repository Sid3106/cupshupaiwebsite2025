import React from 'react';
import { Shield, Users, Lightbulb, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Proven Expertise',
    description: '10+ years of experience in business solutions'
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Tailored solutions for your specific needs'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge AI technology and solutions'
  },
  {
    icon: Clock,
    title: 'Quick Implementation',
    description: 'Fast deployment and immediate results'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <reason.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}