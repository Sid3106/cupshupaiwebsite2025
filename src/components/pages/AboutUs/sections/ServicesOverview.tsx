import React from 'react';
import { Bot, Workflow, Wrench, MessageSquare, Zap, Code } from 'lucide-react';

const services = [
  { icon: Bot, title: 'AI Tools', description: 'Custom AI tools designed for your specific needs' },
  { icon: Workflow, title: 'AI Agents', description: 'Intelligent agents that automate complex tasks' },
  { icon: Wrench, title: 'Workflow Automation', description: 'Streamline your business processes' },
  { icon: MessageSquare, title: 'Chatbots', description: 'Intelligent conversational interfaces' },
  { icon: Zap, title: 'Process Optimization', description: 'Enhance efficiency with AI-powered improvements' },
  { icon: Code, title: 'Integration Services', description: 'Seamless integration with existing systems' }
];

export function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}