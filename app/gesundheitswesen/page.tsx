"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function GesundheitswesenLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Strategiegespräch Anfrage - Gesundheitswesen'
        }),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] to-[#0A2540]/90 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Schluss mit dem
                  <span className="text-red-400"> Personalmangel</span> im Gesundheitswesen
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Während Sie unter Personalnot leiden und Patienten warten müssen, 
                  finden wir in nur 30 Tagen die qualifizierten Fachkräfte für Ihre Einrichtung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#strategiegespraech" className="bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                    Jetzt kostenloses Strategiegespräch sichern
                  </a>
                  <div className="flex items-center space-x-2 text-blue-200 justify-center sm:justify-start">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% unverbindlich & kostenlos</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Personalnot in der Praxis?</h3>
                        <p className="text-gray-300">Überlastetes Team, lange Wartezeiten</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Lösung in 30 Tagen</h3>
                        <p className="text-gray-300">Qualifizierte Gesundheitsfachkräfte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Kennen Sie diese Herausforderungen?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Der Fachkräftemangel im Gesundheitswesen führt zu einer Belastungsspirale, 
                die Ihre Einrichtung und Ihre Patienten betrifft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Unterbesetzung",
                  description: "Ihr Team arbeitet am Anschlag. Überstunden sind die Regel, die Belastung steigt kontinuierlich."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Lange Wartezeiten",
                  description: "Patienten müssen wochenlang auf Termine warten. Die Versorgungsqualität leidet unter dem Personalmangel."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "Patientenstau",
                  description: "Termine können nicht vergeben werden, Behandlungen verzögern sich, Notfälle häufen sich."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  title: "Umsatzeinbußen",
                  description: "Weniger Personal bedeutet weniger Behandlungen und damit geringere Einnahmen bei steigenden Kosten."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Burnout-Gefahr",
                  description: "Die hohe Arbeitsbelastung führt zu Erschöpfung und erhöht das Risiko für weitere Personalausfälle."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: "Qualitätsverlust",
                  description: "Durch Zeitdruck und Überlastung kann die gewohnte Behandlungsqualität nicht mehr gewährleistet werden."
                }
              ].map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Die Lösung: HireHelden's hybride Recruiting-Strategie
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Während klassische Stellenbörsen nur 10% der Gesundheitsfachkräfte erreichen, sprechen wir 
                gezielt die 90% an, die nicht aktiv auf Jobsuche sind - aber durchaus wechselbereit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-red-50 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Herkömmliche Methoden</h3>
                  <div className="text-6xl font-bold text-red-600 mb-2">10%</div>
                  <p className="text-gray-600">
                    Nur 10% aller Gesundheitsfachkräfte sind aktiv auf Jobsuche. 
                    Stellenbörsen erreichen nur diese kleine Gruppe - 
                    <strong> pure Zeit- und Geldverschwendung!</strong>
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-green-50 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">HireHelden Methode</h3>
                  <div className="text-6xl font-bold text-green-600 mb-2">90%</div>
                  <p className="text-gray-600">
                    Unsere hybride Strategie erreicht die 90% passiven Kandidaten, 
                    die durchaus wechselbereit sind - 
                    <strong> hier finden wir Ihre Fachkräfte!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A2540] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                So funktioniert es: In nur 30 Tagen zu neuen Gesundheitsfachkräften
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white text-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h4 className="text-xl font-bold mb-3">Strategiegespräch</h4>
                  <p className="text-gray-300">
                    Wir analysieren Ihren Personalbedarf und entwickeln eine maßgeschneiderte Recruiting-Strategie für Ihre Gesundheitseinrichtung.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white text-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h4 className="text-xl font-bold mb-3">Aktive Ansprache</h4>
                  <p className="text-gray-300">
                    Durch unsere hybride Methode erreichen wir qualifizierte Gesundheitsfachkräfte, die nicht aktiv suchen, aber offen für neue Chancen sind.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white text-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h4 className="text-xl font-bold mb-3">Neue Mitarbeiter</h4>
                  <p className="text-gray-300">
                    Innerhalb von 30 Tagen präsentieren wir Ihnen vorqualifizierte Kandidaten, die perfekt zu Ihrer Einrichtung passen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="strategiegespraech" className="py-20 bg-gradient-to-br from-blue-600 to-[#0A2540] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Beenden Sie den Personalmangel – jetzt!
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Vereinbaren Sie ein kostenloses Strategiegespräch und erfahren Sie, 
                wie wir auch Ihre Gesundheitseinrichtung mit qualifizierten Fachkräften verstärken können.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Was Sie im Strategiegespräch erwartet:</h3>
                <div className="space-y-4">
                  {[
                    "Analyse Ihrer aktuellen Personalsituation",
                    "Maßgeschneiderte Recruiting-Strategie für Ihre Gesundheitseinrichtung",
                    "Realistische Zeitplanung für neue Mitarbeiter",
                    "Transparente Kostenaufstellung ohne versteckte Gebühren",
                    "Konkrete nächste Schritte für Ihren Erfolg"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 mt-8">
                  <div className="flex items-center space-x-2 text-green-300 mb-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">100% kostenlos & unverbindlich</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Das Strategiegespräch ist für Sie völlig kostenfrei und unverbindlich. 
                    Erst wenn Sie mit unserer Strategie zufrieden sind, gehen wir gemeinsam den nächsten Schritt.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-gray-900">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Vielen Dank!</h3>
                    <p className="text-gray-600">
                      Wir haben Ihre Anfrage erhalten und melden uns innerhalb der nächsten 24 Stunden bei Ihnen, 
                      um Ihr kostenloses Strategiegespräch zu vereinbaren.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-6 text-center">
                      Kostenloses Strategiegespräch anfordern
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Einrichtung *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                            placeholder="Ihre Gesundheitseinrichtung"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                            placeholder="ihre@email.de"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                            placeholder="Ihre Telefonnummer"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                          placeholder="Erzählen Sie uns kurz von Ihrem Personalbedarf..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-[#0A2540] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A2540]/90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Wird gesendet...' : 'Kostenloses Strategiegespräch anfordern'}
                      </button>

                      {status === 'error' && (
                        <div className="text-center text-red-600 mt-4">
                          Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.
                        </div>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}