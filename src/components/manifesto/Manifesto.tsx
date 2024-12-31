import React from 'react';
import { Bot, Workflow, Zap, Shield, Users } from 'lucide-react';

export function Manifesto() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        AI for ALL, ALL for AI: Our Manifesto
      </h1>

      <div className="space-y-8">
        <section>
          <p className="text-xl font-medium text-gray-900 mb-4">
            In today's rapidly evolving business landscape, artificial intelligence isn't just a technological advancement—it's a fundamental shift in how businesses operate, compete, and thrive. At CupShup AI, we believe that every business, regardless of size, deserves access to the transformative power of AI.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Bot className="h-6 w-6 text-primary mr-2" />
            Our Mission
          </h2>
          <p>
            We're on a mission to democratize AI technology, making it accessible, practical, and impactful for small and medium businesses. We understand that while large enterprises have the resources to implement complex AI solutions, SMBs often struggle to harness this game-changing technology. That's where we come in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Workflow className="h-6 w-6 text-primary mr-2" />
            Our Focus
          </h2>
          <p>
            We concentrate on three critical areas that drive business transformation:
          </p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start">
              <span className="bg-primary/10 p-2 rounded-lg mr-3 mt-1">
                <Bot className="h-5 w-5 text-primary" />
              </span>
              <div>
                <strong>AI Agents for Business Automation:</strong> Intelligent digital workers that handle repetitive tasks, freeing your team to focus on strategic initiatives.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 p-2 rounded-lg mr-3 mt-1">
                <Zap className="h-5 w-5 text-primary" />
              </span>
              <div>
                <strong>Curated AI Tools:</strong> Carefully selected and customized AI solutions that address specific business challenges and opportunities.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 p-2 rounded-lg mr-3 mt-1">
                <Workflow className="h-5 w-5 text-primary" />
              </span>
              <div>
                <strong>Workflow Automation:</strong> Streamlined processes that enhance efficiency, reduce errors, and accelerate growth.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Shield className="h-6 w-6 text-primary mr-2" />
            Our Commitment
          </h2>
          <p>
            We understand your concerns about AI implementation—cost, complexity, and integration. That's why we've developed a straightforward approach that makes AI adoption simple, affordable, and practical. Our solutions are designed to integrate seamlessly with your existing systems, requiring minimal disruption to your operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="h-6 w-6 text-primary mr-2" />
            Join the AI Revolution
          </h2>
          <p>
            The future of business is AI-powered, and the time to act is now. Don't let your competition get ahead. Partner with CupShup AI to transform your business, enhance your capabilities, and unlock new opportunities for growth. Together, we'll build a future where AI empowers every business to reach its full potential.
          </p>
        </section>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-primary mb-8">
            Ready to transform your business with AI?
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors">
            Start Your AI Journey
          </button>
        </div>
      </div>
    </div>
  );
}