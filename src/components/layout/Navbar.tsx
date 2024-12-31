import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems } from './NavItems';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Logo className="h-8 w-auto" />
                <span className="text-[#00A979] text-xl font-semibold">
                  CupShup AI
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex rounded-xl bg-gray-100/80 p-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:text-[#00A979] hover:bg-gray-200/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/manifesto"
                className="ml-4 bg-[#00A979] text-white px-5 py-2 rounded-xl hover:bg-[#008761] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Manifesto
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#00A979] p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#00A979] hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/manifesto"
                className="block px-3 py-2 text-sm font-medium text-[#00A979] hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Manifesto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}