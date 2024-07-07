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
        <h2 className="w-full md:text-4xl text-3xl mb-10 subrayado-rojo font-bold mt-10">Nosotros</h2>
        <div className="flex gap-10 mt-6 mb-14">
          <div class="bg-[#9e1c20] text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
            <h3 class="text-xl font-bold mb-2">J. Fabián Farias</h3>
            <p class="mb-1">Corredor inmobiliario</p>
            <p class="mb-1">Asesoramiento jurídico inmobiliario</p>
            <p>CPCPI MP 4715</p>
          </div>
          <div class="bg-[#9e1c20] text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
            <h3 class="text-xl font-bold mb-2">Ximena Cornejo</h3>
            <p class="mb-1">Licenciada en publicidad</p>
            <p class="mb-1">Corredor inmobiliario</p>
            <p>CPCPI MP 6869</p>
          </div>
        </div>
        <h3 className="w-full md:text-3xl text-2xl font-semibold mb-4 letra-roja">Conozca a Farias Cornejo Negocios Inmobiliarios</h3>
        <h4 className="w-full md:text-2xl text-lg font-semibold mb-4 letra-roja">Inversiones Inmobiliarias en Sierras Chicas</h4>
        <p className="w-full md:text-lg text-md mb-8">
          Somos Fabián Farías y Ximena Cornejo, los fundadores de Inmobiliaria Farias Cornejo. Con oficinas en Río Ceballos y Salsipuedes, nuestra pasión es ayudar a nuestros clientes a encontrar su hogar ideal o hacer la mejor inversión inmobiliaria en Sierras Chicas. Nos enorgullecemos de ofrecer un servicio personalizado basado en la confianza, la honestidad y la transparencia.
        </p>
        <p className="w-full md:text-lg text-md mb-8">
          Fabián dirige el área comercial, aportando su experiencia y dedicación para asegurar que cada cliente tome decisiones bien informadas y alineadas con sus necesidades y sueños. Ximena, encargada de la administración de propiedades en Río Ceballos, Salsipuedes y demás localidades de Sierras Chicas, garantiza que cada propiedad bajo nuestra gestión se mantenga en perfectas condiciones, asegurando la tranquilidad de nuestros clientes.        </p>
        <p className="w-full md:text-lg text-md mb-8">
          Nuestra visión es ser referentes de inmobiliarias en Sierras Chicas, acompañando el crecimiento de la región y contribuyendo a mejorar la calidad de vida de sus habitantes.        </p>


        {/* Carrousel */}
        <Carousel />


        {/* SERVICIOS */}
        <h2 className="w-full md:text-4xl text-3xl mb-10 subrayado-rojo font-bold mt-10">Servicios</h2>
        <div className="p-10 fondo-alquiler-zona w-full md:py-20 flex flex-col md:pl-20 rounded-lg md:items-start items-center">
          <h3 className="text-center md:text-left md:w-full md:text-4xl text-xl font-semibold mb-8 text-white">Propiedades en alquiler</h3>
          <p className="md:w-2/4 md:text-lg text-sm mb-8 text-white">
            Gestionamos tu propiedad con seriedad y compromiso. Contamos con una amplia oferta de casas en alquiler en Sierras Chicas, incluyendo Río Ceballos y Salsipuedes. Deja en nuestras manos la administración y disfruta de la tranquilidad de saber que tu inversión está segura.            </p>
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
            <h3 className="text-center md:text-4xl text-xl md:text-right font-semibold mb-8 text-white md:w-full">Propiedades en Venta</h3>
            <p className="w-full md:text-lg text-sm mb-8 text-white md:text-right">
              Ofrecemos un servicio integral para la venta de casas en Río Ceballos, Salsipuedes y demás localidades de Sierras Chicas. Te acompañamos desde la tasación hasta la firma del contrato, asegurando una transacción transparente y beneficiosa. Ya sea que quieras vender o comprar una casa, estamos aquí para asesorarte.
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
            Encuentra el terreno perfecto en las Sierras Chicas. Te ayudamos a elegir la mejor opción para tus proyectos, garantizando una compra segura y satisfactoria.
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
