import React from 'react';
import { scrollToSection } from '../../utils/scrollUtils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${isActive 
          ? 'text-primary bg-gray-100' 
          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
        }
      `}
    >
      {children}
    </a>
  );
}