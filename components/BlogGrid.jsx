import React from "react";
import blogs from "@/data/blogs";
import Link from "next/link";

export const BlogGrid = () => {
  return (
    <div className="w-max-[1200px] w-[95%] mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id} className="rounded-md w-full shadow-xl">
          <img
            src={blog.imagen}
            alt={blog.titulo}
            className="w-full object-cover rounded-md"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold ml-1 line-clamp-2 letra-roja">{blog.titulo}</h1>
            <p className="line-clamp-4 mt-2 text-stone-400">{blog.resumen}</p>
            <p
              className="letra-roja font-bold block mt-4 hover:text-red-600 transition-all duration-300 w-fit cursor-pointer"
            >
              Leer más
            </p>
            <p className="italic w-full text-right opacity-50">{blog.fecha}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
