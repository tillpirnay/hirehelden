"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Referenzen', href: '/referenzen' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Für Unternehmen', href: '/kunden' },
    { name: 'Kontakt', href: '/#contact' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-base-darkgray hover:text-primary focus:outline-none transition-colors duration-200"
        aria-expanded={isOpen}
        aria-label="Hauptmenü"
      >
        <span className="sr-only">Menü {isOpen ? 'schließen' : 'öffnen'}</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div 
        className={`fixed top-[72px] right-0 bottom-0 w-full max-w-xs bg-white shadow-elevated z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-2 py-4 h-full overflow-y-auto">
          <nav className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-base-darkgray hover:bg-secondary-light hover:text-primary rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 px-4">
            <Link 
              href="/#contact" 
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 