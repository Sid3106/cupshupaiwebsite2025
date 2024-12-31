import React from 'react';
import { TeamGrid } from '../team/TeamGrid';

export function Team() {
  return (
    <section id="team" className="scroll-mt-16 bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-300">
            Experts in AI, dedicated to transforming businesses through innovation
          </p>
        </div>

        <div className="mt-20">
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}