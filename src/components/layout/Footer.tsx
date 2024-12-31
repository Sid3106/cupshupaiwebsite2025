import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { LeadForm } from '../forms/LeadForm/LeadForm';
import { FooterLinks } from './FooterLinks';

export function Footer() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <h3 className="text-xl font-bold">CupShup AI</h3>
            </Link>
            <p className="text-gray-400">
              Empowering small and medium businesses with intelligent AI solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/cupshup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/cupshup.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCM_DXTpGbG2DGyFM0UtgiGg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <FooterLinks />
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setShowLeadForm(true)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="mailto:contact@cupshup.ai"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@cupshup.ai
                </a>
              </li>
              <li>A subsidiary of Outlier Innovations Private Limited</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CupShup AI. All rights reserved.</p>
        </div>
      </div>

      {showLeadForm && (
        <LeadForm onClose={() => setShowLeadForm(false)} />
      )}
    </footer>
  );
}