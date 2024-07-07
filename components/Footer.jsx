import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="fondo-rojo py-10 flex justify-center">
      <footer className="grid lg:grid-cols-3 grid-cols-1 max-w-[1200px] gap-y-10 md:max-w-full max-w-[90%]">
        <Image src="/Logo.png" width={200} height={150} className="w-full" />
        <div className="text-white flex flex-col w-full lg:pl-24 gap-5 md:mt-2">
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
        <div className="text-white flex flex-col">
          <h3 className="text-lg mb-2">Oficinas Río Ceballos</h3>
          <p className="text-sm mt-1"> <b>Telefono:</b> 451037</p>
          <p className="text-sm mt-1"> <b>Direccion:</b> Av. San Martín 4185, Río Ceballos, Córdoba</p>
          <p className="text-sm mt-1 mb-3"> <b>Email:</b> oficina.fariascornejo@gmail.com</p>
          <div className="bg-white h-[2px]"></div>
          <h3 className="text-lg mb-2 mt-3">Oficinas Salsipuedes</h3>
          <p className="text-sm mt-1"> <b>Telefono:</b> 3543620495</p>
          <p className="text-sm mt-1"> <b>Email:</b> fariacornejo.salsipuedes@gmail.com</p>
          <p className="text-sm mt-1"> <b>Dirección:</b> Av. Gral Paz 2 Esq Ruta E53, Salsipuedes</p>
        </div>
      </footer>
    </div>
  );
};
