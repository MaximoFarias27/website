"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [showAnswer, setShowAnswer] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleAnswer = (index) => {
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = !newShowAnswer[index];
    setShowAnswer(newShowAnswer);
  };

  const questions = [
    "¿Qué servicios ofrece Inmobiliaria Farias Cornejo?",
    "¿Por qué elegir a Inmobiliaria Farias Cornejo?",
    "Alquilar mi propiedad con inmobiliaria farias cornejo",
    "Consideraciones para la compra venta de una propiedad",
  ];

  const answer = [
    `Ofrecemos servicios como: Tasaciones con fines judiciales, de valoración, de separación de bienes, o para conocer el valor real de la propiedad en el mercado, administración de propiedades, alquileres, ⁠ventas, ⁠asesoramiento jurídico inmobiliario y  ⁠evaluación de proyectos inmobiliarios`,
    "Nuestra trayectoria nos define con un alto nivel de compromiso y profesionalismo en la gestión de las propiedades de nuestros clientes. Priorizamos la Transparencia y asesoramiento personalizado, esto sumado a nuestra experiencia nos posiciona como la inmobiliaria mas fuerte de la región.",
    "Podes contactarnos a traves de nuestros teléfonos, whatsapp o correo electrónico. Te vamos a guiar de forma segura en cada paso del proceso, desde la tasación…..”. Asumimos el compromiso a través de nuestra gestión de que puedas contar con una administración altamente eficiente.",
    "Cuando realizamos una operación inmobiliaria, sabemos que no se trata del mero hecho de adquiere o desprenderse de un bien inmueble. Una propiedad, alberga un cúmulo de emociones que en cada caso tendra sus características particulares. El nacimiento de nuestros hijos, las añoranzas de la rutina diaria, alegrias, tristezas, familia, historia. Todo esto, influye de una manera muy significativa para nuestros clientes al momento de decidir la vender. ⁠Para el comprador, la proyección del arraigo en un lugar y todo lo que eso implica para ese futuro, hace que la elección del lugar se transforme en un aspecto muy relevante.\n ⁠Por eso, en cada operación realizada dejamos de lado el aspecto meramente comercial para enfocarnos en la necesidad de nuestros clientes.",
  ];
  return (
    <div className="lg:container lg:mx-auto md:px-6 px-4">
      <div className="w-full mx-auto">
        {questions.map((question, index) => (
          <div key={index}>
            <div
              className={`w-full md:px-6 my-8 py-5 cursor-pointer faqs ${index==0 ? "primer-faqs" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center w-full">
                <div>
                  <p
                    className={`flex justify-center items-center font-bold text-xl ${
                      showAnswer[index] ? "" : "font-semibold"
                    }`}
                  >
                    {question}
                  </p>
                </div>
                <button aria-label="toggler">
                  <img
                    className={`transform ${showAnswer[index] ? "hidden" : ""}`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    className={`transform ${
                      showAnswer[index] ? "rotate-180" : "hidden"
                    }`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              {showAnswer[index] && (
                <div className="mt-6 w-full">
                  <p className="text-base leading-6 font-normal">
                    {answer[index]}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
