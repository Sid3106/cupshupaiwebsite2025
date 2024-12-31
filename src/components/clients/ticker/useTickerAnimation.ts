import { useEffect, useRef } from 'react';
import { TICKER_SETTINGS } from './constants';

export function useTickerAnimation() {
  const tickerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationFrameId: number;
    let startTime: number;
    let currentPosition = 0;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate new position based on elapsed time and speed
      currentPosition = -(elapsed * TICKER_SETTINGS.SCROLL_SPEED / 1000);
      
      // Reset when all logos have scrolled
      if (-currentPosition >= ticker.scrollWidth / 2) {
        startTime = timestamp;
        currentPosition = 0;
      }
      
      ticker.style.transform = `translateX(${currentPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return tickerRef;
}