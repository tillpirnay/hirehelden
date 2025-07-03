import React from 'react';
import Image from 'next/image';

export default function SuccessStoriesSection() {
  const successStories = [
    {
      company: 'Elektro Müller GmbH',
      location: 'Frankfurt am Main',
      industry: 'Elektrohandwerk',
      quote: 'Dank HireHelden konnten wir innerhalb von nur 4 Wochen zwei qualifizierte Elektriker einstellen. Die Bewerber waren bereits vorqualifiziert und passten perfekt zu unserem Team.',
      person: 'Thomas Müller',
      position: 'Geschäftsführer',
      results: {
        applications: 28,
        interviews: 5,
        hires: 2
      },
      image: '/images/new/Elektro Müller.jpg'
    },
    {
      company: 'Pflegedienst Sonnenschein',
      location: 'München',
      industry: 'Gesundheitswesen',
      quote: 'Die Zusammenarbeit mit HireHelden hat unsere Personalprobleme gelöst. Wir haben jetzt ein stabiles Team von Pflegefachkräften und konnten sogar expandieren.',
      person: 'Maria Schmidt',
      position: 'Pflegedienstleitung',
      results: {
        applications: 32,
        interviews: 8,
        hires: 3
      },
      image: '/images/new/Pflegedienst Sonnenschein.jpg'
    },
    {
      company: 'Sanitär Becker',
      location: 'Hamburg',
      industry: 'SHK-Handwerk',
      quote: 'Mit der Unterstützung von HireHelden haben wir endlich unsere offenen Stellen besetzen können. Der gesamte Prozess war unkompliziert und effizient.',
      person: 'Klaus Becker',
      position: 'Inhaber',
      results: {
        applications: 24,
        interviews: 6,
        hires: 2
      },
      image: '/images/new/Bild Sanitär Becker.jpg'
    }
  ];

  return (
    <section id="success" className="py-20 bg-base-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-light to-transparent opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-mineral-amber to-transparent opacity-10"></div>
      
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            Erfolgsgeschichten
          </span>
          <h2 className="text-base-darkgray">Das sagen unsere Kunden</h2>
          <p className="mt-4 sm:mt-6 px-2 sm:px-0">
            Erfahren Sie, wie wir Unternehmen im Handwerk und Gesundheitswesen dabei geholfen haben, 
            ihre Personalprobleme zu lösen und qualifizierte Fachkräfte zu gewinnen.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="card group hover:border-primary transition-all duration-300">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image 
                  src={story.image}
                  alt={story.company}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{story.company}</h3>
                    <span className="px-2 py-1 rounded-full bg-white bg-opacity-20 text-white text-xs">
                      {story.industry}
                    </span>
                  </div>
                  <p className="text-sm text-white opacity-80">{story.location}</p>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="testimonial mb-4 sm:mb-6">
                  <p className="italic text-gray-700 text-sm sm:text-base">"{story.quote}"</p>
                </div>
                
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                    {story.person.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-base-darkgray">{story.person}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{story.position}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">Ergebnisse:</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-secondary bg-opacity-20 p-2 sm:p-3 rounded-lg text-center">
                      <div className="text-lg sm:text-xl font-bold text-mineral-amber">{story.results.applications}</div>
                      <div className="text-xs text-gray-600">Bewerbungen</div>
                    </div>
                    <div className="bg-secondary bg-opacity-20 p-2 sm:p-3 rounded-lg text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary">{story.results.interviews}</div>
                      <div className="text-xs text-gray-600">Gespräche</div>
                    </div>
                    <div className="bg-secondary bg-opacity-20 p-2 sm:p-3 rounded-lg text-center">
                      <div className="text-lg sm:text-xl font-bold text-mineral-copper">{story.results.hires}</div>
                      <div className="text-xs text-gray-600">Einstellungen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Unsere Erfolge in Zahlen</h3>
                <p className="mb-6 sm:mb-8 opacity-90">
                  Wir haben bereits über 100 Betrieben geholfen, ihre offenen Stellen zu besetzen und den Fachkräftemangel zu überwinden.
                </p>
                
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">250+</div>
                    <p className="text-white opacity-80">Fachkräfte vermittelt</p>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">28</div>
                    <p className="text-white opacity-80">Tage bis zur Einstellung</p>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100+</div>
                    <p className="text-white opacity-80">Zufriedene Kunden</p>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">95%</div>
                    <p className="text-white opacity-80">Langfristige Bindung</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-full min-h-[350px] sm:min-h-[400px] flex items-center justify-center p-8 sm:p-12 bg-white">
                <div className="relative z-10 text-center">
                  <div className="inline-block w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl sm:text-4xl mb-4 sm:mb-6 shadow-elevated">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-base-darkgray">Messbare Ergebnisse</h3>
                  <p className="text-gray-600 mb-5 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
                    Wir liefern messbare Ergebnisse, und das auf Erfolgsbasis.
                  </p>
                  <a href="#contact" className="btn btn-primary text-sm sm:text-base py-2 sm:py-3">
                    Jetzt kostenlose Beratung vereinbaren
                  </a>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-secondary opacity-30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-mineral-amber opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 