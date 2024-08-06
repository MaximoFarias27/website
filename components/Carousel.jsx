"use client";

import React, { useState, useEffect } from "react";

const images = ["slider1.webp", "slider2.webp", "slider3.webp", "slider4.webp"];

const Carousel = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      <h2 className="w-full md:text-4xl text-3xl mb-10 subrayado-rojo font-bold mt-10">
        Nosotros
      </h2>
      <div className="flex flex-wrap flex-row justify-center gap-10 mb-14 pt-4">
        <div className="bg-[#9e1c20] text-white p-6 rounded-lg shadow-lg max-w-sm text-center w-[250px] h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">Ximena Cornejo</h3>
          <p className="mb-1">Corredor inmobiliario</p>
          <p className="mb-1">Licenciada en publicidad</p>
          <p>CPCPI MP 6896</p>
        </div>
        <div className="bg-[#9e1c20] text-white p-6 rounded-lg shadow-lg max-w-sm text-center w-[250px] h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">J. Fabián Farias</h3>
          <p className="mb-1">Corredor inmobiliario</p>
          <p className="mb-1">Asesoramiento jurídico inmobiliario</p>
          <p className="mb-1">Tasaciones</p>
          <p>CPCPI MP 4715</p>
        </div>
      </div>
      <div className="carousel my-10 mx-auto overflow-hidden relative flex flex-col">
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
    </>
  );
};

export default Carousel;
