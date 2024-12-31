import React, { useState, useEffect } from 'react';
import { getLogoUrl } from '../../services/storageService';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  const [logoUrl, setLogoUrl] = useState<string>('/src/assets/cupshup-logo.svg');

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const url = await getLogoUrl();
        setLogoUrl(url);
      } catch (err) {
        console.error('Failed to load logo:', err);
      }
    };

    fetchLogo();
  }, []);

  return (
    <img
      src={logoUrl}
      alt="CupShup AI Logo"
      className={`h-8 w-auto ${className}`}
      style={{ objectFit: 'contain' }}
    />
  );
}