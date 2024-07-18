import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="fondo-rojo py-10 flex justify-center">
      <footer className="grid lg:grid-cols-3 grid-cols-1 max-w-[1200px] gap-y-10 md:max-w-full ">
        <Image src="/footer-logo.png" width={1000} height={1000} className="w-full max-w-[350px]" />
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
          <h3 className="text-lg mb-2">Oficina Río Ceballos</h3>
          <p className="text-sm mt-1"> <b>Telefono:</b>3543 451037</p>
          <p className="text-sm mt-1"> <b>Celular:</b>3543 531227</p>
          <p className="text-sm mt-1"> <b>Email:</b> oficina.fariascornejo@gmail.com</p>
          <p className="text-sm mt-1 mb-3"> <b>Direccion:</b> Av. San Martín 4185, Río Ceballos, Córdoba</p>
          <div className="bg-white h-[2px] my-10 lg:my-0"></div>
          <h3 className="text-lg mb-2 mt-3">Oficina Salsipuedes</h3>
          <p className="text-sm mt-1"> <b>Telefono:</b> 3543620495</p>
          <p className="text-sm mt-1"> <b>Email:</b> fariacornejo.salsipuedes@gmail.com</p>
          <p className="text-sm mt-1"> <b>Dirección:</b> Av. Gral Paz 2 Esq Ruta E53, Salsipuedes</p>
        </div>
      </footer>
    </div>
  );
};
