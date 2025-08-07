"use client";

import React, { useState } from 'react';

export default function BewerberContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    privacy: false
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validiere Dateityp (PDF, DOC, DOCX)
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrorMessage('Bitte laden Sie nur PDF- oder Word-Dateien hoch.');
        return;
      }
      
      // Validiere Dateigröße (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('Die Datei ist zu groß. Maximal 5MB sind erlaubt.');
        return;
      }
      
      setCvFile(file);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const formDataToSend = new FormData();
      
      // Füge alle Formulardaten hinzu
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });
      
      // Markiere als Bewerber-Anfrage
      formDataToSend.append('type', 'bewerber');
      
      // Füge CV-Datei hinzu, falls vorhanden
      if (cvFile) {
        formDataToSend.append('cv', cvFile);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend, // Verwende FormData statt JSON für File-Upload
      });

      if (!response.ok) {
        let errorText = 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.';
        try {
          const data = await response.json();
          if (data?.error) {
            errorText = data.error as string;
          }
        } catch (_) {
          /* ignore json parsing errors */
        }
        throw new Error(errorText);
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        privacy: false
      });
      setCvFile(null);
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
      }
    }
  };

  return (
    <section id="contact" className="py-2 sm:py-3 md:py-4 relative overflow-hidden">
      <div className="container-section relative z-10">
        <div className="section-title">
          <span className="inline-block px-2 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-xs font-medium mb-1 sm:mb-2">
            Kontakt
          </span>
          <h2 className="text-base-darkgray text-xl sm:text-2xl md:text-3xl">Jetzt kostenlos registrieren</h2>
          <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base px-0">
            Teilen Sie uns Ihre beruflichen Ziele mit und wir finden gemeinsam 
            die passende Position für Sie. Kostenlos und unverbindlich.
          </p>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-elevated overflow-hidden">
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-base-darkgray">Bewerber-Registrierung</h3>
                
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3">
                    <p className="text-green-800 text-sm">
                      Vielen Dank für Ihre Registrierung! Wir werden uns in Kürze bei Ihnen melden und Ihre Unterlagen prüfen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-2 sm:p-3">
                        <p className="text-red-800 text-sm">{errorMessage}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                          placeholder="Ihr vollständiger Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                          placeholder="Ihre E-Mail-Adresse"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                          placeholder="Ihre Telefonnummer"
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-xs font-medium text-gray-700 mb-1">
                          Gewünschte Position *
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                          placeholder="z.B. Elektriker, Physiotherapeut"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-xs font-medium text-gray-700 mb-1">
                        Berufserfahrung *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                        required
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="berufseinsteiger">Berufseinsteiger</option>
                        <option value="1-3-jahre">1-3 Jahre</option>
                        <option value="3-5-jahre">3-5 Jahre</option>
                        <option value="5-10-jahre">5-10 Jahre</option>
                        <option value="mehr-10-jahre">Mehr als 10 Jahre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cv" className="block text-xs font-medium text-gray-700 mb-1">
                        Lebenslauf hochladen
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="cv"
                          name="cv"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-medium file:bg-primary file:text-white hover:file:bg-primary-dark"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC oder DOCX • Max. 5MB
                        </p>
                        {cvFile && (
                          <p className="text-xs text-green-600 mt-1">
                            ✓ {cvFile.name} ausgewählt
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                        Ihre Nachricht
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                        placeholder="Erzählen Sie uns von Ihren beruflichen Zielen und Wünschen..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 text-xs text-gray-600">
                        Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme und Vermittlung verwendet werden. *
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`btn btn-primary w-full py-2 sm:py-2.5 text-sm sm:text-base font-medium ${
                          status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {status === 'submitting' ? 'Wird gesendet...' : 'Kostenlos registrieren'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-elevated h-full">
              <div className="p-3 sm:p-4 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-base-darkgray">Warum HireHelden?</h3>
                
                <div className="space-y-3 sm:space-y-4 flex-grow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base-darkgray mb-1 text-sm">100% kostenlos</h4>
                      <p className="text-gray-600 text-sm">Unsere Dienstleistung ist für Bewerber vollständig kostenfrei.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base-darkgray mb-1 text-sm">Exklusive Jobs</h4>
                      <p className="text-gray-600 text-sm">Zugang zu Stellenangeboten, die nicht öffentlich ausgeschrieben werden.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base-darkgray mb-1 text-sm">Persönliche Betreuung</h4>
                      <p className="text-gray-600 text-sm">Individueller Support durch den gesamten Bewerbungsprozess.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base-darkgray mb-1 text-sm">Schnelle Vermittlung</h4>
                      <p className="text-gray-600 text-sm">Dank unserem Netzwerk finden wir schnell passende Positionen.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-2 sm:mr-3">
                      <img 
                        src="/images/felix/WhatsApp Image 2025-07-02 at 11.32.23.jpeg" 
                        alt="Felix Schulze" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base-darkgray mb-0.5 text-sm">Ihr Ansprechpartner</h4>
                      <p className="text-gray-600 text-sm">Felix Schulze</p>
                      <p className="text-gray-600 text-xs">+49 173 674 2410</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}