import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ErstgespraechButton from './ErstgespraechButton';

export default function HeroSection() {
  return (
    <>
      <section className="relative h-auto min-h-[500px] sm:min-h-[600px] flex items-center bg-gradient-to-br from-primary to-primary-dark mineral-pattern overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-light opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-mineral-jade opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container-section relative z-10 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Fachkräfte finden.<br />
                  Mit System.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-mineral-gray-100">
                  Für Handwerk und Gesundheitswesen
                </p>
              </div>

              <div className="mt-5 sm:mt-8 w-full sm:w-auto">
                <ErstgespraechButton 
                  variant="white" 
                  size="lg" 
                  fullWidth={true} 
                  className="sm:w-auto sm:inline-block"
                />
              </div>

              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-8">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">250+</div>
                  <div className="text-xs sm:text-sm md:text-base text-mineral-gray-200">Erfolgreiche Vermittlungen</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">14 Tage</div>
                  <div className="text-xs sm:text-sm md:text-base text-mineral-gray-200">Bis zum ersten Bewerber</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm md:text-base text-mineral-gray-200">Auf Erfolgsbasis</div>
                </div>
              </div>
            </div>

            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] mt-4 lg:mt-0">
              <Image
                src="/images/new/Bild Startseite oben.jpg"
                alt="HireHelden Team"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center relative px-4 sm:px-0">
            <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-base sm:text-xl md:text-2xl text-base-darkgray font-heading leading-relaxed relative">
              <span className="text-primary text-opacity-20 absolute -left-4 sm:-left-6 top-0 text-4xl sm:text-5xl font-serif">"</span>
              Wir gewinnen für Sie qualifizierte Fachkräfte für Ihren Betrieb im Handwerk und Gesundheitswesen – mit System und Erfolg
              <span className="text-primary text-opacity-20 absolute -right-4 sm:-right-6 bottom-0 text-4xl sm:text-5xl font-serif">"</span>
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="h-1 w-16 sm:w-20 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}