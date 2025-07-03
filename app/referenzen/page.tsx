import Image from 'next/image';

export default function ReferencesPage() {
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
      image: '/images/u2123468582_Detailed_view_of_a_technicians_hands_connecting_e_035ee260-e44d-4fc2-b460-75286f70aaa4_2.png'
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
      image: '/images/u2123468582_Close-up_of_a_caregiver_gently_placing_their_hand_3c87469b-cf2f-40db-9a07-543191b1d057_3.png'
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
      image: '/images/u2123468582_Macro_shot_of_gears_turning_in_a_symbolic_represe_456d4960-bbee-497c-afc1-7294df35b0ab_3.png'
    }
  ];

  const pirnayQuotes = [
    {
      text: "Bei HireHelden fand ich nicht nur einen Job, sondern ein wertschätzendes Arbeitsumfeld mit echtem Teamgeist.",
      author: "Lisa M., Physiotherapeutin"
    },
    {
      text: "Die professionelle Vermittlung durch HireHelden hat mir geholfen, die perfekte Position in einer modernen Praxis zu finden.",
      author: "Michael K., Ergotherapeut"
    },
    {
      text: "Dank HireHelden konnte ich eine Stelle finden, die flexible Arbeitszeiten bietet und meine Work-Life-Balance respektiert.",
      author: "Sarah L., Rezeptionsfachkraft"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 mineral-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Referenzen</h1>
              <p className="text-xl opacity-90">
                Lesen Sie Erfolgsgeschichten unserer Kunden aus Handwerk und Gesundheitswesen.
              </p>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/u2123468582_Detailed_view_of_a_technicians_hands_connecting_e_035ee260-e44d-4fc2-b460-75286f70aaa4_2.png"
                  alt="Erfolgreiches Kundenprojekt MDV Küchenkonzepte"
                  fill
                  style={{objectFit: 'cover'}}
                  className="transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 justify-center">
          {/* MDV and Rheinluft are already hidden with the hidden class */}

          {/* Message about upcoming references */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Neue Referenzen in Kürze</h3>
            <p className="text-gray-600 mb-6">
              Wir arbeiten derzeit mit ausgewählten Kunden zusammen und werden in Kürze detaillierte Erfolgsgeschichten veröffentlichen.
            </p>
            <p className="text-gray-600">
              Wenn Sie mehr über unsere Arbeit erfahren möchten, kontaktieren Sie uns gerne für ein persönliches Gespräch.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unsere Kunden schätzen unseren personalisierten Ansatz und unsere systematische Methodik bei der Gewinnung von qualifizierten Fachkräften.
          </p>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-base-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-light to-transparent opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-mineral-amber to-transparent opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              Erfolgsgeschichten
            </span>
            <h2 className="text-3xl font-bold text-base-darkgray">Das sagen unsere Kunden</h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              Erfahren Sie, wie wir Unternehmen im Handwerk und Gesundheitswesen dabei geholfen haben, 
              ihre Personalprobleme zu lösen und qualifizierte Fachkräfte zu gewinnen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
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
                
                <div className="p-6">
                  <div className="mb-6">
                    <p className="italic text-gray-700">"{story.quote}"</p>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                      {story.person.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold text-base-darkgray">{story.person}</h4>
                      <p className="text-sm text-gray-600">{story.position}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-medium text-gray-600 mb-3">Ergebnisse:</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-secondary bg-opacity-20 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-mineral-amber">{story.results.applications}</div>
                        <div className="text-xs text-gray-600">Bewerbungen</div>
                      </div>
                      <div className="bg-secondary bg-opacity-20 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-primary">{story.results.interviews}</div>
                        <div className="text-xs text-gray-600">Gespräche</div>
                      </div>
                      <div className="bg-secondary bg-opacity-20 p-3 rounded-lg text-center">
                        <div className="text-xl font-bold text-mineral-copper">{story.results.hires}</div>
                        <div className="text-xs text-gray-600">Einstellungen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pirnay Testimonials */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-base-darkgray">Stimmen von vermittelten Fachkräften</h3>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Nicht nur unsere Kunden sind zufrieden - auch die von uns vermittelten Fachkräfte schätzen unseren Service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pirnayQuotes.map((quote, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                  <svg className="w-10 h-10 text-primary opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.737 21.948c1.341 0 2.35-.405 3.025-1.215.675-.81 1.013-1.823 1.013-3.038 0-1.216-.338-2.226-1.013-3.038-.676-.81-1.684-1.215-3.025-1.215-1.341 0-2.531.405-3.571 1.215-1.04.812-1.56 2.164-1.56 4.051 0 2.834.885 5.122 2.656 6.861 1.771 1.74 4.103 2.61 6.996 2.61v-2.926c-1.43 0-2.63-.405-3.604-1.215-.973-.81-1.56-1.891-1.76-3.24.27.135.675.203 1.215.203zm11.213 0c1.341 0 2.35-.405 3.025-1.215.675-.81 1.013-1.823 1.013-3.038 0-1.216-.338-2.226-1.013-3.038-.676-.81-1.684-1.215-3.025-1.215-1.341 0-2.531.405-3.571 1.215-1.04.812-1.56 2.164-1.56 4.051 0 2.834.885 5.122 2.656 6.861 1.771 1.74 4.103 2.61 6.996 2.61v-2.926c-1.43 0-2.63-.405-3.604-1.215-.973-.81-1.56-1.891-1.76-3.24.27.135.675.203 1.215.203z" />
                  </svg>
                  <p className="text-gray-700 italic mb-6">{quote.text}</p>
                  <p className="text-sm font-medium text-primary">{quote.author}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Unsere Erfolge in Zahlen</h3>
                <p className="mb-8 opacity-90">
                  Wir haben bereits über 100 Betrieben geholfen, ihre offenen Stellen zu besetzen und den Fachkräftemangel zu überwinden.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
                    <p className="text-white opacity-80">Fachkräfte vermittelt</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">28</div>
                    <p className="text-white opacity-80">Tage bis zur Einstellung</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                    <p className="text-white opacity-80">Zufriedene Kunden</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                    <p className="text-white opacity-80">Langfristige Bindung</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px] flex items-center justify-center p-12 bg-white">
                <div className="relative z-10 text-center">
                  <div className="inline-block w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-4xl mb-6 shadow-elevated">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-base-darkgray">Messbare Ergebnisse</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Wir liefern messbare Ergebnisse, und das auf Erfolgsbasis.
                  </p>
                  <a href="/#contact" className="btn btn-primary">
                    Jetzt kostenlose Beratung vereinbaren
                  </a>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-mineral-amber opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 