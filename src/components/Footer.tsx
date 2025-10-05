"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer
      className="bg-[var(--background)] text-[var(--foreground)] 
      border-t border-[var(--border)] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Sección principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 
          border-b border-[var(--border)]"
        >
          {/* Marca / Logo */}
          <h3 className="text-lg font-semibold">
            Gerson
            <span className="text-[var(--primary-color)]">.</span>
          </h3>

          {/* Enlaces */}
          <nav className="flex gap-6 text-sm font-medium">
            {[
              { name: "Sobre mí", href: "#sobre-mi" },
              { name: "Proyectos", href: "#proyectos" },
              { name: "Contacto", href: "#contacto" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group transition-colors duration-200"
              >
                <span className="group-hover:text-[var(--primary-color)]">
                  {link.name}
                </span>
                <span
                  className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[var(--primary-color)] 
                  group-hover:w-full transition-all duration-300"
                />
              </a>
            ))}
          </nav>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            {[
              {
                href: "https://github.com/",
                icon: <Github className="w-5 h-5" />,
              },
              {
                href: "https://linkedin.com/",
                icon: <Linkedin className="w-5 h-5" />,
              },
              {
                href: "https://instagram.com/",
                icon: <Instagram className="w-5 h-5" />,
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full 
                hover:bg-[var(--primary-color)]/10 
                hover:text-[var(--primary-color)] 
                transition-all duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        {year && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm mt-6 opacity-80"
          >
            © {year} Gerson. Todos los derechos reservados.
          </motion.div>
        )}
      </div>
    </footer>
  );
}
