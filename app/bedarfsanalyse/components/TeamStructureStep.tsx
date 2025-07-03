import React from 'react';

interface TeamStructureStepProps {
  formData: {
    teamSize: string;
    teamStructure: string;
    supervisor: string;
    hasManagementResponsibility: boolean | null;
    numberOfDirectReports: string;
  };
  onChange: (data: Partial<TeamStructureStepProps['formData']>) => void;
}

export default function TeamStructureStep({ formData, onChange }: TeamStructureStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      const boolValue = e.target.value === 'true';
      onChange({ [name]: boolValue });
      
      // Reset number of direct reports if no management responsibility
      if (name === 'hasManagementResponsibility' && !boolValue) {
        onChange({ numberOfDirectReports: '' });
      }
    } else {
      onChange({ [name]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">4. Team und Struktur</h2>
        <p className="text-gray-600 mt-1">
          Informationen über das Team und die Organisationsstruktur helfen uns, die Position besser zu verstehen.
        </p>
      </div>

      <div className="space-y-6">
        {/* Teamgröße */}
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">
            Teamgröße
          </label>
          <input
            type="number"
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Anzahl der Teammitglieder"
            min="0"
          />
        </div>

        {/* Teamstruktur */}
        <div>
          <label htmlFor="teamStructure" className="block text-sm font-medium text-gray-700 mb-1">
            Teamstruktur
          </label>
          <textarea
            id="teamStructure"
            name="teamStructure"
            value={formData.teamStructure}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Beschreiben Sie die Struktur des Teams und wie es in die Organisation eingebettet ist"
          ></textarea>
        </div>

        {/* Vorgesetzter */}
        <div>
          <label htmlFor="supervisor" className="block text-sm font-medium text-gray-700 mb-1">
            Vorgesetzter (Name + Position)
          </label>
          <input
            type="text"
            id="supervisor"
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="z.B. Max Mustermann, Abteilungsleiter"
          />
        </div>

        {/* Mitarbeiterführung */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Hat die Position Mitarbeiterführungsverantwortung?
          </label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="hasManagementResponsibilityYes"
                name="hasManagementResponsibility"
                value="true"
                checked={formData.hasManagementResponsibility === true}
                onChange={handleChange}
                className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
              />
              <label htmlFor="hasManagementResponsibilityYes" className="ml-2 text-gray-700">
                Ja
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="hasManagementResponsibilityNo"
                name="hasManagementResponsibility"
                value="false"
                checked={formData.hasManagementResponsibility === false}
                onChange={handleChange}
                className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
              />
              <label htmlFor="hasManagementResponsibilityNo" className="ml-2 text-gray-700">
                Nein
              </label>
            </div>
          </div>

          {formData.hasManagementResponsibility && (
            <div className="mt-3">
              <label htmlFor="numberOfDirectReports" className="block text-sm font-medium text-gray-700 mb-1">
                Anzahl direkt unterstellter Mitarbeiter
              </label>
              <input
                type="number"
                id="numberOfDirectReports"
                name="numberOfDirectReports"
                value={formData.numberOfDirectReports}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                placeholder="Anzahl der Mitarbeiter"
                min="0"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500 italic">
          Diese Informationen helfen uns, die Rolle und Verantwortlichkeiten der Position besser einzuschätzen.
        </p>
      </div>
    </div>
  );
} 