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
    "¿Qué servicios ofrece Farias Cornejo?",
    "¿Por qué elegir a Inmobiliaria Farias Cornejo en Río Ceballos?",
    "¿Cómo puedo poner en alquiler mi casa con Farias Cornejo?",
    "¿Qué debo considerar al comprar una casa en Sierras Chicas?",
  ];

  const answer = [
    "Ofrecemos una amplia gama de servicios inmobiliarios en Sierras Chicas, incluyendo la administración de propiedades en alquiler, la venta de propiedades y terrenos, y asesoría en inversiones inmobiliarias. ",
    "Elegirnos significa contar con una inmobiliaria en Río Ceballos que valora la confianza, la transparencia y el asesoramiento personalizado. Con años de experiencia estamos comprometidos a ofrecer el mejor servicio en la región.",
    "Puedes contactarnos a través de nuestro correo electrónico, teléfonos o WhatsApp. Te guiaremos en cada paso del proceso, desde la tasación hasta la firma del contrato de alquiler. Gestionamos casas en alquiler en Río Ceballos, Salsipuedes y demás localidades con total seriedad y compromiso.",
    "Es importante considerar la ubicación, el estado de la propiedad y tus necesidades personales. Te ayudaremos a encontrar la **casa en venta en Río Ceballos** o **Salsipuedes** que se ajuste a tus preferencias y presupuesto.",
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
