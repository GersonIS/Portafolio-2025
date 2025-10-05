"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-gray-950 dark:to-gray-900 
      px-6 py-20 transition-colors"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* Información de contacto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Hablemos
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Si tienes una idea, un proyecto o simplemente quieres saludar,
            estaré encantado de leerte. Puedes escribirme directamente o usar
            mis redes profesionales.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:tucorreo@ejemplo.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-[var(--primary-color)] transition-colors"
            >
              <Mail size={20} /> tucorreo@ejemplo.com
            </a>
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-[var(--primary-color)] transition-colors"
            >
              <Github size={20} /> github.com/tuusuario
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-[var(--primary-color)] transition-colors"
            >
              <Linkedin size={20} /> linkedin.com/in/tuusuario
            </a>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 
              hover:text-[var(--primary-color)] transition-colors"
            >
              <Phone size={20} /> +51 999 999 999
            </a>
          </div>
        </div>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className="space-y-6 bg-white dark:bg-gray-950 
          p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ingresa tu nombre"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 
              focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 
              focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              placeholder="Escribe tu mensaje"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 
              focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white 
            bg-[var(--primary-color)] hover:brightness-110 transition shadow-md"
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
