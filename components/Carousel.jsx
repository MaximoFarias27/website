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
          <h3 className="text-xl font-bold mb-2">J. Fabián Farias</h3>
          <p className="mb-1">Corredor inmobiliario</p>
          <p className="mb-1">Asesoramiento jurídico inmobiliario</p>
          <p>CPCPI MP 4715</p>
        </div>
        <div className="bg-[#9e1c20] text-white p-6 rounded-lg shadow-lg max-w-sm text-center w-[250px] h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">Ximena Cornejo</h3>
          <p className="mb-1">Licenciada en publicidad</p>
          <p className="mb-1">Corredor inmobiliario</p>
          <p>CPCPI MP 6869</p>
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
        <div className="md:absolute inset-0 flex flex-col justify-center items-center md:text-white py-10 md:p-10 md:bg-black md:bg-opacity-50 rounded-lg pt-16">
          <h3 className="w-full md:text-2xl lg:text-3xl text-2xl font-semibold mb-4 md:text-center letra-roja md:text-white">
            Conozca a Farias Cornejo Negocios Inmobiliarios
          </h3>
          <h4 className="w-full md:text-xl lg:text-2xl text-lg font-semibold mb-4 md:text-center letra-roja md:text-white">
            Inversiones Inmobiliarias en Sierras Chicas
          </h4>
          <p className="w-full md:text-sm lg:text-lg text-md md:mb-4 lg:mb-8 md:text-center">
            Somos Fabián Farías y Ximena Cornejo, los fundadores de Inmobiliaria
            Farias Cornejo. Con oficinas en Río Ceballos y Salsipuedes, nuestra
            pasión es ayudar a nuestros clientes a encontrar su hogar ideal o
            hacer la mejor inversión inmobiliaria en Sierras Chicas. Nos
            enorgullecemos de ofrecer un servicio personalizado basado en la
            confianza, la honestidad y la transparencia.
          </p>
          <p className="w-full md:text-sm lg:text-lg text-md md:mb-4 lg:mb-8 md:text-center">
            Fabián dirige el área comercial, aportando su experiencia y dedicación
            para asegurar que cada cliente tome decisiones bien informadas y
            alineadas con sus necesidades y sueños. Ximena, encargada de la
            administración de propiedades en Río Ceballos, Salsipuedes y demás
            localidades de Sierras Chicas, garantiza que cada propiedad bajo
            nuestra gestión se mantenga en perfectas condiciones, asegurando la
            tranquilidad de nuestros clientes.
          </p>
          <p className="w-full md:text-sm lg:text-lg text-md md:mb-4 lg:mb-8 md:text-center">
            Nuestra visión es ser referentes de inmobiliarias en Sierras Chicas,
            acompañando el crecimiento de la región y contribuyendo a mejorar la
            calidad de vida de sus habitantes.
          </p>
        </div>
      </div>

    </>
  );
};

export default Carousel;
