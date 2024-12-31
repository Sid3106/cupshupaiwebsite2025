import React, { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const logoUrl = 'https://xxxvwkgzmeadztgulado.supabase.co/storage/v1/object/public/cupshup_images/CupShupLogo%202.jpg?t=2024-12-20T07%3A11%3A23.037Z';

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      console.error('Error loading logo image');
      setError(true);
      setIsLoading(false);
    };
    img.src = logoUrl;
  }, []);

  if (error) {
    return (
      <div className={`h-8 w-8 bg-primary/10 rounded flex items-center justify-center ${className}`}>
        <span className="text-primary text-lg font-bold">C</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`h-8 w-8 bg-gray-200 animate-pulse rounded ${className}`} />
    );
  }

  return (
    <img
      src={logoUrl}
      alt="CupShup Logo"
      className={`h-8 w-auto object-contain ${className}`}
      draggable={false}
    />
  );
}