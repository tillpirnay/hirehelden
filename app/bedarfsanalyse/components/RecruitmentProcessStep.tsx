import React from 'react';

interface RecruitmentProcessStepProps {
  formData: {
    interviewRounds: string;
    involvedPersons: string;
    requiredDocuments: string[];
    timeframe: string;
    targetCompanies: string;
    blacklistedCompanies: string;
  };
  onChange: (data: Partial<RecruitmentProcessStepProps['formData']>) => void;
}

export default function RecruitmentProcessStep({ formData, onChange }: RecruitmentProcessStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const documentValue = name.replace('document_', '');
      const updatedDocuments = [...formData.requiredDocuments];
      
      if (checkbox.checked) {
        if (!updatedDocuments.includes(documentValue)) {
          updatedDocuments.push(documentValue);
        }
      } else {
        const index = updatedDocuments.indexOf(documentValue);
        if (index !== -1) {
          updatedDocuments.splice(index, 1);
        }
      }
      
      onChange({ requiredDocuments: updatedDocuments });
    } else {
      onChange({ [name]: value });
    }
  };

  const documentOptions = [
    { id: 'cv', label: 'Lebenslauf' },
    { id: 'cover_letter', label: 'Anschreiben' },
    { id: 'certificates', label: 'Zeugnisse' },
    { id: 'references', label: 'Referenzen' },
    { id: 'work_samples', label: 'Arbeitsproben' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const timeframeOptions = [
    { value: 'asap', label: 'So schnell wie möglich' },
    { value: '1_month', label: 'Innerhalb eines Monats' },
    { value: '3_months', label: 'Innerhalb von 3 Monaten' },
    { value: '6_months', label: 'Innerhalb von 6 Monaten' },
    { value: 'flexible', label: 'Flexibel / Kein fester Zeitrahmen' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">7. Bewerbungsprozess</h2>
        <p className="text-gray-600 mt-1">
          Informationen über Ihren Bewerbungsprozess helfen uns, den Kandidaten den Ablauf transparent zu erklären.
        </p>
      </div>

      <div className="space-y-6">
        {/* Anzahl Gesprächsrunden */}
        <div>
          <label htmlFor="interviewRounds" className="block text-sm font-medium text-gray-700 mb-1">
            Anzahl Gesprächsrunden
          </label>
          <select
            id="interviewRounds"
            name="interviewRounds"
            value={formData.interviewRounds}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          >
            <option value="">Bitte auswählen</option>
            <option value="1">1 Gesprächsrunde</option>
            <option value="2">2 Gesprächsrunden</option>
            <option value="3">3 Gesprächsrunden</option>
            <option value="4">4 Gesprächsrunden</option>
            <option value="5">5 oder mehr Gesprächsrunden</option>
          </select>
        </div>

        {/* Beteiligte Personen */}
        <div>
          <label htmlFor="involvedPersons" className="block text-sm font-medium text-gray-700 mb-1">
            Beteiligte Personen
          </label>
          <textarea
            id="involvedPersons"
            name="involvedPersons"
            value={formData.involvedPersons}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Wer ist am Bewerbungsprozess beteiligt? (z.B. HR, Abteilungsleiter, Geschäftsführung)"
          ></textarea>
        </div>

        {/* Bewerbungsunterlagen */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Erforderliche Bewerbungsunterlagen (Mehrfachauswahl möglich)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {documentOptions.map((document) => (
              <div key={document.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`document_${document.id}`}
                  name={`document_${document.id}`}
                  checked={formData.requiredDocuments.includes(document.id)}
                  onChange={handleChange}
                  className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor={`document_${document.id}`} className="ml-2 text-gray-700">
                  {document.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Zeitrahmen für Besetzung */}
        <div>
          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
            Zeitrahmen für Besetzung
          </label>
          <select
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          >
            <option value="">Bitte auswählen</option>
            {timeframeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Konkrete Zielfirmen */}
        <div>
          <label htmlFor="targetCompanies" className="block text-sm font-medium text-gray-700 mb-1">
            Konkrete Zielfirmen (optional)
          </label>
          <textarea
            id="targetCompanies"
            name="targetCompanies"
            value={formData.targetCompanies}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Gibt es Unternehmen, aus denen Sie bevorzugt Kandidaten rekrutieren möchten?"
          ></textarea>
        </div>

        {/* Blacklist */}
        <div>
          <label htmlFor="blacklistedCompanies" className="block text-sm font-medium text-gray-700 mb-1">
            Nicht erwünschte Unternehmen - Blacklist (optional)
          </label>
          <textarea
            id="blacklistedCompanies"
            name="blacklistedCompanies"
            value={formData.blacklistedCompanies}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Gibt es Unternehmen, aus denen Sie keine Kandidaten rekrutieren möchten?"
          ></textarea>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 italic">
          Diese Informationen helfen uns, den Rekrutierungsprozess optimal zu gestalten und die richtigen Kandidaten für Sie zu finden.
        </p>
      </div>
    </div>
  );
} 