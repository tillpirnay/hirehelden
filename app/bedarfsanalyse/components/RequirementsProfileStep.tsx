import React from 'react';

interface LanguageSkill {
  language: string;
  level: string;
}

interface RequirementsProfileStepProps {
  formData: {
    requiredEducation: string[];
    yearsOfExperience: number;
    mustHaveSkills: string;
    niceToHaveSkills: string;
    requiredCertificates: string;
    desiredCertificates: string;
    languageSkills: LanguageSkill[];
    softSkills: string;
    personalityTraits: string;
  };
  onChange: (data: Partial<RequirementsProfileStepProps['formData']>) => void;
}

export default function RequirementsProfileStep({ formData, onChange }: RequirementsProfileStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'yearsOfExperience') {
      onChange({ [name]: Number(value) });
    } else if (name === 'requiredEducation') {
      const options = e.target as HTMLSelectElement;
      const selectedOptions = Array.from(options.selectedOptions).map(option => option.value);
      onChange({ requiredEducation: selectedOptions });
    } else {
      onChange({ [name]: value });
    }
  };

  const handleLanguageChange = (index: number, field: 'language' | 'level', value: string) => {
    const updatedLanguageSkills = [...formData.languageSkills];
    
    if (index >= updatedLanguageSkills.length) {
      // Add new language skill
      updatedLanguageSkills.push({ language: '', level: '' });
    }
    
    updatedLanguageSkills[index][field] = value;
    onChange({ languageSkills: updatedLanguageSkills });
  };

  const addLanguageSkill = () => {
    const updatedLanguageSkills = [...formData.languageSkills, { language: '', level: '' }];
    onChange({ languageSkills: updatedLanguageSkills });
  };

  const removeLanguageSkill = (index: number) => {
    const updatedLanguageSkills = [...formData.languageSkills];
    updatedLanguageSkills.splice(index, 1);
    onChange({ languageSkills: updatedLanguageSkills });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">5. Anforderungsprofil</h2>
        <p className="text-gray-600 mt-1">
          Definieren Sie die Anforderungen an den idealen Kandidaten für diese Position.
        </p>
      </div>

      <div className="space-y-6">
        {/* Erforderliche Ausbildung */}
        <div>
          <label htmlFor="requiredEducation" className="block text-sm font-medium text-gray-700 mb-1">
            Erforderliche Ausbildung (Mehrfachauswahl möglich)
          </label>
          <select
            id="requiredEducation"
            name="requiredEducation"
            multiple
            value={formData.requiredEducation}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            size={5}
          >
            <option value="hauptschulabschluss">Hauptschulabschluss</option>
            <option value="mittlere_reife">Mittlere Reife</option>
            <option value="abitur">Abitur</option>
            <option value="ausbildung">Abgeschlossene Ausbildung</option>
            <option value="meister">Meister/Techniker</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
            <option value="promotion">Promotion</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">
            Halten Sie die Strg-Taste gedrückt, um mehrere Optionen auszuwählen.
          </p>
        </div>

        {/* Berufserfahrung */}
        <div>
          <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
            Berufserfahrung in Jahren
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              min="0"
              max="20"
              step="1"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-gray-700 min-w-[3rem] text-center">
              {formData.yearsOfExperience === 20 ? '20+' : formData.yearsOfExperience}
            </span>
          </div>
        </div>

        {/* Must-have Skills */}
        <div>
          <label htmlFor="mustHaveSkills" className="block text-sm font-medium text-gray-700 mb-1">
            Must-have Skills
          </label>
          <textarea
            id="mustHaveSkills"
            name="mustHaveSkills"
            value={formData.mustHaveSkills}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Unbedingt erforderliche Fähigkeiten und Kenntnisse"
          ></textarea>
        </div>

        {/* Nice-to-have Skills */}
        <div>
          <label htmlFor="niceToHaveSkills" className="block text-sm font-medium text-gray-700 mb-1">
            Nice-to-have Skills
          </label>
          <textarea
            id="niceToHaveSkills"
            name="niceToHaveSkills"
            value={formData.niceToHaveSkills}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Wünschenswerte, aber nicht unbedingt erforderliche Fähigkeiten"
          ></textarea>
        </div>

        {/* Erforderliche Zertifikate */}
        <div>
          <label htmlFor="requiredCertificates" className="block text-sm font-medium text-gray-700 mb-1">
            Erforderliche Zertifikate
          </label>
          <textarea
            id="requiredCertificates"
            name="requiredCertificates"
            value={formData.requiredCertificates}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Unbedingt erforderliche Zertifikate oder Nachweise"
          ></textarea>
        </div>

        {/* Wünschenswerte Zertifikate */}
        <div>
          <label htmlFor="desiredCertificates" className="block text-sm font-medium text-gray-700 mb-1">
            Wünschenswerte Zertifikate
          </label>
          <textarea
            id="desiredCertificates"
            name="desiredCertificates"
            value={formData.desiredCertificates}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Wünschenswerte, aber nicht unbedingt erforderliche Zertifikate"
          ></textarea>
        </div>

        {/* Sprachkenntnisse */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Sprachkenntnisse
          </label>
          
          {formData.languageSkills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4 mb-3">
              <div className="flex-1">
                <select
                  value={skill.language}
                  onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                >
                  <option value="">Sprache auswählen</option>
                  <option value="deutsch">Deutsch</option>
                  <option value="englisch">Englisch</option>
                  <option value="französisch">Französisch</option>
                  <option value="spanisch">Spanisch</option>
                  <option value="italienisch">Italienisch</option>
                  <option value="russisch">Russisch</option>
                  <option value="chinesisch">Chinesisch</option>
                  <option value="andere">Andere</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  value={skill.level}
                  onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                >
                  <option value="">Niveau auswählen</option>
                  <option value="grundkenntnisse">Grundkenntnisse</option>
                  <option value="gut">Gut</option>
                  <option value="sehr_gut">Sehr gut</option>
                  <option value="fließend">Fließend</option>
                  <option value="muttersprache">Muttersprache</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => removeLanguageSkill(index)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addLanguageSkill}
            className="mt-2 flex items-center text-sm text-primary hover:text-primary-dark"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Sprache hinzufügen
          </button>
        </div>

        {/* Soft Skills */}
        <div>
          <label htmlFor="softSkills" className="block text-sm font-medium text-gray-700 mb-1">
            Soft Skills
          </label>
          <textarea
            id="softSkills"
            name="softSkills"
            value={formData.softSkills}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Gewünschte soziale Kompetenzen (z.B. Teamfähigkeit, Kommunikationsstärke)"
          ></textarea>
        </div>

        {/* Persönlichkeitsmerkmale */}
        <div>
          <label htmlFor="personalityTraits" className="block text-sm font-medium text-gray-700 mb-1">
            Persönlichkeitsmerkmale
          </label>
          <textarea
            id="personalityTraits"
            name="personalityTraits"
            value={formData.personalityTraits}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Gewünschte Charaktereigenschaften (z.B. selbstständig, lösungsorientiert)"
          ></textarea>
        </div>
      </div>
    </div>
  );
} 