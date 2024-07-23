'use client'
import { useParams } from "next/navigation"
import blogs from "@/data/blogs"

const BlogPost = () => {
  const { id } = useParams()
  const numberId = parseInt(id)
  const actualBlog = blogs.find(blog => blog.id === numberId)

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1200px] w-[90%] flex flex-col items-center mb-20">
        <h1 className="md:text-4xl text-2xl font-semibold lg:mt-15 md:mt-10 mt-5">{actualBlog.titulo}</h1>
        <img src={actualBlog.imagen} className="rounded-md w-full mt-10" />
        <div className="flex flex-row gap-5 mt-2 w-full pl-2">

          <p className="text-stone-400 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#a8a29e" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd" /></svg>{actualBlog.autor}</p>
          <p className="text-stone-400 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36"><path fill="#a8a29e" d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z" class="clr-i-solid clr-i-solid-path-1" /><path fill="#a8a29e" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-2" /><path fill="#a8a29e" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-3" /><path fill="none" d="M0 0h36v36H0z" /></svg>{actualBlog.fecha}</p>
        </div>
        <div className="mt-10 mb-10 w-full">

          {actualBlog.contenido.map((element, index) => {
            if (element.clave === "h2") {
              return <h2 key={index} className="text-2xl font-semibold my-7 text-left w-full">{element.contenido}</h2>
            } else if (element.clave === "h3") {
              return <h3 key={index} className="text-xl font-semibold my-6 text-left w-full">{element.contenido}</h3>
            } else if (element.clave === "p") {
              return <p key={index} className="text-stone-400 my-5 text-left w-full">{element.contenido}</p>
            } else if (element.clave === "img") {
              return <img key={index} src={element.contenido} className="rounded-md w-full mt-10" />
            }
          })}

        </div>
      </div>
    </div>)
}
export default BlogPost