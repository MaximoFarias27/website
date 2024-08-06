import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="fondo-rojo py-10 md:px-0 px-6 flex justify-center">
      <footer className="grid lg:grid-cols-2 gap-x-32 grid-cols-1 max-w-[1200px] gap-y-10 md:max-w-full ">
        <div className="h-full flex flex-col gap-10">
          <Image
            src="/Logo.png"
            width={1000}
            height={1000}
            className="w-full max-w-[500px]"
          />
          <div className="text-white flex justify-evenly text-xl">
            <Link className=" hover:underline" href="/">
              Inicio
            </Link>
            <Link className=" hover:underline" href="/blog">
              Blog
            </Link>
            <Link className=" hover:underline" href="/contacto">
              Contacto
            </Link>
          </div>
        </div>
        <div className="bg-white h-[1.5px] lg:hidden block"></div>
        <div className="text-white flex flex-col lg:w-fit w-full lg:items-start items-center text-center md:text-left">
          <h3 className="text-md mb-1 font-bold">Oficina Río Ceballos</h3>
          <p className="text-sm mt-1">
            {" "}
            <b>Telefono Fijo:</b> 3543 451037
          </p>
          <p className="text-sm mt-1">
            {" "}
            <b>Celular:</b> 3543 531227
          </p>
          <p className="text-sm mt-1">
            {" "}
            <b>Email:</b> oficina.fariascornejo@gmail.com
          </p>
          <p className="text-sm mt-1 mb-3">
            {" "}
            <b>Direccion:</b> Av. San Martín 4185, Río Ceballos, Pcia de Córdoba
          </p>
          <div className="bg-white w-full h-[2px] my-8 lg:my-2"></div>
          <h3 className="text-md mb-1 font-bold mt-3">Oficina Salsipuedes</h3>
          <p className="text-sm mt-1">
            {" "}
            <b>Telefono Fijo:</b> 3543 620495
          </p>
          <p className="text-sm mt-1">
            {" "}
            <b>Email:</b> fariascornejo.salsipuedes@gmail.com
          </p>
          <p className="text-sm mt-1">
            {" "}
            <b>Dirección:</b>  Av. Gral Paz 2 Esq Ruta E53, Salsipuedes, Pcia de Córdoba
          </p>
        </div>
      </footer>
    </div>
  );
};
