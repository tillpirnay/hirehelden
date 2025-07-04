"use client";

import React from 'react';
import Image from 'next/image';
import ContactSection from '../components/ContactSection';

export default function BewerberPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Finde deinen Traumjob mit HireHelden
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Dein Experte für nachhaltige Jobvermittlung
            </p>
            <a href="#kontakt" className="btn btn-white">
              Jetzt bewerben
            </a>
          </div>
        </div>
      </section>

      {/* Bewerbungsprozess Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-2">
              Einfach & Transparent
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-base-darkgray">
              Unser Bewerbungsprozess
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Wir begleiten dich auf dem Weg zu deinem neuen Job - von der ersten Kontaktaufnahme bis zum Vertragsabschluss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-base-darkgray">Kennenlernen</h3>
              <p className="text-gray-600">
                Wir lernen dich und deine Wünsche kennen. In einem persönlichen Gespräch erfassen wir deine Qualifikationen, Erfahrungen und Karriereziele.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-base-darkgray">Passende Stellen</h3>
              <p className="text-gray-600">
                Wir präsentieren dir passende Stellenangebote bei unseren Partnerunternehmen und bereiten dich optimal auf den Bewerbungsprozess vor.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-elevated p-6 text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-base-darkgray">Begleitung</h3>
              <p className="text-gray-600">
                Wir begleiten dich durch den gesamten Bewerbungsprozess, koordinieren Termine und unterstützen bei Vertragsverhandlungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-2">
              Erfolgsgeschichten
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-base-darkgray">
              Das sagen unsere Kandidaten
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Erfahre, wie wir anderen Fachkräften geholfen haben, ihren Traumjob zu finden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-elevated p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-base-darkgray">Michael K.</h4>
                  <p className="text-sm text-gray-500">SHK-Anlagenmechaniker</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "HireHelden hat mir geholfen, einen Job zu finden, der wirklich zu mir passt. Der persönliche Kontakt und die professionelle Betreuung haben mich überzeugt."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-elevated p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-base-darkgray">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Physiotherapeutin</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Nach mehreren erfolglosen Bewerbungsversuchen hat mir HireHelden innerhalb weniger Wochen zu einer tollen Stelle verholfen. Die Beratung war kompetent und zielgerichtet."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-elevated p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  T
                </div>
                <div>
                  <h4 className="font-bold text-base-darkgray">Thomas B.</h4>
                  <p className="text-sm text-gray-500">Elektroniker</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Ich schätze besonders die ehrliche Beratung und dass HireHelden auch nach der Vermittlung noch für mich da war. So konnte ich mich optimal in meinem neuen Job einleben."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-2">
              Dein nächster Karriereschritt
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-base-darkgray">
              Kontaktiere uns
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Fülle das Formular aus und wir melden uns innerhalb von 24 Stunden bei dir, um deine beruflichen Möglichkeiten zu besprechen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactSection />
          </div>
        </div>
      </section>
    </main>
  );
} 