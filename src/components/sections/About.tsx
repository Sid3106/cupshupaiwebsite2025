import React from 'react';
import { Building, Users, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About CupShup AI</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-100">
            Democratizing AI for small and medium businesses worldwide
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Building className="h-12 w-12 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Our Company</h3>
              <p className="mt-2 text-base text-gray-100">
                A subsidiary of Outlier Innovations Private Limited, we bring decade-long expertise in business solutions to the AI space.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Our Mission</h3>
              <p className="mt-2 text-base text-gray-100">
                To empower small and medium businesses with accessible, powerful AI solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">Our Legacy</h3>
              <p className="mt-2 text-base text-gray-100">
                Building on CupShup's 10-year legacy of marketing excellence, we bring innovation to the AI services sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}