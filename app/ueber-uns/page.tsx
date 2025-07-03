import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  const values = [
    {
      title: 'Ergebnisorientierung',
      description: 'Wir fokussieren uns auf messbare Ergebnisse und arbeiten systematisch für Ihren Erfolg.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Transparenz',
      description: 'Wir kommunizieren offen und ehrlich und machen unsere Prozesse transparent.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Qualität',
      description: 'Wir setzen auf höchste Qualität bei allen Prozessen und Dienstleistungen.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Wir entwickeln kontinuierlich neue Lösungen für die Herausforderungen unserer Kunden.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 mineral-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Über uns</h1>
              <p className="text-xl opacity-90">
                HireHelden ist Ihr Partner für die erfolgreiche Personalgewinnung im Handwerk und Gesundheitswesen.
                Wir verbinden traditionelles Recruiting mit innovativen digitalen Methoden.
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/new/Bild Kundenseite.jpg"
                  alt="HireHelden Team"
                  fill
                  style={{objectFit: 'cover'}}
                  className="transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
                Unsere Mission
              </span>
              <h2 className="text-3xl font-bold mb-6 text-base-darkgray">Wir lösen den Fachkräftemangel im deutschen Mittelstand</h2>
              <p className="text-gray-600 mb-6">
                Unsere Mission ist es, den Fachkräftemangel im deutschen Mittelstand nachhaltig zu lösen. 
                Wir helfen kleinen und mittleren Unternehmen im Handwerk und Gesundheitswesen, qualifizierte 
                Fachkräfte zu finden und langfristig zu binden.
              </p>
              <p className="text-gray-600 mb-8">
                Mit unserer ganzheitlichen Methode verbinden wir effizientes Recruiting, Employer Branding 
                und digitale Tools, um messbare Ergebnisse zu erzielen und den Erfolg unserer Kunden zu sichern.
              </p>
              <Link href="/erstgespraech" className="btn btn-primary">
                Mehr über unsere Methode
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-elevated">
                <Image 
                  src="/images/u2123468582_Hands_of_two_professionals_discussing_a_printed_s_00809e03-4e3f-4141-88cf-d5643acaeb39_3.png"
                  alt="HireHelden Team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-elevated">
                <p className="text-center font-medium text-primary">
                  Ein Team mit <span className="font-bold">+15 Jahren</span> Recruiting-Erfahrung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              Unser Team
            </span>
            <h2 className="text-3xl font-bold mb-6 text-base-darkgray">Die Menschen hinter HireHelden</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unser Team besteht aus erfahrenen Recruiting-Experten mit fundiertem Branchenwissen im Handwerk und Gesundheitswesen.
              Wir bringen Leidenschaft und Expertise mit, um für Sie die besten Talente zu finden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image 
                  src="/images/felix/WhatsApp Image 2025-07-02 at 11.32.23.jpeg"
                  alt="Felix Schulze"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-base-darkgray">Felix Schulze</h3>
                <p className="text-primary font-medium mb-4">Geschäftsführer</p>
                <p className="text-gray-600 mb-4">
                  Felix hat mehr als 10 Jahre Erfahrung im Recruiting und Personalwesen. Er hat HireHelden gegründet, 
                  um mittelständischen Unternehmen zu helfen, qualifizierte Fachkräfte zu finden.
                </p>
                <p className="text-gray-600">
                  Mit seinem umfassenden Netzwerk und seiner Expertise im Handwerk und Gesundheitswesen 
                  entwickelt er innovative Recruiting-Strategien für unsere Kunden.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-base-darkgray">Unser Expertenteam</h3>
              <p className="text-gray-600 mb-6">
                Hinter den Gründern steht ein engagiertes Team von Recruiting-Spezialisten, das täglich mit Leidenschaft daran arbeitet, die besten Talente für unsere Kunden zu gewinnen. Dabei gehen wir neue Wege: Unser Erfolg basiert auf dem Zusammenspiel aus Recruiting-Expertise, modernem Online-Marketing, zielgerichtetem Social Media Marketing und effektivem Active Sourcing.
              </p>
              <p className="text-gray-600 mb-6">
                Jedes Teammitglied bringt nicht nur fundierte Erfahrung in den Bereichen Handwerk und Gesundheitswesen mit, sondern versteht auch, wie man digitale Kanäle nutzt, um die richtigen Kandidat:innen zur richtigen Zeit zu erreichen.
              </p>
              <p className="text-gray-600 mb-8">
                Gemeinsam bilden wir ein starkes, interdisziplinäres Team, das klassische Recruiting-Methoden mit digitalen Strategien verbindet – für nachhaltige Erfolge bei der Fachkräftegewinnung.
              </p>
              
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white font-bold border-2 border-white">T</div>
                  <div className="w-12 h-12 rounded-full bg-mineral-amber flex items-center justify-center text-white font-bold border-2 border-white">S</div>
                  <div className="w-12 h-12 rounded-full bg-mineral-jade flex items-center justify-center text-white font-bold border-2 border-white">M</div>
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold border-2 border-white">+4</div>
                </div>
                <p className="ml-4 text-gray-600 font-medium">
                  Ein Team aus Experten für Ihren Erfolg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
              Unsere Werte
            </span>
            <h2 className="text-3xl font-bold mb-6 text-base-darkgray">Was uns antreibt</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unsere Werte bilden das Fundament unserer Arbeit und bestimmen, wie wir mit unseren Kunden, 
              Kandidaten und miteinander umgehen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-start p-6 bg-base-lightgray rounded-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-base-darkgray">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit, mit uns zusammenzuarbeiten?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns noch heute, um zu erfahren, wie wir Ihnen bei der Gewinnung qualifizierter Fachkräfte helfen können.
          </p>
          <Link href="/#contact" className="btn bg-white text-primary hover:bg-opacity-90 text-lg px-8 py-4 rounded-lg shadow-lg">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
} 