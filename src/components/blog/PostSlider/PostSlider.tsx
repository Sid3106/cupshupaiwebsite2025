import React, { useState, useEffect } from 'react';
import { SlideControls } from './SlideControls';
import { SlideContent } from './SlideContent';
import type { BlogPost } from '../../../types/blog';

interface PostSliderProps {
  posts: BlogPost[];
}

export function PostSlider({ posts }: PostSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === posts.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [posts.length]);

  const nextSlide = () => {
    setCurrentIndex((current) => 
      current === posts.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) => 
      current === 0 ? posts.length - 1 : current - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {posts.map((post) => (
            <SlideContent key={post.id} post={post} />
          ))}
        </div>
      </div>

      <SlideControls
        currentIndex={currentIndex}
        totalSlides={posts.length}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
}