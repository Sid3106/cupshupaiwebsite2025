import React from 'react';
import { TickerLogo } from './TickerLogo';
import { useTickerAnimation } from './useTickerAnimation';
import type { ClientLogo } from '../types';
import styles from './Ticker.module.css';

interface TickerTrackProps {
  logos: ClientLogo[];
}

export function TickerTrack({ logos }: TickerTrackProps) {
  const tickerRef = useTickerAnimation();
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div 
      ref={tickerRef}
      className={styles.tickerTrack}
    >
      {duplicatedLogos.map((logo, index) => (
        <TickerLogo
          key={`${logo.id}-${index}`}
          logo={logo}
        />
      ))}
    </div>
  );
}