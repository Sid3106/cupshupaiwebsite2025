import React from 'react';
import { NavLink } from './NavLink';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';
import { Logo } from '../layout/Logo';

const navLinks = [
  { href: '#our-services', label: 'Solutions' },
  { href: '#meet-our-team', label: 'Team' },
  { href: '#latest-insights', label: 'Blog' }
];

export function Navbar() {
  const { activeSection } = useScrollNavigation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ href, label }) => (
              <NavLink 
                key={href} 
                href={href}
                isActive={activeSection === href.replace('#', '')}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}