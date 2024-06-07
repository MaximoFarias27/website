import { BlogGrid } from "@/components/BlogGrid";

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center mb-20">
        <h1 className="w-full text-4xl mb-10 subrayado-rojo font-bold mt-10">Blog Farias Cornejo</h1>
        <p className="w-full text-lg">Encuentra los mejores articulos sobre la venta y adquisicion de lotes, viviendas, inmuebles, alquileres y mucho mas en Río Ceballos y Salsipuedes!</p>
        <BlogGrid />
      </div>
    </div>
  );
}
