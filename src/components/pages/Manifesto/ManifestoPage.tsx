import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Target, Heart, Users, Lightbulb } from 'lucide-react';

export function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Manifesto
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building the future of business through AI innovation
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To democratize AI technology and make it accessible to businesses of all sizes, 
              enabling them to harness the power of artificial intelligence for growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">Constantly pushing boundaries and exploring new possibilities in AI technology.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <p className="text-gray-600">Making advanced AI solutions accessible to businesses of all sizes.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">Delivering the highest quality solutions and service to our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create a future where every business, regardless of size, can leverage AI 
              to achieve their full potential and compete in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Team Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and open communication.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Growth Mindset</h3>
                <p className="text-gray-600">Continuous learning and improvement are core to our culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Scroll className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                Founded as a subsidiary of Outlier Innovations Private Limited, CupShup AI 
                builds on a decade of excellence in business solutions. Our journey began 
                with a vision to transform how businesses operate through AI technology.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our services, helping businesses 
                across industries harness the power of AI for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}