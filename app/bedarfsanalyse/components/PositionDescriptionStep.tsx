import React from 'react';

interface PositionDescriptionStepProps {
  formData: {
    positionTitle: string;
    companyDescription: string;
    workLocation: string;
    workHours: string;
    hiringReason: string;
    developmentOpportunities: string;
    targetSalaryFixed: string;
    targetSalaryVariable: string;
    jobDescription: string;
  };
  onChange: (data: Partial<PositionDescriptionStepProps['formData']>) => void;
  validationErrors?: string[];
}

export default function PositionDescriptionStep({ formData, onChange, validationErrors = [] }: PositionDescriptionStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const hasError = (fieldName: string) => validationErrors.includes(fieldName);

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">3. Positionsbeschreibung</h2>
        <p className="text-gray-600 mt-1">
          Beschreiben Sie die zu besetzende Position detailliert, um die besten Kandidaten zu finden.
        </p>
        {validationErrors.length > 0 && (
          <p className="text-red-500 mt-2">
            Bitte füllen Sie alle Pflichtfelder aus.
          </p>
        )}
      </div>

      <div className="space-y-6">
        {/* Positionstitel */}
        <div>
          <label htmlFor="positionTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Positionstitel <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={formData.positionTitle}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${hasError('positionTitle') ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200`}
            placeholder="z.B. Projektleiter, Pflegefachkraft, Elektriker"
            required
          />
          {hasError('positionTitle') && (
            <p className="mt-1 text-sm text-red-500">Dieses Feld ist erforderlich</p>
          )}
        </div>

        {/* Unternehmensbeschreibung */}
        <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Unternehmensbeschreibung <span className="text-red-500">*</span>
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${hasError('companyDescription') ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200`}
            placeholder="Beschreiben Sie kurz Ihr Unternehmen (max. 500 Zeichen)"
            maxLength={500}
            required
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            {formData.companyDescription.length}/500 Zeichen
          </p>
          {hasError('companyDescription') && (
            <p className="mt-1 text-sm text-red-500">Dieses Feld ist erforderlich</p>
          )}
        </div>

        {/* Arbeitsort */}
        <div>
          <label htmlFor="workLocation" className="block text-sm font-medium text-gray-700 mb-1">
            Arbeitsort <span className="text-red-500">*</span>
          </label>
          <select
            id="workLocation"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${hasError('workLocation') ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200`}
            required
          >
            <option value="">Bitte auswählen</option>
            <option value="vor_ort">Vor Ort</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
          {hasError('workLocation') && (
            <p className="mt-1 text-sm text-red-500">Bitte wählen Sie einen Arbeitsort</p>
          )}
        </div>

        {/* Arbeitszeiten */}
        <div>
          <label htmlFor="workHours" className="block text-sm font-medium text-gray-700 mb-1">
            Arbeitszeiten
          </label>
          <input
            type="text"
            id="workHours"
            name="workHours"
            value={formData.workHours}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="z.B. Vollzeit, Teilzeit, flexible Arbeitszeiten, Schichtdienst"
          />
        </div>

        {/* Besetzungsgrund */}
        <div>
          <label htmlFor="hiringReason" className="block text-sm font-medium text-gray-700 mb-1">
            Besetzungsgrund
          </label>
          <select
            id="hiringReason"
            name="hiringReason"
            value={formData.hiringReason}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          >
            <option value="">Bitte auswählen</option>
            <option value="wachstum">Wachstum</option>
            <option value="neubesetzung">Neubesetzung</option>
            <option value="nachbesetzung">Nachbesetzung</option>
          </select>
        </div>

        {/* Entwicklungsmöglichkeiten */}
        <div>
          <label htmlFor="developmentOpportunities" className="block text-sm font-medium text-gray-700 mb-1">
            Entwicklungsmöglichkeiten
          </label>
          <textarea
            id="developmentOpportunities"
            name="developmentOpportunities"
            value={formData.developmentOpportunities}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Welche Entwicklungsmöglichkeiten bietet die Position?"
          ></textarea>
        </div>

        {/* Zielgehalt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="targetSalaryFixed" className="block text-sm font-medium text-gray-700 mb-1">
              Zielgehalt Fix (€ pro Jahr)
            </label>
            <input
              type="number"
              id="targetSalaryFixed"
              name="targetSalaryFixed"
              value={formData.targetSalaryFixed}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              placeholder="z.B. 50000"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="targetSalaryVariable" className="block text-sm font-medium text-gray-700 mb-1">
              Zielgehalt Variabel (€ pro Jahr)
            </label>
            <input
              type="number"
              id="targetSalaryVariable"
              name="targetSalaryVariable"
              value={formData.targetSalaryVariable}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              placeholder="z.B. 5000"
              min="0"
            />
          </div>
        </div>

        {/* Aufgabenbeschreibung */}
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Aufgabenbeschreibung
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Beschreiben Sie die Hauptaufgaben und Verantwortlichkeiten der Position (max. 1000 Zeichen)"
            maxLength={1000}
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            {formData.jobDescription.length}/1000 Zeichen
          </p>
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