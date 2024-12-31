import React from 'react';
import { Briefcase, Users, Star, Clock } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const positions: JobPosition[] = [
  {
    id: '1',
    title: 'AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our team to develop cutting-edge AI solutions and help businesses transform their operations.'
  },
  {
    id: '2',
    title: 'Machine Learning Specialist',
    department: 'Research & Development',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Work on advanced ML models and help shape the future of AI technology.'
  },
  {
    id: '3',
    title: 'AI Solutions Architect',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and implement AI-powered solutions for enterprise clients.'
  }
];

export function Career() {
  return (
    <section id="career" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us shape the future of AI technology and make a difference in how businesses operate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">Innovative Work</h3>
            <p className="text-gray-600">Work on cutting-edge AI technology</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">Great Team</h3>
            <p className="text-gray-600">Collaborate with talented professionals</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">Growth</h3>
            <p className="text-gray-600">Continuous learning and development</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">Flexibility</h3>
            <p className="text-gray-600">Remote-first work environment</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position) => (
                <div 
                  key={position.id} 
                  className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0 transition-all duration-300 ease-in-out hover:bg-gray-100/50 p-4 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-800 shadow-sm">
                          {position.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-800 shadow-sm">
                          {position.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white text-gray-800 shadow-sm">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:contact@cupshup.ai?subject=Application for ${position.title}`}
                      className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}