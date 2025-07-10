"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function InvestitionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const branches = [
    'Handwerk', 'Industrie', 'Baugewerbe', 'Dachdecker', 'KFZ-/NFZ-Betriebe', 'Autohäuser',
    'Logistik', 'Spedition & Transport', 'Photovoltaik', 'Gerüstbau', 'Elektrotechnik',
    'Fahrrad/Motorrad', 'Sanitär, Heizungs- und Klimatechnik', 'Garten- und Landschaftsbau',
    'Metallbau', 'Maler- und Lackierer', 'Agrar- und Landwirtschaftsbetriebe', 'Tischler/Schreiner',
    'Monteure', 'Lebensmittel- & Gastrobetriebe', 'Zahnärzte, Praxen & Dentallabore',
    'Mittelständische Unternehmen', 'Pflegeeinrichtungen', 'Physiotherapiepraxen',
    'Bäckerei/Konditorei', 'Andere Branche anfragen'
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] to-[#0A2540]/90 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Die besten Fachkräfte für Ihr Unternehmen – 
              <span className="text-blue-300"> effizient, professionell, messbar.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Erreichen Sie in nur wenigen Wochen qualifizierte Bewerbende für Ihre offenen Positionen – 
              mit dem Performance Recruiting von Hirehelden.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#kontakt" className="bg-white text-[#0A2540] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Jetzt unverbindliches Beratungsgespräch vereinbaren
              </a>
              <div className="flex items-center space-x-2 text-blue-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Kostenlose Erstberatung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Investition für die Gewinnung eines Mitarbeiters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparente Preisgestaltung für maximalen Erfolg bei der Personalgewinnung
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Setup Costs */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-[#0A2540] flex flex-col">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0A2540] text-white rounded-full mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4">HireHelden Performance Paket</h3>
                </div>

                <div className="space-y-4 flex-grow">
                  <h4 className="font-semibold text-[#0A2540] mb-4">Folgendes ist inkludiert:</h4>
                  {[
                    'Erstanalysegespräch',
                    'Karriereseite',
                    'Erstellung einer professionellen Jobanzeige',
                    'Job-Landingpages',
                    'Social Media Ads für Performance Marketing',
                    'Telefonische Vorqualifizierung der Bewerbenden',
                    'Werbekosten für die Schaltung der Werbung auf Meta & Co. für die ersten 30 Tage inkludiert'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                  <div className="text-xl font-bold text-[#0A2540] mb-1">1.500€ zzgl. MwSt.</div>
                  <p className="text-sm text-gray-600">je Position</p>
                </div>
              </div>

              {/* Success-based Pricing */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-blue-500">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Erfolgsbasierte Vergütung</h3>
                  <p className="text-gray-600">Nur bei erfolgreicher Vermittlung</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-[#0A2540]">Bei erfolgreicher Vermittlung</span>
                      <span className="text-2xl font-bold text-blue-600">16%</span>
                    </div>
                    <p className="text-gray-600">des Jahresgehalts</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-[#0A2540]">Ab der 2. gleichen Position</span>
                      <span className="text-2xl font-bold text-green-600">14%</span>
                    </div>
                    <p className="text-gray-600">des Jahresgehalts</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-[#0A2540]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Kein Risiko für Sie</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Sie zahlen nur bei erfolgreicher Vermittlung einer qualifizierten Fachkraft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Weitere Leistungen
              </h2>
              <p className="text-xl text-gray-600">
                Zusätzliche Services für Ihren Recruiting-Erfolg
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Foto / Videoshooting vor Ort',
                  description: 'Professionelle Aufnahmen um potenziellen Bewerbenden einen einzigartigen Eindruck vom Unternehmen zu geben.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'Websiteerstellung',
                  description: 'Professionelle Unternehmenswebsite, die Ihre Arbeitgebermarke stärkt und Bewerber überzeugt.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  )
                },
                {
                  title: 'Karriereportalerstellung',
                  description: 'Dediziertes Karriereportal für eine optimale Candidate Experience und professionelle Bewerbungsabwicklung.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-10 hover:shadow-lg transition-shadow duration-300 min-h-[320px] flex flex-col">
                  <div className="w-16 h-16 bg-[#0A2540] text-white rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                Unsere Branchen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir sind spezialisiert auf verschiedene Branchen und kennen deren spezifische Anforderungen
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {branches.map((branch, index) => (
                <div key={index} className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <span className="text-[#0A2540] font-medium text-sm">{branch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-[#0A2540] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Jetzt unverbindliches Beratungsgespräch vereinbaren
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Lassen Sie uns gemeinsam besprechen, wie wir Ihnen bei der Gewinnung qualifizierter Fachkräfte helfen können.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-900">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Vielen Dank für Ihre Anfrage!</h3>
                  <p className="text-gray-600">Wir werden uns in Kürze bei Ihnen melden.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Firma *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Branche *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] transition-colors"
                      >
                        <option value="">Bitte auswählen</option>
                        {branches.map((branch, index) => (
                          <option key={index} value={branch}>{branch}</option>
                        ))}
                      </select>
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
                      placeholder="Erzählen Sie uns von Ihrem Personalbedarf..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-[#0A2540] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A2540]/90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Wird gesendet...' : 'Jetzt unverbindliches Beratungsgespräch vereinbaren'}
                    </button>
                  </div>

                  {status === 'error' && (
                    <div className="text-center text-red-600 mt-4">
                      Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0A2540] text-white rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Garantierter Erfolg</h3>
                <p className="text-gray-600">Bezahlung nur bei erfolgreicher Vermittlung</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0A2540] text-white rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Schnelle Ergebnisse</h3>
                <p className="text-gray-600">Qualifizierte Bewerber in wenigen Wochen</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0A2540] text-white rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Persönliche Betreuung</h3>
                <p className="text-gray-600">Ihr fester Ansprechpartner für alle Fragen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 