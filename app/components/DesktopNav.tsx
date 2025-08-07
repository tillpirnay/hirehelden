"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function DesktopNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const [isAngebotDropdownOpen, setIsAngebotDropdownOpen] = useState(false);
  const angebotDropdownRef = useRef<HTMLDivElement>(null);
  const angebotTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleAngebotMouseEnter = () => {
    if (angebotTimeoutRef.current) {
      clearTimeout(angebotTimeoutRef.current);
    }
    setIsAngebotDropdownOpen(true);
  };

  const handleAngebotMouseLeave = () => {
    angebotTimeoutRef.current = setTimeout(() => {
      setIsAngebotDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (angebotTimeoutRef.current) {
        clearTimeout(angebotTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden md:flex space-x-6 lg:space-x-8">
      <Link href="/" className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200">Home</Link>
      
      <div 
        className="relative"
        onMouseEnter={handleAngebotMouseEnter}
        onMouseLeave={handleAngebotMouseLeave}
        ref={angebotDropdownRef}
      >
        <button className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200 flex items-center">
          Branchen
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`absolute top-full right-0 mt-1 w-52 bg-white rounded-lg shadow-lg border transition-all duration-200 z-[100] ${
          isAngebotDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}>
          <div className="py-2">
            <Link 
              href="/handwerk" 
              className="block px-4 py-2 text-sm text-base-darkgray hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              Handwerk
            </Link>
            <Link 
              href="/gesundheitswesen" 
              className="block px-4 py-2 text-sm text-base-darkgray hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              Gesundheitswesen
            </Link>
          </div>
        </div>
      </div>
      
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={dropdownRef}
      >
        <button className="text-base-darkgray hover:text-primary font-medium transition-colors duration-200 flex items-center">
          Über uns
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`absolute top-full right-0 mt-1 w-52 bg-white rounded-lg shadow-lg border transition-all duration-200 z-[100] ${
          isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}>
          <div className="py-2">
            <Link 
              href="/ueber-uns" 
              className="block px-4 py-2 text-sm text-base-darkgray hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              Über uns
            </Link>
            <Link 
              href="/angebot" 
              className="block px-4 py-2 text-sm text-base-darkgray hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              Unsere Leistungen
            </Link>
            <Link 
              href="/kunden" 
              className="block px-4 py-2 text-sm text-base-darkgray hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              Für Unternehmen
            </Link>
            <Link 
              href="/bewerber" 
              className="block px-4 py-2 text-sm text-base-darkgray hover:bg-gray-50 hover:text-primary transition-colors duration-200"
            >
              Für Bewerber
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}