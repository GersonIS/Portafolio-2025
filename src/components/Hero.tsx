"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, FileDown } from "lucide-react";

const roles = ["Hi! I'm Gerson", "Developer", "Pentester"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // efecto máquina de escribir
  useEffect(() => {
    if (index === roles.length) return;

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        if (!reverse && subIndex === roles[index].length) {
          setTimeout(() => setReverse(true), 1000);
        } else if (reverse && subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-20 pt-24
      transition-colors duration-500"
      style={{
        background: `linear-gradient(to bottom, var(--primary-color), var(--secondary-color), var(--third-color))`,
        color: "var(--foreground)",
      }}
    >
      {/* Imagen con efecto gradiente */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex-shrink-0"
      >
        <div
          className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-[3px] shadow-xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, var(--secondary-color), var(--third-color))`,
          }}
        >
          <Image
            src="/images/yo.jpeg"
            alt="Gerson"
            fill
            className="rounded-full object-cover border-[4px] border-[var(--border-color)]"
          />
        </div>
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1
          className="text-3xl md:text-5xl font-extrabold mb-4 h-16"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
        >
          <span
            style={{
              color: "var(--foreground)",
            }}
          >
            {roles[index].substring(0, subIndex)}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mb-8 leading-relaxed text-[var(--text-secondary)]">
          Soy bachiller en <span>Ingeniería de Sistemas</span>, apasionado por
          el <span>desarrollo web</span> y la <span>ciberseguridad</span>. Me
          encanta crear aplicaciones modernas, seguras y con un diseño
          atractivo.
        </p>

        {/* Botón CV */}
        <div className="mb-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
          <a
            href="/CV_Gerson.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-[var(--foreground)]"
            style={{
              background: `linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--third-color))`,
            }}
          >
            <FileDown size={18} />
            Descargar CV
          </a>

          {/* Redes sociales */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/gerson-roberth-de-la-cruz-rodr%C3%ADguez-2539a1263/"
              target="_blank"
              className="p-3 rounded-full hover:scale-110 transition-all"
              style={{
                background: "var(--overlay)",
                color: "var(--secondary-color)",
              }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/GersonIS"
              target="_blank"
              className="p-3 rounded-full hover:scale-110 transition-all"
              style={{
                background: "var(--overlay)",
                color: "var(--third-color)",
              }}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/gerson_rodriguez_tkd/?next=%2F"
              target="_blank"
              className="p-3 rounded-full hover:scale-110 transition-all"
              style={{
                background: "var(--overlay)",
                color: "var(--primary-color)",
              }}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
