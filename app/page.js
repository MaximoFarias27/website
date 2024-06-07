import FAQs from "@/components/FAQS";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center mb-20">
        <Hero/>
        <p className="w-full text-lg mb-8">
          En Inmobiliaria Farias Cornejo, somos más que una simple inmobiliaria en Sierras Chicas; somos sus aliados en los momentos más importantes de su vida. <strong>Confiabilidad, seguridad y un asesoramiento experto</strong> son los pilares que nos definen. Estamos aquí para guiarlo en cada paso, ya sea que busque comprar una casa en Sierras Chicas, vender una propiedad en Córdoba o encontrar casas en alquiler en Río Ceballos. Nuestra misión es hacer de su experiencia inmobiliaria un proceso transparente, seguro y exitoso.
        </p>
        <h2 className="w-full text-4xl mb-10 subrayado-rojo font-bold mt-10">Nosotros</h2>
        <Image src="/nosotros.png" width={3000} height={2000} className="rounded-lg mb-10" />
        <h3 className="w-full text-3xl font-semibold mb-4">Conozca a Farias Cornejo Negocios Inmobiliarios</h3>
        <h4 className="w-full text-2xl font-semibold mb-4">Inversiones Inmobiliarias en Sierras Chicas</h4>
        <p className="w-full text-lg mb-8">
          Somos Fabián Farías y Ximena Cornejo, los fundadores de Inmobiliaria Farias Cornejo. Con oficinas en Río Ceballos y Salsipuedes, nuestra pasión es ayudar a nuestros clientes a encontrar su hogar ideal o hacer la mejor inversión inmobiliaria en Sierras Chicas. Nos enorgullecemos de ofrecer un servicio personalizado basado en la confianza, la honestidad y la transparencia.
        </p>
        <p className="w-full text-lg mb-8">
          Fabián dirige el área comercial, aportando su experiencia y dedicación para asegurar que cada cliente tome decisiones bien informadas y alineadas con sus necesidades y sueños. Ximena, encargada de la administración de propiedades en Río Ceballos, Salsipuedes y demás localidades de Sierras Chicas, garantiza que cada propiedad bajo nuestra gestión se mantenga en perfectas condiciones, asegurando la tranquilidad de nuestros clientes.        </p>
        <p className="w-full text-lg mb-8">
          Nuestra visión es ser referentes de inmobiliarias en Sierras Chicas, acompañando el crecimiento de la región y contribuyendo a mejorar la calidad de vida de sus habitantes.        </p>
        <h2 className="w-full text-4xl mb-10 subrayado-rojo font-bold mt-10">Servicios</h2>

        <div className="fondo-alquiler-zona w-full py-20 flex flex-col pl-20 rounded-lg">
          <h3 className="w-full text-4xl font-semibold mb-8 text-white">Casas en Alquiler en tu zona</h3>
          <p className="w-2/4 text-lg mb-8 text-white">
            Gestionamos tu propiedad con seriedad y compromiso. Contamos con una amplia oferta de casas en alquiler en Sierras Chicas, incluyendo Río Ceballos y Salsipuedes. Deja en nuestras manos la administración y disfruta de la tranquilidad de saber que tu inversión está segura.            </p>
          <Link
            href="https://fariascorejo58.kitepropcrm.com/site/properties/rental"
            target="_blank"
            className="flex w-fit fondo-rojo text-white text-lg font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
          >
            ¡Quiero ver las propiedades en alquiler!

          </Link>
        </div>

        <div className="fondo-comprar-zona w-full py-20 rounded-lg my-10 flex justify-end pr-10">
          <div className=" flex flex-col w-2/4 items-end">
            <h3 className="text-4xl font-semibold mb-8 text-white w-full">Casas en Venta cerca tuyo</h3>
            <p className="w-full text-lg mb-8 text-white">
              Ofrecemos un servicio integral para la venta de casas en Río Ceballos, Salsipuedes y demás localidades de Sierras Chicas. Te acompañamos desde la tasación hasta la firma del contrato, asegurando una transacción transparente y beneficiosa. Ya sea que quieras vender o comprar una casa, estamos aquí para asesorarte.
            </p>
            <Link
              href="https://fariascorejo58.kitepropcrm.com/site/properties/sale"
              target="_blank"
              className="flex w-fit fondo-rojo text-white text-lg font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
            >
              ¡Quiero ver las propiedades en venta!

            </Link>
          </div>
        </div>

        <div className="fondo-terrenos-venta w-full py-20 flex flex-col pl-20 rounded-lg">
          <h3 className="w-full text-4xl font-semibold mb-8 text-white">Terrenos y lotes en Venta</h3>
          <p className="w-2/4 text-lg mb-8 text-white">
            Encuentra el terreno perfecto en las Sierras Chicas. Te ayudamos a elegir la mejor opción para tus proyectos, garantizando una compra segura y satisfactoria.
          </p>
          <Link
            href="https://fariascorejo58.kitepropcrm.com/site/properties/sale?q=&location=&type=6&rooms%5B%5D=&bedrooms%5B%5D=&bathrooms%5B%5D=&currencyId=&priceMin=&priceMax=&userOrAssignee=&office=&order=id%3Adesc&limit=50&f=1&lat0=&lat1=&lng0=&lng1="
            target="_blank"
            className="flex w-fit fondo-rojo text-white text-lg font-semibold py-2 px-4 rounded-lg gap-3 transition-all duration-300 hover:bg-red-900"
          >
            ¡Consulta disponibilidad de terrenos!

          </Link>
        </div>

        <h2 className="w-full text-4xl mb-10 subrayado-rojo font-bold mt-20">FAQS</h2>
        <FAQs />
      </div>

    </div>
  );
}
