// components/ClientLayout.tsx
"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="theme-1"
      enableSystem={false}
      storageKey="gerson-theme"
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
