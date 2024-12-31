import React from 'react';
import { X } from 'lucide-react';
import type { Service } from './types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl transform transition-all">
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="p-3 rounded-lg bg-primary/20 text-primary">
              <service.icon className="h-6 w-6" />
            </span>
            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {service.detailedDescription}
          </p>
        </div>
      </div>
    </div>
  );
}