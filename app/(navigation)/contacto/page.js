import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center md:min-h-[30vw]">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center md:mb-52 mb-20">
        <h1 className="w-full text-4xl mb-8 font-bold mt-5">Comunícate con Nosotros</h1>
        <p className="w-full text-xl mb-8">
          ¿Tienes alguna pregunta o necesitas más información? No dudes en contactarnos. Estamos aquí para ayudarte.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-10 md:pl-5">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-lg md:pl-5">Email: oficina.fariascornejo@gmail.com</p>
            <p className="text-lg md:pl-5">WhatsApp: <Link href={"https://wa.me/3511234567"} target="_blank" className="underline font-medium hover:text-red-800">Envíanos un mensaje</Link></p>
            <h3 className="text-2xl mt-5 letra-roja">Oficinas Río Ceballos</h3>
            <p className="text-lg md:pl-5">Telefono: +54 351 123 4567</p>
            <h3 className="text-2xl mt-5 letra-roja">Oficinas Salsipuedes</h3>
            <p className="text-lg md:pl-5">Telefono: +54 351 765 4321</p>
          </div>
        </div>

      </div>
    </div>
  );
}
