import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="fondo-landing min-h-[600px] w-full rounded-lg pl-20 flex flex-col justify-center gap-10">
        <h1 className="text-5xl font-black text-white max-w-[600px]">
          Bienvenidos a Farias Cornejo
        </h1>
        <h2 className="text-3xl font-medium text-white">
          Inmobiliaria en Rio Ceballos
        </h2>
        <div className="flex flex-row w-fit mt-6 gap-4">
          <Link
            href="https://fariascorejo58.kitepropcrm.com/"
            target="_blank"
            className="flex fondo-rojo text-white text-lg font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
          >
            Ver propiedades
          </Link>
          <Link
            href="/contacto"
            className="flex text-white text-lg font-semibold py-2 px-4 rounded-lg gap-3 transition-colors duration-300 hover:text-stone-100"
          >
            Contactanos
          </Link>
        </div>
      </div>
      <div className="md:h-24 w-9/12 md:pt-1 fondo-rojo rounded-lg -translate-y-16 grid md:grid-cols-4 grid-cols-2">
        <div className="flex flex-col py-5 md:py-0 items-center h-full justify-center gap-2">
          <Image src="/casa.svg" width={40} height={40} />
          <h3 className="text-white font-semibold text-md text-center">
            Tasaciones
          </h3>
        </div>
        <div className="flex flex-col py-5 md:py-0 items-center h-full justify-center gap-2">
          <Image src="/venta.svg" width={33} height={33} />
          <h3 className="text-white font-semibold text-md text-center">
            Propiedades
          </h3>
        </div>
        <div className="flex flex-col py-5 md:py-0 items-center h-full justify-center gap-1">
          <Image src="/llaves.svg" width={23} height={23} />
          <h3 className="text-white font-semibold text-md text-center">
            Alquileres
          </h3>
        </div>
        <div className="flex flex-col py-5 md:py-0 items-center h-full justify-center gap-2">
          <Image src="/terrenos.svg" width={40} height={40} />
          <h3 className="text-white font-semibold text-md text-center">
            Terrenos
          </h3>
        </div>
      </div>
    </div>
  );
};
