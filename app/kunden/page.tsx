"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ErstgespraechButton from '../components/ErstgespraechButton';

export default function KundenPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 mineral-pattern opacity-10"></div>
        
        {/* Content */}
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
              <h1 className="text-white leading-tight text-3xl sm:text-4xl md:text-5xl">
                Finden Sie die perfekten Kandidaten für Ihr Unternehmen
              </h1>
              <p className="text-lg sm:text-xl text-white text-opacity-90">
                HireHelden - Ihre Experten für nachhaltige Personalvermittlung
              </p>
              <div className="pt-2 sm:pt-4">
                <ErstgespraechButton 
                  variant="white" 
                  size="lg" 
                  className="transform hover:scale-105 w-full sm:w-auto"
                />
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/u2123468582_A_professional_SHK_technician_Sanitary_Heating_Ai_7694df1a-27f6-495c-b6cd-a25320eb2c06_3.png"
                  alt="Professionelles Team"
                  fill
                  style={{objectFit: 'cover'}}
                  className="transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ihre Vorteile mit HireHelden</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten Ihnen einen umfassenden Service, der speziell auf die Bedürfnisse von mittelständischen 
              Unternehmen im Handwerk und Gesundheitswesen zugeschnitten ist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-base-lightgray p-6 rounded-xl">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Zeitersparnis</h3>
              <p className="text-gray-600">
                Wir übernehmen den gesamten Rekrutierungsprozess für Sie, sodass Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
            </div>
            
            <div className="bg-base-lightgray p-6 rounded-xl">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Branchenkenntnis</h3>
              <p className="text-gray-600">
                Wir sind Experten für das Handwerk und Gesundheitswesen und kennen die spezifischen Anforderungen Ihrer Branche.
              </p>
            </div>
            
            <div className="bg-base-lightgray p-6 rounded-xl">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Qualitätssicherung</h3>
              <p className="text-gray-600">
                Wir prüfen jeden Kandidaten sorgfältig, um sicherzustellen, dass er zu Ihrem Unternehmen und der Position passt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-base-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unser Prozess</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir haben einen systematischen Ansatz entwickelt, um die besten Kandidaten für Ihre offenen Stellen zu finden.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4 sm:mb-0 sm:mr-4">1</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">Erstgespräch vereinbaren</h3>
                    <p className="text-gray-600">
                      Wir führen ein ausführliches Gespräch, um Ihre Anforderungen und Wünsche zu verstehen. 
                      Dabei erfassen wir alle relevanten Details zur Position und Ihrem Unternehmen.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4 sm:mb-0 sm:mr-4">2</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">Kandidatensuche</h3>
                    <p className="text-gray-600">
                      Wir nutzen unser Netzwerk und moderne Recruiting-Methoden, um passende Kandidaten zu identifizieren 
                      und anzusprechen.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4 sm:mb-0 sm:mr-4">3</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">Vorauswahl und Interviews</h3>
                    <p className="text-gray-600">
                      Wir führen Gespräche mit potenziellen Kandidaten und treffen eine Vorauswahl basierend auf 
                      Ihren Anforderungen.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4 sm:mb-0 sm:mr-4">4</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">Präsentation der Kandidaten</h3>
                    <p className="text-gray-600">
                      Wir stellen Ihnen die besten Kandidaten vor und unterstützen Sie bei der Entscheidungsfindung.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4 sm:mb-0 sm:mr-4">5</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">Einstellung und Onboarding</h3>
                    <p className="text-gray-600">
                      Wir begleiten Sie und den neuen Mitarbeiter durch den Einstellungsprozess und das Onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie wir anderen Unternehmen geholfen haben, qualifizierte Fachkräfte zu finden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-base-lightgray p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">R</div>
                <div>
                  <h4 className="font-bold">Rheinluft GmbH</h4>
                  <p className="text-sm text-gray-600">Lüftungstechnik</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Dank HireHelden konnten wir innerhalb kürzester Zeit einen qualifizierten Lüftungstechniker finden. 
                Der gesamte Prozess war professionell und effizient."
              </p>
              <p className="font-medium">- Michael Schmidt, Geschäftsführer</p>
            </div>
            
            <div className="bg-base-lightgray p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">P</div>
                <div>
                  <h4 className="font-bold">Pirnay Physiotherapie</h4>
                  <p className="text-sm text-gray-600">Physiotherapie</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "HireHelden hat uns geholfen, zwei erfahrene Physiotherapeuten für unsere Praxis zu finden. 
                Die Kandidaten passen perfekt zu unserem Team und unserer Philosophie."
              </p>
              <p className="font-medium">- Sarah Pirnay, Praxisinhaberin</p>
            </div>
            
            <div className="bg-base-lightgray p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">M</div>
                <div>
                  <h4 className="font-bold">MDV Küchenstudio</h4>
                  <p className="text-sm text-gray-600">Küchenbau</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Die Zusammenarbeit mit HireHelden war unkompliziert und zielführend. Wir konnten schnell einen 
                qualifizierten Küchenplaner einstellen, der unser Team optimal ergänzt."
              </p>
              <p className="font-medium">- Daniel Meyer, Inhaber</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihren nächsten Schritt?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            In nur 5 Minuten zum ersten Gespräch. Starten Sie jetzt und finden Sie die perfekten Kandidaten für Ihr Unternehmen.
          </p>
          
          <ErstgespraechButton 
            variant="white" 
            size="lg" 
            className="transform hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
} 