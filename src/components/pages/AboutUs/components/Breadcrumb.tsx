import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb() {
  return (
    <nav className="fixed top-20 w-full z-40 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
          </li>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <li className="text-primary font-medium">About Us</li>
        </ol>
      </div>
    </nav>
  );
}