'use client'

import React, { useState, useEffect } from 'react';

const images = [
  "slider1.webp",
  "slider2.webp",
  "slider3.webp",
  "slider4.webp"
];

const Carousel = ({interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative carousel my-10 mx-auto overflow-hidden">
      <div
        className="rounded-lg flex items-center transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="h-full flex-shrink-0 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;