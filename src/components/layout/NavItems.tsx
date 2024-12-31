import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Solutions', href: '#services' },
  { name: 'Team', href: '#team' },
  // { name: 'Career', href: '#career' }, // Temporarily disabled
  { name: 'Blog', href: '/blog' }
];

export interface NavItemProps {
  item: NavItem;
  isActive: boolean;
  children?: ReactNode;
}