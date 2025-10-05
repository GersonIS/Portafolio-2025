"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Pastelería Web",
    description:
      "E-commerce para una pastelería con carrito de compras y pedidos por WhatsApp.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/pasteleria",
    demo: "#",
  },
  {
    title: "Portfolio Personal",
    description:
      "Mi portafolio profesional con animaciones, modo oscuro y diseño responsivo.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/portfolio",
    demo: "#",
  },
  {
    title: "Sistema de Gestión",
    description:
      "Aplicación web para gestión de clientes y productos con base de datos MySQL.",
    tech: ["Laravel", "MySQL", "React", "Docker", "Prisma", "Clerk"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/sistema-gestion",
    demo: "#",
  },
  {
    title: "Ecommerce de Ropa",
    description:
      "Tienda online moderna con diseño responsive y carrito de compras.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/pasteleria",
    demo: "#",
  },
  {
    title: "Ferretería Online",
    description:
      "Plataforma de venta de herramientas con panel de administración.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/portfolio",
    demo: "#",
  },
  {
    title: "Sistema de Inventario",
    description:
      "Gestión de inventario con base de datos MySQL y autenticación.",
    tech: ["Laravel", "MySQL", "React"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/sistema-gestion",
    demo: "#",
  },
  {
    title: "Restaurante Web",
    description:
      "Página web moderna para restaurante con animaciones e interacción.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/portfolio",
    demo: "#",
  },
  {
    title: "Ishop App",
    description:
      "Aplicación web para gestión de clientes y productos con base de datos MySQL.",
    tech: ["Laravel", "MySQL", "React"],
    image: "/images/yo.jpeg",
    github: "https://github.com/tuusuario/sistema-gestion",
    demo: "#",
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
