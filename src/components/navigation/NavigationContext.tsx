import React, { createContext, useContext, useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavigationContextType {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const activeSection = useScrollSpy(['services', 'team', 'blog']);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navHeight = 80;
    const targetPosition = section.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <NavigationContext.Provider value={{ activeSection, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}