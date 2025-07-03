import React from 'react';

interface BenefitsCultureStepProps {
  formData: {
    vacationDays: string;
    companyCarOption: string;
    companyBikeOption: boolean;
    additionalBenefits: string[];
    otherBenefits: string;
    companyCulture: string;
    whyWorkHere: string;
  };
  onChange: (data: Partial<BenefitsCultureStepProps['formData']>) => void;
}

export default function BenefitsCultureStep({ formData, onChange }: BenefitsCultureStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      
      if (name === 'companyBikeOption') {
        onChange({ [name]: checkbox.checked });
      } else if (name.startsWith('benefit_')) {
        const benefitValue = name.replace('benefit_', '');
        const updatedBenefits = [...formData.additionalBenefits];
        
        if (checkbox.checked) {
          if (!updatedBenefits.includes(benefitValue)) {
            updatedBenefits.push(benefitValue);
          }
        } else {
          const index = updatedBenefits.indexOf(benefitValue);
          if (index !== -1) {
            updatedBenefits.splice(index, 1);
          }
        }
        
        onChange({ additionalBenefits: updatedBenefits });
      }
    } else {
      onChange({ [name]: value });
    }
  };

  const benefitOptions = [
    { id: 'flexible_hours', label: 'Flexible Arbeitszeiten' },
    { id: 'home_office', label: 'Home Office / Remote Work' },
    { id: 'pension', label: 'Betriebliche Altersvorsorge' },
    { id: 'health_insurance', label: 'Betriebliche Krankenversicherung' },
    { id: 'gym', label: 'Fitnessstudio-Mitgliedschaft' },
    { id: 'food', label: 'Essenszuschuss / Kantine' },
    { id: 'education', label: 'Weiterbildungsbudget' },
    { id: 'childcare', label: 'Kinderbetreuung' },
    { id: 'events', label: 'Teamevents / Firmenveranstaltungen' },
    { id: 'public_transport', label: 'ÖPNV-Ticket / Mobilitätszuschuss' }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">6. Benefits & Unternehmenskultur</h2>
        <p className="text-gray-600 mt-1">
          Beschreiben Sie die Vorteile und die Kultur Ihres Unternehmens, um die besten Talente anzuziehen.
        </p>
      </div>

      <div className="space-y-6">
        {/* Urlaubstage */}
        <div>
          <label htmlFor="vacationDays" className="block text-sm font-medium text-gray-700 mb-1">
            Urlaubstage pro Jahr
          </label>
          <input
            type="number"
            id="vacationDays"
            name="vacationDays"
            value={formData.vacationDays}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="z.B. 30"
            min="20"
            max="60"
          />
        </div>

        {/* Firmenwagen */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Firmenwagen
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="companyCarYes"
                name="companyCarOption"
                value="yes"
                checked={formData.companyCarOption === 'yes'}
                onChange={handleChange}
                className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
              />
              <label htmlFor="companyCarYes" className="ml-2 text-gray-700">
                Ja, wird gestellt
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="companyCarOptional"
                name="companyCarOption"
                value="optional"
                checked={formData.companyCarOption === 'optional'}
                onChange={handleChange}
                className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
              />
              <label htmlFor="companyCarOptional" className="ml-2 text-gray-700">
                Optional möglich
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="companyCarNo"
                name="companyCarOption"
                value="no"
                checked={formData.companyCarOption === 'no'}
                onChange={handleChange}
                className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
              />
              <label htmlFor="companyCarNo" className="ml-2 text-gray-700">
                Nein
              </label>
            </div>
          </div>
        </div>

        {/* Firmenbike */}
        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="companyBikeOption"
              name="companyBikeOption"
              checked={formData.companyBikeOption}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="companyBikeOption" className="ml-2 text-gray-700">
              Firmenbike / Fahrradleasing möglich
            </label>
          </div>
        </div>

        {/* Weitere Benefits */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Weitere Benefits (Mehrfachauswahl möglich)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefitOptions.map((benefit) => (
              <div key={benefit.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`benefit_${benefit.id}`}
                  name={`benefit_${benefit.id}`}
                  checked={formData.additionalBenefits.includes(benefit.id)}
                  onChange={handleChange}
                  className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor={`benefit_${benefit.id}`} className="ml-2 text-gray-700">
                  {benefit.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Sonstige Benefits */}
        <div>
          <label htmlFor="otherBenefits" className="block text-sm font-medium text-gray-700 mb-1">
            Sonstige Benefits
          </label>
          <textarea
            id="otherBenefits"
            name="otherBenefits"
            value={formData.otherBenefits}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Weitere Benefits, die oben nicht aufgeführt sind"
          ></textarea>
        </div>

        {/* Unternehmenskultur */}
        <div>
          <label htmlFor="companyCulture" className="block text-sm font-medium text-gray-700 mb-1">
            Unternehmenskultur
          </label>
          <textarea
            id="companyCulture"
            name="companyCulture"
            value={formData.companyCulture}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Beschreiben Sie die Kultur und Werte Ihres Unternehmens"
          ></textarea>
        </div>

        {/* Warum bei Ihnen arbeiten? */}
        <div>
          <label htmlFor="whyWorkHere" className="block text-sm font-medium text-gray-700 mb-1">
            Warum bei Ihnen arbeiten?
          </label>
          <textarea
            id="whyWorkHere"
            name="whyWorkHere"
            value={formData.whyWorkHere}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Was macht Ihr Unternehmen zu einem attraktiven Arbeitgeber?"
          ></textarea>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 italic">
          Diese Informationen helfen uns, die Vorteile Ihres Unternehmens in der Kandidatenansprache hervorzuheben.
        </p>
      </div>
    </div>
  );
} 