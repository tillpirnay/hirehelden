import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MethodSection() {
  const methods = [
    {
      title: 'Hero-Positionierung',
      description: 'Wir positionieren Ihren Betrieb als erste Wahl für Fachkräfte in Ihrer Region und Branche.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
        </svg>
      ),
      color: 'bg-primary',
      image: '/images/new/Bild Hero Positionierung.jpg'
    },
    {
      title: 'Bewerbermagnet-Strategie',
      description: 'Mit unseren bewährten Strategien ziehen Sie qualifizierte Bewerber an und überzeugen sie von Ihrem Betrieb.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      color: 'bg-accent',
      image: '/images/new/Bild Bewerbermagnet.jpg'
    },
    {
      title: 'Digitale Recruiting-Tools',
      description: 'Unsere digitalen Tools optimieren Ihren Recruiting-Prozess und machen ihn effizienter und erfolgreicher.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      color: 'bg-neutral',
      image: '/images/new/Bild Digitale Recruiting Tools.jpg'
    },
  ];

  return (
    <section id="method" className="py-12 sm:py-16 md:py-20 bg-secondary-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Unsere Methode
          </span>
          <h2 className="text-base-darkgray">Die HireHelden-Methode</h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base">
            Unsere ganzheitliche Methode verbindet effizientes Recruiting, Employer Branding und digitale Tools, 
            um den Fachkräftemangel im Handwerk und Gesundheitswesen nachhaltig zu lösen.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="feature-card group hover:border-primary-light"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${method.color} rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-base-darkgray group-hover:text-primary transition-colors duration-300">{method.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{method.description}</p>
              
              <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Image 
                  src={method.image}
                  alt={method.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-xl sm:rounded-2xl shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-accent bg-opacity-10 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Messbare Ergebnisse
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-base-darkgray">Warum unsere Methode funktioniert</h3>
              
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Datenbasierter Ansatz</h4>
                    <p className="text-sm sm:text-base text-gray-600">Wir analysieren kontinuierlich die Ergebnisse und optimieren unsere Strategie basierend auf Daten und Erkenntnissen.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Branchenspezifisches Know-how</h4>
                    <p className="text-sm sm:text-base text-gray-600">Wir verstehen die spezifischen Recruiting-Herausforderungen im Handwerk und Gesundheitswesen und passen unsere Strategien entsprechend an.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-base sm:text-lg font-semibold mb-1">Ganzheitlicher Prozess</h4>
                    <p className="text-sm sm:text-base text-gray-600">Von der Positionierung bis zur Einstellung begleiten wir Sie durch den gesamten Prozess und sorgen für nahtlose Übergänge.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-80 md:h-full md:min-h-[400px]">
              <Image 
                src="/images/u2123468582_Wide_close-up_of_a_clean_physiotherapy_treatment__261e5bdf-3231-4932-9eb1-21318c1ba2df_2.png"
                alt="Unsere Methode in Aktion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
                <Link href="/erstgespraech" className="flex items-center space-x-2 mb-2 sm:mb-3 hover:opacity-90 transition-opacity">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium">Mehr über unsere Methode erfahren</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 