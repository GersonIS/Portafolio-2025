"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-20 transition-colors duration-300 bg-[var(--background)]"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left space-y-12">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]"
        >
          <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--secondary-color)] to-[var(--accent-light)] bg-clip-text text-transparent">
            Conoce más sobre mí
          </span>
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[var(--text-primary)] leading-relaxed text-lg md:text-xl max-w-3xl mx-auto md:mx-0"
        >
          Soy un entusiasta de la{" "}
          <span
            className="font-semibold"
            style={{ background: "var(--overlay)", color: "var(--secondary-color)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}
          >
            tecnología
          </span>{" "}
          y la{" "}
          <span
            className="font-semibold"
            style={{ background: "var(--overlay)", color: "var(--secondary-color)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}
          >
            ciberseguridad
          </span>
          . Mi enfoque va más allá de escribir código: busco{" "}
          <span
            className="font-semibold"
            style={{ background: "var(--overlay)", color: "var(--accent)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}
          >
            construir experiencias digitales seguras y atractivas
          </span>{" "}
          que inspiren confianza y generen impacto real. Siempre estoy
          aprendiendo, explorando nuevas herramientas y llevando mis proyectos a
          un siguiente nivel.
        </motion.p>

        {/* Tarjetas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {/* Experiencia */}
          <div className="p-6 rounded-2xl shadow-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:shadow-xl transition duration-300">
            <Briefcase className="w-8 h-8 text-[var(--secondary-color)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
              Experiencia
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              He trabajado en{" "}
              <span className="font-medium" style={{ background: "var(--overlay)", color: "var(--secondary-color)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}>
                proyectos web
              </span>{" "}
              y{" "}
              <span className="font-medium" style={{ background: "var(--overlay)", color: "var(--primary-color)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}>
                prácticas de seguridad
              </span>{" "}
              que combinan creatividad, tecnología y protección digital.
            </p>
          </div>

          {/* Objetivo */}
          <div className="p-6 rounded-2xl shadow-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:shadow-xl transition duration-300">
            <Target className="w-8 h-8 text-[var(--primary-color)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
              Visión
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Mi meta es crecer como{" "}
              <span className="font-medium" style={{ background: "var(--overlay)", color: "var(--primary-color)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}>
                pentester
              </span>{" "}
              y{" "}
              <span className="font-medium" style={{ background: "var(--overlay)", color: "var(--secondary-color)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}>
                desarrollador
              </span>
              , aportando soluciones innovadoras y seguras en cada proyecto.
            </p>
          </div>

          {/* Ubicación */}
          <div className="p-6 rounded-2xl shadow-lg bg-[var(--card-bg)] border border-[var(--border-color)] hover:shadow-xl transition duration-300">
            <MapPin className="w-8 h-8 text-[var(--accent)] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
              Ubicación
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Orgullosamente desde{" "}
              <span className="font-medium" style={{ background: "var(--overlay)", color: "var(--accent)", padding: "0.125rem 0.25rem", borderRadius: "0.25rem" }}>Perú 🇵🇪</span>,
              conectado con el mundo digital.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
