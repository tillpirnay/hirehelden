import React, { useState } from 'react';

interface WebsiteAnalysisStepProps {
  formData: {
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
  };
  onChange: (data: Partial<WebsiteAnalysisStepProps['formData']>) => void;
}

export default function WebsiteAnalysisStep({ formData, onChange }: WebsiteAnalysisStepProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      const boolValue = e.target.value === 'true';
      onChange({ [name]: boolValue });
      
      // Reset URL fields when radio is set to "No"
      if (!boolValue) {
        if (name === 'hasWebsite') onChange({ websiteUrl: '' });
        if (name === 'hasCareerWebsite') onChange({ careerWebsiteUrl: '' });
        if (name === 'hasImages') onChange({ images: [] });
      }
    } else if (type === 'file') {
      if (e.target.files && e.target.files.length > 0) {
        const filesArray = Array.from(e.target.files);
        setSelectedFiles(filesArray);
        onChange({ images: filesArray });
      }
    } else if (name.startsWith('socialMedia.')) {
      const socialMediaField = name.split('.')[1];
      onChange({
        socialMedia: {
          ...formData.socialMedia,
          [socialMediaField]: value
        }
      });
    } else {
      onChange({ [name]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">2. Websiteanalyse</h2>
        <p className="text-gray-600 mt-1">
          Informationen über Ihre Online-Präsenz helfen uns, Ihre Arbeitgebermarke besser zu verstehen.
        </p>
      </div>

      {/* Website vorhanden */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Haben Sie eine Website?
        </label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="hasWebsiteYes"
              name="hasWebsite"
              value="true"
              checked={formData.hasWebsite === true}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
            />
            <label htmlFor="hasWebsiteYes" className="ml-2 text-gray-700">
              Ja
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="hasWebsiteNo"
              name="hasWebsite"
              value="false"
              checked={formData.hasWebsite === false}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
            />
            <label htmlFor="hasWebsiteNo" className="ml-2 text-gray-700">
              Nein
            </label>
          </div>
        </div>

        {formData.hasWebsite && (
          <div className="mt-3">
            <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Website URL
            </label>
            <input
              type="url"
              id="websiteUrl"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              placeholder="https://www.beispiel.de"
            />
          </div>
        )}
      </div>

      {/* Karrierewebsite vorhanden */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Haben Sie eine Karrierewebsite?
        </label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="hasCareerWebsiteYes"
              name="hasCareerWebsite"
              value="true"
              checked={formData.hasCareerWebsite === true}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
            />
            <label htmlFor="hasCareerWebsiteYes" className="ml-2 text-gray-700">
              Ja
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="hasCareerWebsiteNo"
              name="hasCareerWebsite"
              value="false"
              checked={formData.hasCareerWebsite === false}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
            />
            <label htmlFor="hasCareerWebsiteNo" className="ml-2 text-gray-700">
              Nein
            </label>
          </div>
        </div>

        {formData.hasCareerWebsite && (
          <div className="mt-3">
            <label htmlFor="careerWebsiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Karrierewebsite URL
            </label>
            <input
              type="url"
              id="careerWebsiteUrl"
              name="careerWebsiteUrl"
              value={formData.careerWebsiteUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              placeholder="https://www.beispiel.de/karriere"
            />
          </div>
        )}
      </div>

      {/* Bildmaterial vorhanden */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Haben Sie Bildmaterial von Ihrem Unternehmen?
        </label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="hasImagesYes"
              name="hasImages"
              value="true"
              checked={formData.hasImages === true}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
            />
            <label htmlFor="hasImagesYes" className="ml-2 text-gray-700">
              Ja
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="hasImagesNo"
              name="hasImages"
              value="false"
              checked={formData.hasImages === false}
              onChange={handleChange}
              className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
            />
            <label htmlFor="hasImagesNo" className="ml-2 text-gray-700">
              Nein
            </label>
          </div>
        </div>

        {formData.hasImages && (
          <div className="mt-3">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
              Bildmaterial hochladen (optional)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">
              Sie können mehrere Dateien auswählen. Maximale Dateigröße: 5MB pro Datei.
            </p>
            
            {selectedFiles.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700">Ausgewählte Dateien:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name} ({Math.round(file.size / 1024)} KB)</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Social Media Präsenz (optional)
        </label>
        
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
              Instagram
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                instagram.com/
              </span>
              <input
                type="text"
                id="instagram"
                name="socialMedia.instagram"
                value={formData.socialMedia.instagram}
                onChange={handleChange}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="ihrprofil"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
              Facebook
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                facebook.com/
              </span>
              <input
                type="text"
                id="facebook"
                name="socialMedia.facebook"
                value={formData.socialMedia.facebook}
                onChange={handleChange}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="ihrprofil"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                linkedin.com/company/
              </span>
              <input
                type="text"
                id="linkedin"
                name="socialMedia.linkedin"
                value={formData.socialMedia.linkedin}
                onChange={handleChange}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="ihrprofil"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 