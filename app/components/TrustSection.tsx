import React from 'react';
import Image from 'next/image';

const awards = [
  {
    name: "HR Excellence Award",
    category: "Recruiting Innovation",
    year: "2023"
  },
  {
    name: "Deutscher Mittelstandspreis",
    category: "Digitale Lösungen",
    year: "2022"
  },
  {
    name: "Top Consultant",
    category: "Personalberatung",
    year: "2023"
  },
  {
    name: "Focus Business",
    category: "Wachstumschampion",
    year: "2022"
  }
];

const certifications = [
  "ISO 9001:2015",
  "DSGVO-konform",
  "TÜV-geprüft",
  "IHK Premium Partner"
];

const mediaFeatures = [
  "WirtschaftsWoche",
  "Handelsblatt",
  "Impulse",
  "t3n",
  "Personalwirtschaft",
  "Gründerszene"
];

export default function TrustSection() {
  const trustFactors = [
    {
      title: 'Messbare Ergebnisse',
      description: 'Wir liefern Ihnen messbare Ergebnisse und berichten transparent über den Fortschritt unserer Zusammenarbeit.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-primary'
    },
    {
      title: 'Branchenspezifisches Know-how',
      description: 'Wir verstehen die spezifischen Herausforderungen im Handwerk und Gesundheitswesen und passen unsere Strategien entsprechend an.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'bg-mineral-amber'
    },
    {
      title: 'Ganzheitlicher Ansatz',
      description: 'Wir verbinden bewährte Recruiting-Strategien mit innovativen digitalen Lösungen für nachhaltige Ergebnisse.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'bg-mineral-jade'
    },
    {
      title: 'Transparente Kommunikation',
      description: 'Wir informieren Sie regelmäßig über den Fortschritt und stehen Ihnen jederzeit für Fragen zur Verfügung.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'bg-primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 mineral-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            Warum HireHelden
          </span>
          <h2 className="text-base-darkgray">Vertrauen Sie auf unsere Expertise</h2>
          <p className="mt-6">
            Erfahren Sie, warum über 250 Betriebe bereits auf unsere Methode vertrauen und 
            wie wir Ihnen helfen können, Ihre offenen Stellen zu besetzen.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustFactors.map((factor, index) => (
            <div 
              key={index} 
              className="feature-card group hover:border-primary-light flex"
            >
              <div className={`${factor.color} w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-white shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300`}>
                {factor.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-base-darkgray group-hover:text-primary transition-colors duration-300">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-secondary shadow-soft">
            <p className="text-base-darkgray font-medium">
              Über <span className="font-bold text-primary">250 Betriebe</span> vertrauen bereits auf unsere Methode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 