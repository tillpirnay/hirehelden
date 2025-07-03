import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary-light opacity-50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary opacity-10 rounded-tr-full"></div>
      
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            Über uns
          </span>
          <h2 className="text-base-darkgray">Das HireHelden-Team</h2>
          <p className="mt-6">
            Unsere Gründer haben langjährige Erfahrung im Recruiting, Marketing aber auch im Handwerk und im Gesundheitswesen sammeln können.
            Damit bringen wir ein einzigartiges Know-How aus den Branchen, in denen wir rekrutieren mit.
            Mit unserer ganzheitlichen Methode verbinden wir effizientes Recruiting, Employer Branding und digitale Tools, um messbare Ergebnisse zu erzielen und den Erfolg unserer Kunden zu sichern.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-base-darkgray">Unsere Mission</h3>
            <p className="text-gray-600 mb-6">
              Unsere Mission ist es, den Fachkräftemangel im deutschen Mittelstand nachhaltig zu lösen. 
              Wir helfen kleinen und mittleren Unternehmen im Handwerk und Gesundheitswesen, qualifizierte 
              Fachkräfte zu finden und langfristig zu binden.
            </p>
            <p className="text-gray-600 mb-6">
              Mit unserer ganzheitlichen Methode verbinden wir effizientes Recruiting, Employer Branding 
              und digitale Tools, um messbare Ergebnisse zu erzielen und den Erfolg unserer Kunden zu sichern.
            </p>
            
            <div className="bg-secondary bg-opacity-20 p-6 rounded-xl mt-8">
              <h4 className="text-lg font-bold mb-4 text-base-darkgray">Unsere Werte</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
                      {value.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-base-darkgray mb-1">{value.title}</h5>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-elevated transform translate-y-12">
                  <Image 
                    src="/images/u2123468582_Professional_team_of_recruiters_and_consultants_i_7a66c19b-14a2-4168-b2f7-585931140ffa_3.png"
                    alt="HireHelden Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-elevated">
                  <Image 
                    src="/images/u2123468582_Close-up_of_a_caregiver_gently_placing_their_hand_3c87469b-cf2f-40db-9a07-543191b1d057_3.png"
                    alt="HireHelden Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-elevated">
                  <Image 
                    src="/images/u2123468582_Hands_of_two_professionals_discussing_a_printed_s_00809e03-4e3f-4141-88cf-d5643acaeb39_3.png"
                    alt="HireHelden Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-elevated transform translate-y-12">
                  <Image 
                    src="/images/u2123468582_Side_view_of_a_patient_doing_guided_balance_exerc_da638cd4-7a78-44d1-b470-ef3833298e0d_1.png"
                    alt="HireHelden Team"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
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
  );
} 