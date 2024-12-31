import { useEffect, useState } from 'react';
import { isElementInViewport } from '../utils/scrollUtils';

export function useScrollNavigation() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        'our-services': document.getElementById('our-services'),
        'meet-our-team': document.getElementById('meet-our-team'),
        'latest-insights': document.getElementById('latest-insights')
      };

      for (const [id, element] of Object.entries(sections)) {
        if (element && isElementInViewport(element)) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection };
}