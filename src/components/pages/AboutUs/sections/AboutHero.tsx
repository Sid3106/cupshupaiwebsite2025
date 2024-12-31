import React from 'react';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-600/90 z-10" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="AI Technology Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CupShup AI: Empowering Small and Medium Businesses with AI
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transforming businesses through intelligent automation and AI-powered solutions
        </motion.p>
      </div>
    </section>
  );
}