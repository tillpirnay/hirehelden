"use client";

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
    privacy: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
        company: '',
        email: '',
        phone: '',
        industry: '',
        message: '',
        privacy: false
      });
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
          <h2 className="text-base-darkgray text-xl sm:text-2xl md:text-3xl">Jetzt unverbindlich beraten lassen</h2>
          <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base px-0">
            Vereinbaren Sie jetzt Ihre kostenlose Potenzialanalyse und erfahren Sie, 
            wie wir Ihnen helfen können, qualifizierte Fachkräfte zu gewinnen.
          </p>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-elevated overflow-hidden">
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-base-darkgray">Kontaktformular</h3>
                
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3">
                    <p className="text-green-800 text-sm">
                      Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.
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
                          placeholder="Ihr Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">
                          Unternehmen *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                          placeholder="Ihr Unternehmen"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
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
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                          placeholder="Ihre Telefonnummer"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-xs font-medium text-gray-700 mb-1">
                        Branche *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-gray-900"
                        required
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="handwerk">Handwerk</option>
                        <option value="gesundheitswesen">Gesundheitswesen</option>
                        <option value="other">Andere</option>
                      </select>
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
                        placeholder="Wie können wir Ihnen helfen?"
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
                        Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme verwendet werden. *
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
                        {status === 'submitting' ? 'Wird gesendet...' : 'Kostenlose Potenzialanalyse anfordern'}
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
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-base-darkgray">Kontaktinformationen</h3>
                
                <div className="space-y-2 sm:space-y-3 flex-grow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-2 sm:mr-3">
                      <img 
                        src="/images/felix/WhatsApp Image 2025-07-02 at 11.32.23.jpeg" 
                        alt="Felix Schulze" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-0.5 sm:pt-1">
                      <h4 className="font-bold text-base-darkgray mb-0.5 text-sm">Ansprechpartner</h4>
                      <p className="text-gray-600 text-sm">Felix Schulze</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-base-darkgray mb-2 text-sm sm:text-base">So erreichen Sie uns</h4>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">info@hirehelden.de</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">+49 173 674 2410</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">
                          Schanzenstrasse 23<br />
                          51063 Köln
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 sm:pt-6">
                    <h4 className="font-bold text-base-darkgray mb-2 text-sm sm:text-base">Folgen Sie uns</h4>
                    <div className="flex space-x-3">
                      <a href="https://www.instagram.com/hirehelden/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
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