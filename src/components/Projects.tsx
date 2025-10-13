"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Pastelería Web",
    description:
      "Tienda de pastelería con carrito de compras y pedidos por WhatsApp.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "FontAwesome",
      "SweetAlert2",
    ],
    image: "/images/pasteleria.png",
    github: "https://github.com/GersonIS/DCaramell.git",
    demo: "https://d-caramell.vercel.app",
  },
  {
    title: "Portafolio Personal",
    description:
      "Mi portafolio profesional con animaciones, y secciones de informacion clave.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "TyScript",
      "Framer Motion",
      "React Icons",
    ],
    image: "/images/portafolio.png",
    github: "https://github.com/GersonIS/Portafolio-Web.git",
    demo: "https://gerson-portafolio.vercel.app",
  },
  {
    title: "Construccion, Gasfiteria y servicios generales",
    description:
      "Aplicación web para una empresa de servicios con secciones informativas y de contacto.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "FontAwesome",
      "Framer Motion",
      "React Icons",
    ],
    image: "/images/gildo.png",
    github: "https://github.com/GersonIS/Gildo-App.git",
    demo: "https://gildo.vercel.app",
  },
  {
    title: "To Do App",
    description:
      "Agenda tu lista de tareas con esta aplicación web sencilla y funcional.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/todo.png",
    github: "https://github.com/GersonIS/To-Do.git",
    demo: "https://to-do-pws.vercel.app",
  },
  {
    title: "Empresa de Software",
    description:
      "Landing informativa para empresa de desarrollo de software y soluciones IT.",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "React Icons",
      "TypeScript",
    ],
    image: "/images/scg.png",
    github: "https://github.com/GersonIS/SCG-Landing.git",
    demo: "https://scg-it.vercel.app",
  },
  {
    title: "Sistema de Inventario",
    description: "Plantilla de Gestión de inventario y autenticación.",
    tech: ["Nextjs", "TailwindCSS", "FontAwesome", "ChartJS", "SweetAlert2"],
    image: "/images/inventario.png",
    github: "https://github.com/GersonIS/Inventario.git",
    demo: "https://inventario-alpha.vercel.app/",
  },
  {
    title: "Ecommerce de Ropa",
    description:
      "Tienda online moderna con diseño responsive y carrito de compras para ventas por WhatsApp.",
    tech: ["Next.js", "React Icons", "TailwindCSS", "React Slick"],
    image: "/images/tienda.png",
    github: "https://github.com/GersonIS/Ecommerce.git",
    demo: "https://regeja.vercel.app",
  },
  {
    title: "Pokemon App",
    description: "Aplicación de coleccion de pokemones",
    tech: ["Next.js", "TypeScript", "NextUI", "Axios", "Canvas Confetti"],
    image: "/images/pokemon.png",
    github: "https://github.com/GersonIS/Pokemon-Next.git",
    demo: "https://pokemon-next-flame.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[80vh] flex items-center justify-center px-6 py-16 transition-colors"
      style={{
        background: `linear-gradient(to bottom, var(--bg-section), var(--background), var(--bg-section))`,
        color: `var(--text-primary)`,
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--text-primary)" }}
        >
          Proyectos
        </motion.h2>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl shadow-md hover:shadow-2xl transition-all duration-200 overflow-hidden 
              flex flex-col w-full max-w-sm h-[480px]"
              style={{
                background: "var(--bg-section)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
              }}
            >
              {/* Imagen con overlay */}
              <div className="relative w-full h-48 group overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  flex items-center justify-center gap-6 transition-opacity duration-300"
                  style={{
                    background: "rgba(0,0,0,0.45)",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full transition"
                    style={{
                      background: "var(--secondary-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="p-3 rounded-full transition"
                    style={{
                      background: "var(--secondary-color)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-3 line-clamp-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="mt-auto flex flex-wrap gap-2 max-h-[60px] overflow-hidden">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md font-medium"
                      style={{
                        background: "var(--primary-color)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
