"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contacto",
    path: "/contacto",
  },
];

export const HeaderDesktop = () => {
  const path = usePathname();

  return (
    <nav className="md:flex mb-10 hidden justify-center flex-row fondo-rojo py-1">
      <div className="max-w-[1200px] w-[90%] flex justify-between items-center flex-row">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={240}
            height={100}
            className="py-2 px-4"
          />
        </Link>
        <ul>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`h-full inline-block px-4 py-2 text-lg font-semibold text-white hover:scale-95 transition-all duration-300 ${
                path.includes === item.path ? "subrayado" : ""
              } ${path.includes("blog") && index === 1 && "subrayado"}`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
        <Link
          href="https://fariascorejo58.kitepropcrm.com/"
          target="_blank"
          className="flex text-white text-lg font-semibold py-2 px-4 gap-3 hover:scale-95 transition-all duration-300"
        >
          KiteProp
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 16 16"
          >
            <path
              fill="white"
              d="M9.78 2.05a.5.5 0 0 1 .527.055l4.5 3.5a.5.5 0 0 1 .025.769l-4.5 4A.5.5 0 0 1 9.5 10V8.056c-.236.04-.544.11-.904.23c-.873.292-2.054.879-3.242 2.068a.5.5 0 0 1-.852-.4c.143-1.571.601-2.717 1.224-3.543a4.7 4.7 0 0 1 2.095-1.574A5.4 5.4 0 0 1 9.5 4.493V2.5a.5.5 0 0 1 .28-.45M2 5.5A2.5 2.5 0 0 1 4.5 3h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 3 5.5v6A1.5 1.5 0 0 0 4.5 13h6a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 2 11.5z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};
