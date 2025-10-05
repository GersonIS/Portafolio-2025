"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Palette } from "lucide-react";
import { useTheme } from "next-themes";

// Links de navegación
const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

// Temas personalizados (excluyendo light/dark)
const themes = [
  { key: "theme-1", label: "Tema Clásico" },
  { key: "theme-2", label: "Tema Azul" },
  { key: "theme-3", label: "Tema Naranja" },
  { key: "theme-4", label: "Tema Elegante" },
  { key: "theme-5", label: "Tema Creativo" },
];

// Controles de tema personalizados
const ThemeControls = ({
  currentTheme,
  toggleDarkMode,
  handleThemeChange,
}: {
  currentTheme: string;
  toggleDarkMode: () => void;
  handleThemeChange: (theme: string) => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative flex items-center space-x-3 pl-4 border-l border-[var(--secondary-color)]/40">
      {/* Botón claro/oscuro */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-[var(--secondary-color)]/20 transition"
        aria-label="Alternar modo claro/oscuro"
      >
        {currentTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      {/* Selector de temas personalizados */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="p-2 rounded-full hover:bg-[var(--secondary-color)]/20 transition"
        >
          <Palette size={18} />
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-10 bg-[var(--primary-color)] text-[var(--third-color)] border border-[var(--secondary-color)]/20"
            >
              <ul className="py-2">
                {themes.map((themeOption) => (
                  <li key={themeOption.key}>
                    <button
                      onClick={() => {
                        handleThemeChange(themeOption.key);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm font-medium hover:bg-[var(--secondary-color)]/10 transition-colors"
                    >
                      {themeOption.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Navbar principal
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme ?? "light";

  const handleThemeChange = useCallback(
    (selectedTheme: string) => {
      setTheme(selectedTheme);
    },
    [setTheme]
  );

  const toggleDarkMode = useCallback(() => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  }, [currentTheme, setTheme]);

  useEffect(() => setMounted(true), []);

  // 🚀 Evita error de hidratación: no renderizamos hasta que esté montado
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--primary-color)]/80 text-[var(--third-color)] shadow-md transition-all duration-300" />
    );
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--primary-color)]/80 text-[var(--third-color)] shadow-md transition-all duration-300"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-lg font-bold tracking-wide hover:opacity-90 transition-opacity"
        >
          Gerson<span className="text-[var(--secondary-color)]">.</span>
        </Link>

        {/* Links - desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-sm font-medium tracking-wide"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--secondary-color)] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Controles de tema */}
          <ThemeControls
            currentTheme={currentTheme}
            toggleDarkMode={toggleDarkMode}
            handleThemeChange={handleThemeChange}
          />
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden focus:outline-none text-[var(--third-color)]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-[var(--primary-color)]/95 text-[var(--third-color)]"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium hover:text-[var(--secondary-color)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Controles de tema en móvil */}
              <ThemeControls
                currentTheme={currentTheme}
                toggleDarkMode={toggleDarkMode}
                handleThemeChange={handleThemeChange}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
