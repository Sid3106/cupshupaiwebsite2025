import React from 'react';
import { NavLink } from './NavLink';
import { useNavigation } from '../../hooks/useNavigation';

const navItems = [
  { name: 'About', href: '/' },
  { name: 'Solutions', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Blog', href: '#blog' }
] as const;

export function NavItems() {
  const { activeSection, scrollToSection } = useNavigation();

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href.slice(1));
    }
  };

  return (
    <>
      <div className="flex rounded-xl bg-gray-100/80 p-1.5">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            isActive={
              item.href === '/' 
                ? activeSection === 'home'
                : activeSection === item.href.slice(1)
            }
            onClick={() => handleClick(item.href)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <a
        href="https://www.app.cupshup.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary-600 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Manifesto
      </a>
    </>
  );
}