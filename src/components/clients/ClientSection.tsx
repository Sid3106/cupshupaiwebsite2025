import React from 'react';
import { LogoTicker } from './LogoTicker';

export function ClientSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Clients
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by leading businesses across industries
          </p>
        </div>
        <LogoTicker />
      </div>
    </section>
  );
}