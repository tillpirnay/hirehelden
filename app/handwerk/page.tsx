"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function HandwerkLandingPage() {
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
          subject: 'Strategiegespräch Anfrage - Handwerk'
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
                  <span className="text-red-400"> Fachkräfte-Notstand</span> im Handwerk
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                  Während Sie 60+ Stunden pro Woche arbeiten und Aufträge ablehnen müssen, 
                  finden wir in nur 30 Tagen die qualifizierten Handwerker für Ihren Betrieb.
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
                        <h3 className="font-bold text-lg">Notstand im Betrieb?</h3>
                        <p className="text-gray-300">Überlastete Mitarbeiter, liegenbleibende Aufträge</p>
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
                        <p className="text-gray-300">Qualifizierte Fachkräfte für Ihren Betrieb</p>
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
                Kennen Sie diese Probleme?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Der Fachkräftemangel im Handwerk führt zu einer Abwärtsspirale, 
                die Ihren Betrieb und Ihr Privatleben belastet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Überarbeitete Mitarbeiter",
                  description: "Ihre wenigen Mitarbeiter arbeiten am Limit. Überstunden sind die Regel, Motivation und Qualität leiden darunter."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "Liegenbleibende Aufträge",
                  description: "Aufträge stapeln sich, Kunden warten monatelang. Sie müssen profitable Projekte ablehnen oder verschieben."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  title: "Umsatzverlust",
                  description: "Weniger Kapazität bedeutet weniger Umsatz. Ihr Betrieb kann nicht wachsen, obwohl die Nachfrage da wäre."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Endlose Arbeitstage",
                  description: "12-14 Stunden täglich sind normal geworden. Sie springen überall ein, wo Personal fehlt."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Keine Freizeit mehr",
                  description: "Familie, Hobbys, Erholung? Fehlanzeige. Ihr Privatleben leidet unter dem Personalmangel."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Stress ohne Ende",
                  description: "Ständige Sorgen um Personal, Termine und Qualität. Der Druck lastet schwer auf Ihren Schultern."
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
                Während klassische Stellenbörsen nur 10% der Arbeitnehmer erreichen, sprechen wir 
                gezielt die 90% an, die nicht aktiv auf Jobsuche sind - aber durchaus wechselbereit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-red-50 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Herkömmliche Methoden</h3>
                  <div className="text-6xl font-bold text-red-600 mb-2">10%</div>
                  <p className="text-gray-600">
                    Nur 10% aller Arbeitnehmer sind aktiv auf Jobsuche. 
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
                So funktioniert es: In nur 30 Tagen zu neuen Fachkräften
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white text-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h4 className="text-xl font-bold mb-3">Strategiegespräch</h4>
                  <p className="text-gray-300">
                    Wir analysieren Ihren Bedarf und entwickeln eine maßgeschneiderte Recruiting-Strategie für Ihr Handwerksunternehmen.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white text-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h4 className="text-xl font-bold mb-3">Aktive Ansprache</h4>
                  <p className="text-gray-300">
                    Durch unsere hybride Methode erreichen wir qualifizierte Handwerker, die nicht aktiv suchen, aber offen für neue Chancen sind.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white text-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h4 className="text-xl font-bold mb-3">Neue Mitarbeiter</h4>
                  <p className="text-gray-300">
                    Innerhalb von 30 Tagen präsentieren wir Ihnen vorqualifizierte Kandidaten, die perfekt zu Ihrem Betrieb passen.
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
                Stoppen Sie den Fachkräfte-Notstand – jetzt!
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Vereinbaren Sie ein kostenloses Strategiegespräch und erfahren Sie, 
                wie wir auch Ihren Betrieb mit qualifizierten Fachkräften verstärken können.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Was Sie im Strategiegespräch erwartet:</h3>
                <div className="space-y-4">
                  {[
                    "Analyse Ihrer aktuellen Personalsituation",
                    "Maßgeschneiderte Recruiting-Strategie für Ihr Handwerk",
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
                            Betrieb *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                            placeholder="Ihr Handwerksbetrieb"
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