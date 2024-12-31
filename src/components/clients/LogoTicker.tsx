import React from 'react';
import { useClientLogos } from './useClientLogos';
import styles from './LogoTicker.module.css';

export function LogoTicker() {
  const { logos, isLoading } = useClientLogos();

  if (isLoading) {
    return (
      <div className="flex space-x-8 px-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-[72px] w-[144px] animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerTrack}>
        {/* Display logos twice for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={`${logo.id}-${index}`} className={styles.tickerLogo}>
            <img
              src={logo.imageUrl}
              alt={logo.alt}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}