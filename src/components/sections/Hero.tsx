import React from 'react';
import { BackgroundSlider } from './BackgroundSlider';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <BackgroundSlider />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <HeroContent />
      </div>
    </div>
  );
}