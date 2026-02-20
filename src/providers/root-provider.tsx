"use client";

import { ThemeProvider } from "@/context/Theme/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
