import React from 'react';
import type { ClientLogo } from '../types';
import styles from './Ticker.module.css';

interface TickerLogoProps {
  logo: ClientLogo;
}

export function TickerLogo({ logo }: TickerLogoProps) {
  return (
    <div className={styles.tickerLogo}>
      <img
        src={logo.imageUrl}
        alt={logo.alt}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}