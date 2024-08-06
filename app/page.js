import Carousel from "@/components/Carousel";
import FAQs from "@/components/FAQS";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center mb-20">
        <Hero />
        <p className="w-full md:text-lg text-md mb-8">
          Confiabilidad, seguridad, asesoramiento de expertos son las cualidades que nos distinguen. Trabajamos con el profesionalismo necesario, para guiarlos en cada paso. Comprar o vender propiedades en Sierras Chicas y/o ciudad de Córdoba activa nuestra misión hacer de su experiencia inmobiliaria un proceso transparente seguro y exitoso.
        </p>



        {/* Nosotros */}
        <Carousel />
        <h3 className="w-full md:text-2xl text-xl mb-10 subrayado-rojo font-bold mt-10">Inversiones Inmobiliarias en Sierras Chicas</h3>

        <p className="w-full md:text-lg text-md mb-8">
        Somos conscientes de lo que representa elegir una Inmobiliaria para realizar una operación. Confianza, transparencia, seguridad, son los valores fundamentales en nuestra profesión. La gran mayoría de las personas realizan compra venta de bienes inmuebles, una o dos veces en toda su vida. Son muy pocos los que concretan operaciones con frecuencia, y esto puede generar, en algunos casos, desconcierto, desconfianza, e incertidumbre a la hora de elegir.        </p>
        <p className="w-full md:text-lg text-md mb-8">
        Hay muchos aspectos al momento de trabajar una propiedad; colocar el cartel o subir la publicación en las redes, es el trabajo más simple. El conocimiento Jurídico y la capacidad de negociación son fundamentales para lograr el resultado deseado, una operación inmobiliaria con ambas partes satisfechas.
        </p>
        <p className="w-full md:text-lg text-md mb-8">
        Por otra parte, otro aspecto muy importante dentro de nuestra profesión, es la Administración. Y volvemos a lo simple, cobrar unalquiler mensual, emitir un recibo es tarea sencilla. Mantener el valor del Patrimonio de nuestros clientes con el paso del tiempo es nuestro compromiso. Y ahí está la clave. Desde la redacción del contrato, las garantías, la intermediación permanente llevando claridad a las partes ante dudas que generen conflictos de intereses, requiere de una profesionalidad, claridad en el conocimiento, dedicación. Por todo esto, a la hora de elegir una inmobiliaria, no contrates dos, tres, cuatro, quedate con una; asociate, recordá que no se trata de un cartel y nada más, todos queremos obtener el negocio. Elegí la oficina con la que te sientas más cómodo y sobre todo la que te genere confianza.        </p>
        
        <h3 className="w-full md:text-2xl text-xl mb-10 subrayado-rojo font-bold mt-10">Misión</h3>
        <p className="w-full md:text-lg text-md mb-8">
          Nuestra misión es brindar asesoramiento integral y personalizado, entendiendo las necesidades y aspiraciones de nuestros clientes. El objetivo es garantizar que cada paso del proceso sea claro, seguro y satisfactorio, creando un impacto duradero en la vida de las personas que confían en nosotros.        </p>
        <h3 className="w-full md:text-2xl text-xl mb-10 subrayado-rojo font-bold mt-10">Visión</h3>
        <p className="w-full md:text-lg text-md mb-8">
          Nuestra visión es liderar el mercado, no solo por la calidad de nuestros servicios, sino por la empatía y dedicación con la que abordamos cada operación. Aspiramos a ser un pilar en el crecimiento de la comunidad, ayudando a las familias a encontrar no solo una propiedad, sino un hogar donde puedan construir su futuro y crear nuevos recuerdos. Buscamos ser reconocidos por nuestro enfoque humano y profesional, estableciendo relaciones de confianza que perduren a lo largo del tiempo.
        </p>

        {/* SERVICIOS */}
        <h2 className="w-full md:text-4xl text-3xl mb-10 subrayado-rojo font-bold mt-10">Servicios</h2>
        <div className="p-10 fondo-alquiler-zona w-full md:py-20 flex flex-col md:pl-20 rounded-lg md:items-start items-center">
          <h3 className="text-center md:text-left md:w-full md:text-4xl text-xl font-semibold mb-8 text-white">Administración y Alquiler de propiedades</h3>
          <p className="md:w-2/4 md:text-lg text-sm mb-8 text-white">
            Gestionamos tu propiedad con seriedad y compromiso. Contamos con una amplia oferta de propiedades en alquiler en Sierras Chicas, incluyendo Río Ceballos y Salsipuedes. Deja en nuestras manos la administración y disfruta de la tranquilidad de saber que tu inversión está segura.
          </p>
          <Link
            href="https://fariascorejo58.kitepropcrm.com/site/properties/rental"
            target="_blank"
            className="text-center md:text-left flex w-fit fondo-rojo text-white md:text-lg text-sm font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
          >
            ¡Quiero ver las propiedades en alquiler!

          </Link>
        </div>

        <div className="p-10 fondo-comprar-zona w-full md:py-20 rounded-lg my-10 flex md:justify-end md:pr-10 items-center">
          <div className=" flex flex-col md:w-2/4 md:items-end items-center">
            <h3 className="text-center md:text-4xl text-xl md:text-right font-semibold mb-8 text-white md:w-full">Venta de propiedades</h3>
            <p className="w-full md:text-lg text-sm mb-8 text-white md:text-right">
            Ofrecemos un servicio profesional y de amplia trayectoria para la venta de propiedades. Te acompañamos desde la tasación hasta la firma de la escritura, asegurando una transacción transparente, confiable y segura. Ya sea que quieras vender o comprar. ¡Estamos aquí para asesorarte!.
            </p>
            <Link
              href="https://fariascorejo58.kitepropcrm.com/site/properties/sale"
              target="_blank"
              className="text-center md:text-left flex w-fit fondo-rojo text-white md:text-lg text-sm font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
            >
              ¡Quiero ver las propiedades en venta!

            </Link>
          </div>
        </div>

        <div className="md:items-start p-10 fondo-terrenos-venta w-full md:py-20 flex flex-col md:pl-20 rounded-lg items-center">
          <h3 className="text-center md:text-left md:w-full md:text-4xl text-xl font-semibold mb-8 text-white">Venta de Lotes y grandes parcelas</h3>
          <p className="md:w-2/4 md:text-lg text-sm mb-8 text-white">
            Encuentra el lugar perfecto en las Sierras Chicas. Te ayudamos a elegir la mejor opción para tus proyectos, garantizando una compra segura y satisfactoria.
          </p>
          <Link
            href="https://fariascorejo58.kitepropcrm.com/site/properties/sale?q=&location=&type=6&rooms%5B%5D=&bedrooms%5B%5D=&bathrooms%5B%5D=&currencyId=&priceMin=&priceMax=&userOrAssignee=&office=&order=id%3Adesc&limit=50&f=1&lat0=&lat1=&lng0=&lng1="
            target="_blank"
            className="text-center md:text-left flex w-fit fondo-rojo text-white md:text-lg text-sm font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
          >
            ¡Consulta disponibilidad de terrenos!

          </Link>
        </div>



        {/* FAQS */}
        <h2 className="w-full md:text-4xl text-3xl mb-10 subrayado-rojo font-bold mt-20">Preguntas frecuentes</h2>
        <FAQs />
      </div>

    </div>
  );
}
