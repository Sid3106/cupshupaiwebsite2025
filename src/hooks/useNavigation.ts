import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavigation() {
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'team', 'blog'].map(id => 
        document.getElementById(id)
      );

      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navHeight = 80; // Height of fixed navbar
    const targetPosition = section.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return { activeSection, scrollToSection };
}