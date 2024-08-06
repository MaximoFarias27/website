import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-[55vh]">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center md:mb-52 mb-20">
        <h1 className="w-full text-4xl mb-8 font-bold mt-5 letra-roja">Comunícate con Nosotros</h1>
        <p className="w-full text-xl mb-8">
          ¿Tienes alguna pregunta o necesitas más información? No dudes en contactarnos. Estamos aquí para ayudarte.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-10 md:pl-5">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl mt-5 letra-roja">Oficina Río Ceballos</h3>
            <p className="text-lg md:pl-5">Telefono Fijo: 3543 451037</p>
            <p className="text-lg md:pl-5">Celular: 3543 531227</p>
            <p className="text-lg md:pl-5">Email: oficina.fariascornejo@gmail.com</p>
            <p className="text-lg md:pl-5">Direccion: Av. San Martín 4185, Río Ceballos, Pcia de Córdoba</p>
            <h3 className="text-2xl mt-5 letra-roja">Oficina Salsipuedes</h3>
            <p className="text-lg md:pl-5">Telefono Fijo: 3543620495</p>
            <p className="text-lg md:pl-5">Email: fariascornejo.salsipuedes@gmail.com</p>
            <p className="text-lg md:pl-5">Dirección: Av. Gral Paz 2 Esq Ruta E53, Salsipuedes, Pcia de Córdoba</p>
          </div>
        </div>

      </div>
    </div>
  );
}
