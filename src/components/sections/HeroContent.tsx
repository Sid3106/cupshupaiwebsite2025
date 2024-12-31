import React, { useState } from 'react';
import { ArrowRight, Bot, Workflow, Wrench, Brain, Zap, Code } from 'lucide-react';
import { LeadForm } from '../forms/LeadForm/LeadForm';

const services = [
  { icon: Bot, name: 'AI Agents' },
  { icon: Workflow, name: 'Workflow Automation' },
  { icon: Wrench, name: 'Custom AI Tools' },
  { icon: Brain, name: 'Machine Learning' },
  { icon: Zap, name: 'Process Optimization' },
  { icon: Code, name: 'Integration Services' }
];

export function HeroContent() {
  const [visibleServices, setVisibleServices] = useState(services.slice(0, 2));
  const [showLeadForm, setShowLeadForm] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisibleServices(currentServices => {
        const firstIndex = services.indexOf(currentServices[0]);
        const nextIndex = (firstIndex + 2) % services.length;
        return [
          services[nextIndex],
          services[(nextIndex + 1) % services.length]
        ];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative z-10 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          <span className="block mb-2">AI for ALL.</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-300">
            ALL for AI.
          </span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
          Supercharge your business with AI tools, agents and automations
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <button
            onClick={() => setShowLeadForm(true)}
            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visibleServices.map((service, index) => (
                <div
                  key={`${service.name}-${index}`}
                  className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg transform transition-all duration-500"
                  style={{
                    animation: 'slideIn 3s ease-in-out infinite'
                  }}
                >
                  <service.icon className="h-8 w-8 text-primary" />
                  <span className="text-white font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes slideIn {
              0%, 100% {
                opacity: 0.8;
                transform: translateY(0);
              }
              50% {
                opacity: 1;
                transform: translateY(-2px);
              }
            }
          `}
        </style>
      </div>

      {showLeadForm && (
        <LeadForm onClose={() => setShowLeadForm(false)} />
      )}
    </>
  );
}