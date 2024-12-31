import React, { useState } from 'react';
import { Bot, Workflow, Wrench, Brain, Zap, Code } from 'lucide-react';
import { ServiceModal } from './ServiceModal';
import type { Service } from './types';

const services: Service[] = [
  {
    title: 'AI Agents Development',
    description: 'Custom AI agents that automate tasks and enhance decision-making processes.',
    detailedDescription: 'Custom AI agents - an extra pair of hands that never sleep. They step in to handle repetitive tasks, like answering customer queries or analyzing piles of data, with efficiency and speed. These agents can crunch numbers, provide insights, and even suggest the next best move.',
    icon: Bot
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    detailedDescription: 'By automating processes like approvals, scheduling, or data entry, cut down on delays and human errors while freeing up the team for more creative and strategic work. Have a well-oiled machine that keeps everything running smoothly and efficiently.',
    icon: Workflow
  },
  {
    title: 'Custom AI Tools',
    description: 'Tailored AI tools designed to meet your specific business needs.',
    detailedDescription: "Whether it's automating routine tasks, digging into data for insights, or creating better customer connections, these tools have got you covered. They help you focus on what matters most by handling the repetitive stuff, cutting down on errors, and giving you back precious time.",
    icon: Wrench
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Advanced ML models for predictive analytics and data processing.',
    detailedDescription: "Whether it's answering FAQs, guiding users through your services, or even taking orders, they make interactions smooth and hassle-free. These bots can handle multiple queries at once, so your customers never have to wait, keeping them happy and engaged. Plus, they learn over time to provide better and more personalized support.",
    icon: Brain
  },
  {
    title: 'Process Optimization',
    description: 'Enhance efficiency with AI-powered process improvements.',
    detailedDescription: 'By taking a closer look at your workflows, we help identify areas where time and resources might be wasted. Then, we refine those processes to make them more efficient and effective. Whether its streamlining communication, reducing bottlenecks, or automating repetitive tasks, process optimization ensures your team can focus on what truly matters.',
    icon: Zap
  },
  {
    title: 'Integration Services',
    description: 'Seamless integration of AI solutions with your existing systems.',
    detailedDescription: 'Integration services ensure your new AI solutions fit perfectly into your existing systems and workflows without any hiccups. Think of it as connecting all the dots so everything works together smoothly. Whether youre using CRM software, project management tools, or any other platform, we make sure our AI solutions enhance your operations without disrupting them.',
    icon: Code
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive AI solutions to transform your business operations
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="relative group bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-primary/20 text-primary ring-4 ring-white group-hover:bg-primary/30 transition-colors">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}