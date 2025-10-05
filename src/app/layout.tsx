import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Gerson",
  description: "Portafolio de Gerson, Bachiller en Ingeniería de Sistemas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        {/* ThemeProvider controla los temas personalizados */}
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="theme-1"
          enableSystem={false}
          storageKey="gerson-theme"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
