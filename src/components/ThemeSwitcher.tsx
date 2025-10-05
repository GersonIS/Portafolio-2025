"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Palette, Moon, Sun, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "theme-1", name: "Clásico", colors: ["#932f67", "#d92c54", "#dddeab"] },
  { id: "theme-2", name: "Azul", colors: ["#799eff", "#feffc4", "#ffde63"] },
  { id: "theme-3", name: "Naranja", colors: ["#fe7743", "#273f4f", "#447d9b"] },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    // Limpia claves antiguas que pudieron quedar
    try {
      localStorage.removeItem("theme");
    } catch (e) {}

    // Restaurar estado dark desde localStorage (si existe)
    const savedDark =
      typeof window !== "undefined"
        ? localStorage.getItem("gerson-dark")
        : null;
    const root = document.documentElement;

    if (savedDark !== null) {
      const d = savedDark === "true";
      setIsDark(d);
      if (d) root.classList.add("dark");
      else root.classList.remove("dark");
    } else {
      // Si no hay preferencia guardada, respetamos la clase actual (si existe)
      setIsDark(root.classList.contains("dark"));
    }

    // Click fuera para cerrar dropdown
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!mounted) return null;

  const toggleDark = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);
    if (next) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("gerson-dark", String(next));
    } catch (e) {}
  };

  const applyTheme = (id: string) => {
    setTheme(id); // next-themes -> actualiza data-theme en <html>
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-label="Cambiar tema"
        className="p-2 rounded-full bg-white/10 dark:bg-gray-700 hover:bg-white/20 transition"
      >
        <Palette size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 p-2"
          >
            <div className="flex flex-col gap-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => applyTheme(t.id)}
                  className={`flex items-center gap-3 w-full px-2 py-2 rounded-md transition ${
                    theme === t.id
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {t.colors.map((c, i) => (
                      <span
                        key={i}
                        style={{ backgroundColor: c }}
                        className="w-3 h-3 rounded-full border border-white/20"
                      />
                    ))}
                  </div>

                  <span className="text-sm flex-1 text-left">{t.name}</span>

                  {theme === t.id && <Check size={16} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
