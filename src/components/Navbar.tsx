"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleThemeMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 backdrop-blur-lg shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-2 text-xl md:text-2xl font-extrabold tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-[var(--secondary-color)]">Ger</span>
            <span className="text-[var(--third-color)]">son</span>
          </Link>

          {/* NAV desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-200 hover:text-[var(--third-color)] transition-colors duration-200 px-1 py-1"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[var(--secondary-color)] to-[var(--third-color)] w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}

            {/* Toggle modo claro/oscuro */}
            <button
              onClick={toggleThemeMode}
              aria-label="Cambiar modo"
              className="ml-2 p-2 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 text-[var(--third-color)] border border-white/20 shadow-md transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Selector de tema */}
            <ThemeSwitcher />
          </ul>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-label="Abrir menú"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gradient-to-b from-black via-gray-900 to-blue-900 text-gray-100 backdrop-blur-md shadow-lg"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium px-2 py-2 rounded-md hover:text-[var(--secondary-color)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleThemeMode}
              aria-label="Cambiar modo"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-[var(--third-color)] border border-white/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {/* Selector de tema */}
            <ThemeSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
