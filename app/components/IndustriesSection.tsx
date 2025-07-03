import React from 'react';
import Image from 'next/image';

export default function IndustriesSection() {
  const industries = [
    {
      name: 'Handwerk',
      description: 'Wir unterstützen Handwerksbetriebe bei der Gewinnung qualifizierter Fachkräfte und Auszubildender.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: 'bg-accent',
      professions: ['Mechatroniker für Sanitär-, Heizungs- und Klimatechnik', 'Estrichleger', 'Elektriker', 'Zimmerer', 'Maurer'],
      image: '/images/u2123468582_Detailed_view_of_a_technicians_hands_connecting_e_035ee260-e44d-4fc2-b460-75286f70aaa4_3.png'
    },
    {
      name: 'Gesundheitswesen',
      description: 'Wir helfen Gesundheitseinrichtungen, medizinisches Fachpersonal und Pflegekräfte zu finden.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-primary',
      professions: ['Physiotherapeuten', 'Ergotherapeuten', 'Pflegekräfte', 'Medizinische Fachangestellte', 'Zahnmedizinische Fachangestellte'],
      image: '/images/u2123468582_Close-up_of_a_physiotherapists_hands_gently_apply_91019710-00b6-4682-94a3-49e47d1552d8_2.png'
    }
  ];

  return (
    <section id="industries" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-light to-white opacity-70 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container-section relative z-20">
        <div className="section-title">
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Unsere Branchen
          </span>
          <h2 className="text-base-darkgray">Spezialisiert auf Ihre Branche</h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base">
            Wir sind auf die Personalgewinnung im Handwerk und Gesundheitswesen spezialisiert und 
            verstehen die spezifischen Herausforderungen dieser Branchen.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {industries.map((industry, index) => (
            <div key={index} className="card hover:shadow-elevated group transition-all duration-300">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image 
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <div className={`${industry.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 shadow-lg`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{industry.name}</h3>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-base-darkgray font-semibold text-sm sm:text-base mb-2 sm:mb-3">Gesuchte Berufe:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.professions.map((profession, i) => (
                      <span 
                        key={i} 
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          index === 0 
                            ? 'bg-accent bg-opacity-10 text-accent-dark' 
                            : 'bg-primary bg-opacity-10 text-primary'
                        }`}
                      >
                        {profession}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm font-medium text-gray-600">Branchenspezifische Strategien</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm font-medium text-gray-600">Messbare Ergebnisse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-elevated p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-accent bg-opacity-10 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Maßgeschneiderte Lösungen
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-base-darkgray">Warum branchenspezifisches Recruiting wichtig ist</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Jede Branche hat ihre eigenen Herausforderungen und Anforderungen bei der Personalgewinnung. 
                Wir haben unsere Methoden speziell für das Handwerk und das Gesundheitswesen entwickelt, 
                um gezielt die richtigen Fachkräfte anzusprechen und zu gewinnen.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="stat-card">
                  <div className="stat-number">87%</div>
                  <div className="stat-label">höhere Erfolgsquote durch branchenspezifisches Recruiting</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">3x</div>
                  <div className="stat-label">schnellere Besetzung offener Stellen</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-5 sm:p-8 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Ihre Vorteile</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-xs sm:text-sm">Branchenspezifische Ansprache potenzieller Bewerber</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-xs sm:text-sm">Gezielte Ansprache auf relevanten Plattformen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-xs sm:text-sm">Verständnis für branchenspezifische Anforderungen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-xs sm:text-sm">Effiziente Vorqualifizierung der Bewerber</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 