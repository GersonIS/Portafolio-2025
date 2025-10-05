"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPrisma,
  SiLaravel,
  SiFlask,
  SiGit,
  SiDocker,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={40} /> },
      { name: "React.js", icon: <SiReact size={40} /> },
      { name: "TypeScript", icon: <SiTypescript size={40} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={40} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={40} /> },
      { name: "Laravel", icon: <SiLaravel size={40} /> },
      { name: "Flask", icon: <SiFlask size={40} /> },
      { name: "MySQL", icon: <SiMysql size={40} /> },
      { name: "Prisma", icon: <SiPrisma size={40} /> },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: <SiGit size={40} /> },
      { name: "Docker", icon: <SiDocker size={40} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[60vh] flex items-center justify-center px-6 py-16 transition-colors duration-300"
      style={{
        background: "var(--bg-section)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl w-full text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--accent)" }}
        >
          Habilidades
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Tecnologías y herramientas que utilizo para construir aplicaciones
          modernas y seguras.
        </motion.p>

        {/* Categorías */}
        <div className="flex flex-col gap-16">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="w-full flex flex-col items-center"
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                {category.title}
              </h3>

              {/* Cards de skills */}
              <div className="flex flex-wrap justify-center gap-8">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="w-40 h-40 flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      className="mb-3"
                      style={{ color: "var(--accent-light)" }}
                    >
                      {skill.icon}
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
