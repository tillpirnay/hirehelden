import React from 'react';
import Image from 'next/image';
import ErstgespraechButton from './ErstgespraechButton';

export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: 'Kostenlose Potenzialanalyse',
      description: 'Wir analysieren Ihre aktuelle Situation und identifizieren Potenziale für eine erfolgreiche Personalgewinnung.',
      color: 'bg-primary',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Strategieentwicklung',
      description: 'Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Strategie für Ihre Personalgewinnung.',
      color: 'bg-mineral-amber',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Umsetzung & Optimierung',
      description: 'Wir setzen die Strategie um und optimieren kontinuierlich basierend auf Daten und Ergebnissen.',
      color: 'bg-primary',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Erfolgreiche Personalgewinnung',
      description: 'Durch unsere Expertise und Erfahrung gewinnen wir die richtigen Mitarbeiter für Ihr Unternehmen.',
      color: 'bg-mineral-jade',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-secondary-light to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 mineral-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-light to-transparent opacity-10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-mineral-amber to-transparent opacity-10 rounded-tl-full"></div>
      
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            Unser Prozess
          </span>
          <h2 className="text-base-darkgray">So arbeiten wir mit Ihnen</h2>
          <p className="mt-6">
            Unser strukturierter Prozess sorgt für maximale Effizienz und Transparenz bei der Personalgewinnung.
            Erfahren Sie, wie wir gemeinsam Ihre Personalprobleme lösen.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-secondary hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step marker for mobile */}
                  <div className="md:hidden mb-6 flex justify-center">
                    <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-elevated`}>
                      <span className="text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`flex flex-col ${index % 2 === 1 ? 'md:items-start' : 'md:items-end'} md:justify-center`}>
                      <div className="bg-white rounded-2xl shadow-elevated p-6 sm:p-8 max-w-lg hover:shadow-card transition-shadow duration-300">
                        <div className="hidden md:flex items-center mb-6">
                          <div className={`${step.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg mr-4`}>
                            <span className="text-2xl font-bold">{step.number}</span>
                          </div>
                          <h3 className="text-xl font-bold text-base-darkgray">{step.title}</h3>
                        </div>
                        <h3 className="text-xl font-bold text-base-darkgray mb-4 md:hidden text-center">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className={`flex ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'} md:items-center`}>
                      <div className={`w-full max-w-md ${step.color} bg-opacity-10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start`}>
                        <div className={`${step.color} w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-6`}>
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-base-darkgray mb-2 text-center sm:text-left">Was wir tun:</h4>
                          {step.number === 1 && (
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Analyse Ihrer aktuellen Recruiting-Situation</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Identifikation von Engpässen und Chancen</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Erstellung eines ersten Maßnahmenplans</span>
                              </li>
                            </ul>
                          )}
                          {step.number === 2 && (
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Entwicklung einer maßgeschneiderten Strategie</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Definition von Zielgruppen und Kanälen</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Festlegung von Meilensteinen und KPIs</span>
                              </li>
                            </ul>
                          )}
                          {step.number === 3 && (
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Umsetzung der vereinbarten Maßnahmen</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Kontinuierliche Datenanalyse und Optimierung</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Wöchentliche Fortschrittsberichte</span>
                              </li>
                            </ul>
                          )}
                          {step.number === 4 && (
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Begleitung bis zur erfolgreichen Einstellung</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Unterstützung bei Onboarding und Integration</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span>Langfristige Strategien zur Mitarbeiterbindung</span>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step marker for desktop */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:block">
                    <div className={`${step.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white`}>
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-white rounded-2xl shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-block px-4 py-1 rounded-full bg-accent bg-opacity-10 text-accent text-sm font-medium mb-6">
                Jetzt starten
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-base-darkgray">Bereit für den ersten Schritt?</h3>
              
              <p className="text-gray-600 mb-8">
                Vereinbaren Sie jetzt Ihre kostenlose Potenzialanalyse und erfahren Sie, 
                wie wir Ihnen helfen können, qualifizierte Fachkräfte zu gewinnen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base-darkgray mb-1">30 Minuten Gespräch</h4>
                    <p className="text-gray-600">Ein kurzes Gespräch reicht, um Ihr Potenzial zu erkennen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-mineral-amber flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base-darkgray mb-1">Unverbindlich & kostenlos</h4>
                    <p className="text-gray-600">Keine versteckten Kosten oder Verpflichtungen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-mineral-jade flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base-darkgray mb-1">Sofortige Erkenntnisse</h4>
                    <p className="text-gray-600">Erhalten Sie direkt wertvolle Insights für Ihr Recruiting</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <ErstgespraechButton fullWidth={true} size="lg" />
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="/images/u2123468582_Hands_of_two_professionals_discussing_a_printed_s_00809e03-4e3f-4141-88cf-d5643acaeb39_3.png"
                alt="Potenzialanalyse"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <a href="#contact" className="group hover:opacity-90 transition-opacity">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Sprechen Sie mit unseren Experten</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 