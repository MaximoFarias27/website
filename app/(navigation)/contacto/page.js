import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center md:min-h-[30vw]">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center md:mb-52 mb-20">
        <h2 className="w-full text-3xl mb-5 font-bold mt-5">Comunícate con Nosotros</h2>
        <p className="w-full text-lg mb-8">
          ¿Tienes alguna pregunta o necesitas más información? No dudes en contactarnos. Estamos aquí para ayudarte.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-10 md:pl-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-lg">Email:</p>
            <p className="text-lg">Oficina Río Ceballos: +54 351 123 4567</p>
            <p className="text-lg">Oficina Salsipuedes: +54 351 765 4321</p>
            <p className="text-lg">WhatsApp: <Link href={"https://wa.me/3511234567"} target="_blank" className="hover:underline font-medium">Envíanos un mensaje</Link></p>
          </div>
        </div>

      </div>
    </div>
  );
}
