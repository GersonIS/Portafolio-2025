"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    window.open(
      `https://wa.me/932093895?text=Nombre:%20${name}%0ACorreo:%20${email}%0AMensaje:%20${message}`
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20 transition-colors"
      style={{
        background: `var(--background)`,
        color: `var(--text-primary)`,
      }}
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
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Hablemos
          </h2>

          <p
            className="mb-8 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Si tienes una idea, un proyecto o simplemente quieres saludar,
            estaré encantado de leerte. Puedes escribirme directamente o usar
            mis redes profesionales.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:gersondelacruz455@gmail.com"
              className="flex items-center gap-3 transition-colors"
              style={{
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              <Mail size={20} /> gersondelacruz455@gmail.com
            </a>

            <a
              href="https://github.com/GersonIS"
              target="_blank"
              className="flex items-center gap-3 transition-colors"
              style={{
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              <Github size={20} /> github.com/GersonIS
            </a>

            <a
              href="https://www.linkedin.com/in/gerson-roberth-de-la-cruz-rodr%C3%ADguez-2539a1263/"
              target="_blank"
              className="flex items-center gap-3 transition-colors"
              style={{
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              <Linkedin size={20} /> linkedin.com/in/Gerson
            </a>

            <a
              href="https://wa.me/51932093895"
              target="_blank"
              className="flex items-center gap-3 transition-colors"
              style={{
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--primary-color)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              <Phone size={20} /> +51 932 093 895
            </a>
          </div>
        </div>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className="space-y-6 rounded-xl shadow-lg p-8 transition-colors"
          style={{
            background: "var(--bg-section)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
          }}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Ingresa tu nombre"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition"
              style={{
                background: "var(--background)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                outlineColor: "var(--primary-color)",
              }}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Ingresa tu correo"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition"
              style={{
                background: "var(--background)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-2 font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Mensaje
            </label>
            <textarea
              id="message"
              placeholder="Escribe tu mensaje"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              autoComplete="off"
              className="w-full px-4 py-2 rounded-lg border resize-none focus:outline-none focus:ring-2 transition"
              style={{
                background: "var(--background)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold shadow-md transition"
            style={{
              background: "var(--primary-color)",
              color: "var(--text-primary)",
            }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
