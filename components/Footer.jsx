import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="fondo-rojo py-10 flex justify-center">
      <footer className="grid lg:grid-cols-3 grid-cols-1 max-w-[1200px] gap-y-10">
        <Image src="/Logo.png" width={200} height={150} className="w-full"/>
        <div className="text-white flex flex-col w-full md:pl-24 gap-5">
            <Link className=" hover:underline" href="/">Inicio</Link>
            <Link className=" hover:underline" href="/blog">Blog</Link>
            <Link className=" hover:underline" href="/contacto">Contacto</Link>
        </div>
        <div className="text-white flex flex-col w-full md:pl-10 gap-5">
            <h4 className="text-2xl font-semibold">Contacto</h4>
            <p>Email:</p>
            <p>Oficina Río Ceballos: +54 351 123 4567</p>
            <p>Oficina Salsipuedes: +54 351 765 4321</p>
            <Link href={"https://wa.me/3511234567"} target="_blank" className="hover:underline font-semibold text-lg bg-white letra-roja w-fit p-1 px-2 rounded-md">Whatsapp</Link>
        </div>
      </footer>
    </div>
  );
};
