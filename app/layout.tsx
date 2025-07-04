import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";

import type { Metadata } from "next";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Navigation links shared between desktop and mobile menus
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Für Unternehmen", href: "/kunden" },
  { name: "Für Bewerber", href: "/bewerber" },
];

export const metadata: Metadata = {
  title: "HireHelden - Fachkräfte systematisch einstellen",
  description: "HireHelden hilft mittelständischen Betrieben im Handwerk und Gesundheitswesen, qualifizierte Fachkräfte zu gewinnen - mit System und Erfolg.",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-sans text-base-darkgray">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-soft sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-3 sm:py-4">
                <Link href="/" className="flex items-center -ml-4 sm:-ml-6">
                  <Image
                    src="/logo.svg"
                    alt="HireHelden Logo"
                    width={200}
                    height={50}
                    className="h-10 sm:h-12 w-auto"
                    priority
                  />
                </Link>
                
                <nav className="hidden md:flex space-x-6 lg:space-x-8">
                  <Link href="/" className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200">Home</Link>
                  <Link href="/referenzen" className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200">Referenzen</Link>
                  <Link href="/ueber-uns" className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200">Über uns</Link>
                  <Link href="/kunden" className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200">Für Unternehmen</Link>
                  <Link href="/bewerber" className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200">Für Bewerber</Link>
                </nav>
                
                <div className="hidden md:flex">
                  <Link href="/#contact" className="btn btn-primary">
                    Kontakt
                  </Link>
                </div>
                
                <MobileMenu />
              </div>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-base-darkgray text-white py-10 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <Image
                    src="/logo.svg"
                    alt="HireHelden Logo"
                    width={200}
                    height={50}
                    className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert"
                  />
                  <p className="text-gray-300 mb-4 max-w-md text-sm sm:text-base">
                    HireHelden hilft mittelständischen Betrieben im Handwerk und Gesundheitswesen, 
                    qualifizierte Fachkräfte zu gewinnen - mit System und Erfolg.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/hirehelden/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 sm:mb-4">Navigation</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Home</Link></li>
                    <li><Link href="/referenzen" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Referenzen</Link></li>
                    <li><Link href="/ueber-uns" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Über uns</Link></li>
                    <li><Link href="/kunden" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Für Unternehmen</Link></li>
                    <li><Link href="/bewerber" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Für Bewerber</Link></li>
                    <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Kontakt</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 sm:mb-4">Rechtliches</h4>
                  <ul className="space-y-2">
                    <li><Link href="/impressum" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Impressum</Link></li>
                    <li><Link href="/datenschutz" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">Datenschutz</Link></li>
                    <li><Link href="/agb" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">AGB</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
                <p>© {new Date().getFullYear()} HireHelden. Alle Rechte vorbehalten.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
