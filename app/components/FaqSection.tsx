"use client";

import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Warum sollte man mit HireHelden zusammenarbeiten?',
      answer: 'Weil wir es zum Ziel gemacht haben unsere Kunden individuell zu beraten. Wir versenden nicht unsere gesammelten Kandidatenleads an verschiedene Unternehmen, sondern betreuen nur ein einziges Unternehmen je Branche und Region. Der Radius der exklusiven Zusammenarbeit kann von Region zu Region unterschiedlich sein.'
    },
    {
      question: 'Wie lange dauert es, bis wir erste Bewerber sehen?',
      answer: 'In der Regel sehen Sie bereits innerhalb der ersten 7-14 Tage qualifizierte Bewerberanfragen. Wir arbeiten mit einem systematischen Ansatz, der kontinuierlich optimiert wird, um den Bewerberzufluss zu maximieren.'
    },
    {
      question: 'Was kostet die Zusammenarbeit mit HireHelden?',
      answer: 'Die Setup-Kosten für die Erstellung von Visuals, Landingpages und Ads liegen bei 999,00€ zzgl. MwSt. Diese Summe wird bei der erfolgreichen Vermittlung eines Mitarbeiters verrechnet. Unsere Erfolgsfee bei Einstellung eines Mitarbeiter liegt bei 18% des Bruttojahresgehalts.'
    },
    {
      question: 'Für welche Branchen ist HireHelden spezialisiert?',
      answer: 'Wir sind spezialisiert auf die Personalgewinnung im Handwerk und Gesundheitswesen. Unsere Expertise umfasst verschiedene Bereiche wie Elektrohandwerk, SHK, Baugewerbe, Pflegebereich, therapeutische Berufe und medizinisches Praxispersonal. Durch unsere Branchenspezialisierung verstehen wir die spezifischen Herausforderungen und können gezielte Lösungen anbieten.'
    },
    {
      question: 'Wie unterscheidet sich HireHelden von klassischen Personalvermittlern?',
      answer: 'Anders als klassische Personalvermittler, die einen suchenden Kandidaten bei diversen Unternehmen vorstellt, suchen wir individuell für Ihr Unternehmen die passende Fachkraft. Nach detaillierter Potenzialanalase, in dem wir alle Anforderungen besprechen, senden wir Ihnen nur telefonisch vorqualifizierte Kandidaten.'
    },
    {
      question: 'Wie läuft die Zusammenarbeit mit HireHelden ab?',
      answer: 'Die Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch, in dem wir Ihre aktuelle Situation und Herausforderungen analysieren. Anschließend entwickeln wir eine maßgeschneiderte Strategie und setzen diese gemeinsam mit Ihnen um. Während der gesamten Zusammenarbeit erhalten Sie regelmäßige Updates und haben einen festen Ansprechpartner, der Sie durch den Prozess begleitet.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-secondary-light to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary-light to-transparent opacity-10 rounded-tl-full"></div>
      
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-base-darkgray">Häufig gestellte Fragen</h2>
          <p className="mt-6">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unserer Methode und Zusammenarbeit.
            Wenn Sie weitere Fragen haben, kontaktieren Sie uns gerne direkt.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
            <div className="divide-y divide-gray-100">
              {faqs.map((faq, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-bold text-base-darkgray">{faq.question}</h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-primary text-white' : 'bg-secondary-light text-primary'}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-secondary bg-opacity-20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-base-darkgray mb-4">Haben Sie weitere Fragen?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Unser Team steht Ihnen gerne zur Verfügung, um alle Ihre Fragen zu beantworten und Sie bei der Personalgewinnung zu unterstützen.
            </p>
            <a href="#contact" className="btn btn-primary inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Kontaktieren Sie uns
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-elevated">
              <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Erfolgreiche Methodik</h3>
              <p className="text-white text-opacity-90">
                Qualifizierte Bewerber durch unsere bewährte Methode – das ist unser Versprechen an Sie.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-mineral-amber to-mineral-copper text-white shadow-elevated">
              <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Persönliche Betreuung</h3>
              <p className="text-white text-opacity-90">
                Ein fester Ansprechpartner begleitet Sie durch den gesamten Prozess der Personalgewinnung.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-mineral-slate to-mineral-jade text-white shadow-elevated">
              <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Transparente Prozesse</h3>
              <p className="text-white text-opacity-90">
                Wir halten Sie stets über den Fortschritt auf dem Laufenden und liefern regelmäßige Berichte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 