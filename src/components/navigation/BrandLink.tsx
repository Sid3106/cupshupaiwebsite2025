import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function BrandLink() {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2.5 group"
      aria-label="CupShup AI Home"
    >
      <Logo className="transition-transform duration-200 group-hover:scale-105" />
      <span className="text-primary text-xl font-semibold tracking-tight">
        CupShup AI
      </span>
    </Link>
  );
}