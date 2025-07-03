import React, { useState } from 'react';

interface SummaryStepProps {
  formData: {
    // Customer and contact person
    companyName: string;
    contactName: string;
    contactPosition: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    
    // Website analysis
    hasWebsite: boolean | null;
    websiteUrl: string;
    hasCareerWebsite: boolean | null;
    careerWebsiteUrl: string;
    hasImages: boolean | null;
    images: File[];
    socialMedia: {
      instagram: string;
      facebook: string;
      linkedin: string;
    };
    
    // Position description
    positionTitle: string;
    companyDescription: string;
    workLocation: string;
    workHours: string;
    hiringReason: string;
    developmentOpportunities: string;
    targetSalaryFixed: string;
    targetSalaryVariable: string;
    jobDescription: string;
    
    // Team and structure
    teamSize: string;
    teamStructure: string;
    supervisor: string;
    hasManagementResponsibility: boolean | null;
    numberOfDirectReports: string;
    
    // Requirements profile
    requiredEducation: string[];
    yearsOfExperience: number;
    mustHaveSkills: string;
    niceToHaveSkills: string;
    requiredCertificates: string;
    desiredCertificates: string;
    languageSkills: {
      language: string;
      level: string;
    }[];
    softSkills: string;
    personalityTraits: string;
    
    // Benefits and culture
    vacationDays: string;
    companyCarOption: string;
    companyBikeOption: boolean;
    additionalBenefits: string[];
    otherBenefits: string;
    companyCulture: string;
    whyWorkHere: string;
    
    // Recruitment process
    interviewRounds: string;
    involvedPersons: string;
    requiredDocuments: string[];
    timeframe: string;
    targetCompanies: string;
    blacklistedCompanies: string;
  };
  onSubmit: () => void;
}

export default function SummaryStep({ formData, onSubmit }: SummaryStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!privacyAccepted) return;
    
    setIsSubmitting(true);
    
    try {
      await onSubmit();
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="text-center py-10">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vielen Dank für Ihre Anfrage!</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Wir haben Ihre Bedarfsanalyse erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen, 
          um die nächsten Schritte zu besprechen.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700 font-medium">Was passiert als nächstes?</p>
          <ol className="list-decimal text-left max-w-md mx-auto space-y-2 text-gray-600">
            <li>Ein Berater wird Ihre Anfrage prüfen und sich innerhalb von 24 Stunden bei Ihnen melden.</li>
            <li>Wir vereinbaren ein persönliches Gespräch, um Ihre Anforderungen im Detail zu besprechen.</li>
            <li>Wir entwickeln eine maßgeschneiderte Suchstrategie für Ihre Position.</li>
            <li>Die Kandidatensuche beginnt!</li>
          </ol>
        </div>
        <div className="mt-10">
          <a href="/" className="btn btn-primary">
            Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  // Helper function to format education options
  const getEducationLabel = (value: string) => {
    const educationMap: {[key: string]: string} = {
      'hauptschulabschluss': 'Hauptschulabschluss',
      'mittlere_reife': 'Mittlere Reife',
      'abitur': 'Abitur',
      'ausbildung': 'Abgeschlossene Ausbildung',
      'meister': 'Meister/Techniker',
      'bachelor': 'Bachelor',
      'master': 'Master',
      'promotion': 'Promotion'
    };
    return educationMap[value] || value;
  };

  // Helper function to format work location
  const getWorkLocationLabel = (value: string) => {
    const locationMap: {[key: string]: string} = {
      'vor_ort': 'Vor Ort',
      'remote': 'Remote',
      'hybrid': 'Hybrid'
    };
    return locationMap[value] || value;
  };

  // Helper function to format hiring reason
  const getHiringReasonLabel = (value: string) => {
    const reasonMap: {[key: string]: string} = {
      'wachstum': 'Wachstum',
      'neubesetzung': 'Neubesetzung',
      'nachbesetzung': 'Nachbesetzung'
    };
    return reasonMap[value] || value;
  };

  // Helper function to format company car option
  const getCompanyCarLabel = (value: string) => {
    const carMap: {[key: string]: string} = {
      'yes': 'Ja, wird gestellt',
      'optional': 'Optional möglich',
      'no': 'Nein'
    };
    return carMap[value] || value;
  };

  // Helper function to format benefits
  const getBenefitLabel = (value: string) => {
    const benefitMap: {[key: string]: string} = {
      'flexible_hours': 'Flexible Arbeitszeiten',
      'home_office': 'Home Office / Remote Work',
      'pension': 'Betriebliche Altersvorsorge',
      'health_insurance': 'Betriebliche Krankenversicherung',
      'gym': 'Fitnessstudio-Mitgliedschaft',
      'food': 'Essenszuschuss / Kantine',
      'education': 'Weiterbildungsbudget',
      'childcare': 'Kinderbetreuung',
      'events': 'Teamevents / Firmenveranstaltungen',
      'public_transport': 'ÖPNV-Ticket / Mobilitätszuschuss'
    };
    return benefitMap[value] || value;
  };

  // Helper function to format document types
  const getDocumentLabel = (value: string) => {
    const documentMap: {[key: string]: string} = {
      'cv': 'Lebenslauf',
      'cover_letter': 'Anschreiben',
      'certificates': 'Zeugnisse',
      'references': 'Referenzen',
      'work_samples': 'Arbeitsproben',
      'portfolio': 'Portfolio'
    };
    return documentMap[value] || value;
  };

  // Helper function to format timeframe
  const getTimeframeLabel = (value: string) => {
    const timeframeMap: {[key: string]: string} = {
      'asap': 'So schnell wie möglich',
      '1_month': 'Innerhalb eines Monats',
      '3_months': 'Innerhalb von 3 Monaten',
      '6_months': 'Innerhalb von 6 Monaten',
      'flexible': 'Flexibel / Kein fester Zeitrahmen'
    };
    return timeframeMap[value] || value;
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Zusammenfassung</h2>
        <p className="text-gray-600 mt-1">
          Bitte überprüfen Sie Ihre Angaben vor dem Absenden der Bedarfsanalyse.
        </p>
      </div>

      {/* Summary sections */}
      <div className="space-y-8">
        {/* Customer and contact person */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">1. Kunde und Ansprechpartner</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Unternehmensname</dt>
              <dd className="mt-1">{formData.companyName || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Ansprechpartner</dt>
              <dd className="mt-1">{formData.contactName || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Position</dt>
              <dd className="mt-1">{formData.contactPosition || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">E-Mail</dt>
              <dd className="mt-1">{formData.contactEmail || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Telefon</dt>
              <dd className="mt-1">{formData.contactPhone || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Adresse</dt>
              <dd className="mt-1">{formData.contactAddress || '-'}</dd>
            </div>
          </dl>
        </div>

        {/* Position description */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">2. Positionsbeschreibung</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Positionstitel</dt>
              <dd className="mt-1">{formData.positionTitle || '-'}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Unternehmensbeschreibung</dt>
              <dd className="mt-1">{formData.companyDescription || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Arbeitsort</dt>
              <dd className="mt-1">{formData.workLocation ? getWorkLocationLabel(formData.workLocation) : '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Arbeitszeiten</dt>
              <dd className="mt-1">{formData.workHours || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Besetzungsgrund</dt>
              <dd className="mt-1">{formData.hiringReason ? getHiringReasonLabel(formData.hiringReason) : '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Zielgehalt</dt>
              <dd className="mt-1">
                {formData.targetSalaryFixed ? `${formData.targetSalaryFixed} € (fix)` : '-'}
                {formData.targetSalaryVariable ? ` + ${formData.targetSalaryVariable} € (variabel)` : ''}
              </dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Aufgabenbeschreibung</dt>
              <dd className="mt-1">{formData.jobDescription || '-'}</dd>
            </div>
          </dl>
        </div>

        {/* Requirements profile */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">3. Anforderungsprofil</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Erforderliche Ausbildung</dt>
              <dd className="mt-1">
                {formData.requiredEducation && formData.requiredEducation.length > 0 
                  ? formData.requiredEducation.map(edu => getEducationLabel(edu)).join(', ') 
                  : '-'}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Berufserfahrung</dt>
              <dd className="mt-1">
                {formData.yearsOfExperience === 20 
                  ? '20+ Jahre' 
                  : formData.yearsOfExperience > 0 
                    ? `${formData.yearsOfExperience} Jahre` 
                    : 'Keine Erfahrung erforderlich'}
              </dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Must-have Skills</dt>
              <dd className="mt-1">{formData.mustHaveSkills || '-'}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Nice-to-have Skills</dt>
              <dd className="mt-1">{formData.niceToHaveSkills || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Sprachkenntnisse</dt>
              <dd className="mt-1">
                {formData.languageSkills && formData.languageSkills.length > 0 
                  ? formData.languageSkills.map((skill, index) => (
                      skill.language && skill.level 
                        ? <div key={index}>{skill.language}: {skill.level}</div>
                        : null
                    ))
                  : '-'}
              </dd>
            </div>
          </dl>
        </div>

        {/* Benefits & culture */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">4. Benefits & Unternehmenskultur</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Urlaubstage</dt>
              <dd className="mt-1">{formData.vacationDays || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Firmenwagen</dt>
              <dd className="mt-1">{formData.companyCarOption ? getCompanyCarLabel(formData.companyCarOption) : '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Firmenbike</dt>
              <dd className="mt-1">{formData.companyBikeOption ? 'Ja' : 'Nein'}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Weitere Benefits</dt>
              <dd className="mt-1">
                {formData.additionalBenefits && formData.additionalBenefits.length > 0 
                  ? formData.additionalBenefits.map(benefit => getBenefitLabel(benefit)).join(', ') 
                  : '-'}
                {formData.otherBenefits ? `, ${formData.otherBenefits}` : ''}
              </dd>
            </div>
          </dl>
        </div>

        {/* Recruitment process */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">5. Bewerbungsprozess</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Anzahl Gesprächsrunden</dt>
              <dd className="mt-1">{formData.interviewRounds || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Zeitrahmen für Besetzung</dt>
              <dd className="mt-1">{formData.timeframe ? getTimeframeLabel(formData.timeframe) : '-'}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Erforderliche Bewerbungsunterlagen</dt>
              <dd className="mt-1">
                {formData.requiredDocuments && formData.requiredDocuments.length > 0 
                  ? formData.requiredDocuments.map(doc => getDocumentLabel(doc)).join(', ') 
                  : '-'}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Privacy acceptance */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-start">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary mt-1"
            required
          />
          <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
            Ich habe die <a href="/datenschutz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme und Bearbeitung meiner Anfrage verwendet werden. <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || !privacyAccepted}
          className={`btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 ${
            isSubmitting || !privacyAccepted ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
          }`}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Bedarfsanalyse absenden'}
        </button>
      </div>
    </div>
  );
} 