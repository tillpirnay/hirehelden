import React from 'react';

interface CustomerInfoStepProps {
  formData: {
    companyName: string;
    contactName: string;
    contactPosition: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
  };
  onChange: (data: Partial<CustomerInfoStepProps['formData']>) => void;
  validationErrors?: string[];
}

export default function CustomerInfoStep({ formData, onChange, validationErrors = [] }: CustomerInfoStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const hasError = (fieldName: string) => validationErrors.includes(fieldName);

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">1. Kunde und Ansprechpartner</h2>
        <p className="text-gray-600 mt-1">
          Bitte geben Sie Ihre Unternehmensdaten und Kontaktinformationen an.
        </p>
        {validationErrors.length > 0 && (
          <p className="text-red-500 mt-2">
            Bitte füllen Sie alle Pflichtfelder aus.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Unternehmensname <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${hasError('companyName') ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200`}
            placeholder="Name Ihres Unternehmens"
            required
          />
          {hasError('companyName') && (
            <p className="mt-1 text-sm text-red-500">Dieses Feld ist erforderlich</p>
          )}
        </div>

        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
            Ansprechpartner Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${hasError('contactName') ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200`}
            placeholder="Vor- und Nachname"
            required
          />
          {hasError('contactName') && (
            <p className="mt-1 text-sm text-red-500">Dieses Feld ist erforderlich</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactPosition" className="block text-sm font-medium text-gray-700 mb-1">
            Position/Funktion
          </label>
          <input
            type="text"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Ihre Position im Unternehmen"
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${hasError('contactEmail') ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200`}
            placeholder="ihre.email@beispiel.de"
            required
          />
          {hasError('contactEmail') && (
            <p className="mt-1 text-sm text-red-500">Dieses Feld ist erforderlich</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefonnummer
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="+49 123 4567890"
          />
        </div>

        <div>
          <label htmlFor="contactAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse (optional)
          </label>
          <input
            type="text"
            id="contactAddress"
            name="contactAddress"
            value={formData.contactAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Straße, Hausnummer, PLZ, Ort"
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          <span className="text-red-500">*</span> Pflichtfelder
        </p>
      </div>
    </div>
  );
} 