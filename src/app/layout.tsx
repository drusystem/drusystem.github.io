import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/presentation/components/providers/ThemeProvider";
import { ThemeToggle } from "@/presentation/components/ui/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Quispe | Software Architect & Sr. Full Stack Developer",
  description: "Arquitecto de Software con especialidad en .NET Core, React, Flutter y Laravel. Experto en sistemas escalables y MVPs de alto rendimiento.",
  keywords: [".NET Core", "ReactJS", "Flutter", "Laravel", "SQL Server", "Software Architect", "Andrés Quispe"],
  authors: [{ name: "Andrés Quispe" }],
  openGraph: {
    title: "Andrés Quispe | Software Architect & Sr. Full Stack Developer",
    description: "Portafolio profesional de ingeniería de software enfocado en arquitecturas robustas y escalables.",
    url: "https://drusystem.github.io",
    siteName: "Andrés Quispe Portfolio",
    images: [
      {
        url: "/profile/og-image.png", // Asegúrate de guardar la imagen con este nombre
        width: 1200,
        height: 630,
        alt: "Andrés Quispe - Software Architect Portfolio",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Quispe | Portafolio Profesional",
    description: "Sistemas distribuidos y desarrollo Full Stack avanzado.",
    images: ["/profile/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning es vital para next-themes
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-background text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider>
          {/* El toggle flota en la esquina superior derecha */}
          <ThemeToggle />
          
          <main className="min-h-screen">
            {children}
          </main>

          <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} — Andrés Quispe Caballero (drusystem)</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest">
              Built with Next.js 15 • Tailwind v4 • Clean Architecture
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}