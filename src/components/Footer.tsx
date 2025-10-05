"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Sección principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[var(--border)]"
        >
          {/* Marca / Logo */}
          <h3 className="text-lg font-semibold">
            Gerson<span className="text-sky-500">.</span>
          </h3>

          {/* Enlaces */}
          <nav className="flex gap-6 text-sm font-medium">
            <a
              href="#sobre-mi"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Sobre mí
            </a>
            <a
              href="#proyectos"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              className="p-2 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-2 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="p-2 rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition-all duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-6 opacity-80"
        >
          © {new Date().getFullYear()} Gerson. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
