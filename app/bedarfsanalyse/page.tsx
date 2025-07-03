"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Form step components
import CustomerInfoStep from './components/CustomerInfoStep';
import WebsiteAnalysisStep from './components/WebsiteAnalysisStep';
import PositionDescriptionStep from './components/PositionDescriptionStep';
import TeamStructureStep from './components/TeamStructureStep';
import RequirementsProfileStep from './components/RequirementsProfileStep';
import BenefitsCultureStep from './components/BenefitsCultureStep';
import RecruitmentProcessStep from './components/RecruitmentProcessStep';
import SummaryStep from './components/SummaryStep';

export default function BedarfsanalysePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState(() => {
    // Try to load from localStorage if available
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('hirehelden_bedarfsanalyse');
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (e) {
          console.error('Error parsing saved form data', e);
        }
      }
    }
    
    // Default initial state
    return {
      // Customer and contact person
      companyName: '',
      contactName: '',
      contactPosition: '',
      contactEmail: '',
      contactPhone: '',
      contactAddress: '',
      
      // Website analysis
      hasWebsite: null,
      websiteUrl: '',
      hasCareerWebsite: null,
      careerWebsiteUrl: '',
      hasImages: null,
      images: [],
      socialMedia: {
        instagram: '',
        facebook: '',
        linkedin: ''
      },
      
      // Position description
      positionTitle: '',
      companyDescription: '',
      workLocation: '',
      workHours: '',
      hiringReason: '',
      developmentOpportunities: '',
      targetSalaryFixed: '',
      targetSalaryVariable: '',
      jobDescription: '',
      
      // Team and structure
      teamSize: '',
      teamStructure: '',
      supervisor: '',
      hasManagementResponsibility: null,
      numberOfDirectReports: '',
      
      // Requirements profile
      requiredEducation: [],
      yearsOfExperience: 0,
      mustHaveSkills: '',
      niceToHaveSkills: '',
      requiredCertificates: '',
      desiredCertificates: '',
      languageSkills: [],
      softSkills: '',
      personalityTraits: '',
      
      // Benefits and culture
      vacationDays: '',
      companyCarOption: '',
      companyBikeOption: false,
      additionalBenefits: [],
      otherBenefits: '',
      companyCulture: '',
      whyWorkHere: '',
      
      // Recruitment process
      interviewRounds: '',
      involvedPersons: '',
      requiredDocuments: [],
      timeframe: '',
      targetCompanies: '',
      blacklistedCompanies: ''
    };
  });

  const totalSteps = 8;

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('hirehelden_bedarfsanalyse', JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (stepData: any) => {
    setFormData((prev: typeof formData) => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    // Reset validation errors
    setValidationErrors([]);
    
    // Validate required fields based on current step
    const missingFields = getMissingRequiredFields();
    
    if (missingFields.length > 0) {
      setValidationErrors(missingFields);
      
      // Scroll to the first missing field
      setTimeout(() => {
        const firstMissingField = document.getElementById(missingFields[0]);
        if (firstMissingField) {
          firstMissingField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstMissingField.focus();
        }
      }, 100);
      
      return;
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const getMissingRequiredFields = () => {
    const missingFields: string[] = [];
    
    switch (currentStep) {
      case 1: // Customer Info
        if (!formData.companyName) missingFields.push('companyName');
        if (!formData.contactName) missingFields.push('contactName');
        if (!formData.contactEmail) missingFields.push('contactEmail');
        break;
      case 2: // Website Analysis
        // No required fields
        break;
      case 3: // Position Description
        if (!formData.positionTitle) missingFields.push('positionTitle');
        if (!formData.companyDescription) missingFields.push('companyDescription');
        if (!formData.workLocation) missingFields.push('workLocation');
        break;
      case 4: // Team Structure
        // No required fields
        break;
      case 5: // Requirements Profile
        // Keine Pflichtfelder in diesem Schritt
        break;
      case 6: // Benefits & Culture
        // No required fields
        break;
      case 7: // Recruitment Process
        // Keine Pflichtfelder in diesem Schritt
        break;
      case 8:
        return missingFields;
    }
    
    return missingFields;
  };

  const validateCurrentStep = () => {
    return getMissingRequiredFields().length === 0;
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const getStepName = (step: number): string => {
    switch (step) {
      case 1:
        return "Kontaktdaten";
      case 2:
        return "Website";
      case 3:
        return "Position";
      case 4:
        return "Team";
      case 5:
        return "Anforderungen";
      case 6:
        return "Benefits";
      case 7:
        return "Prozess";
      case 8:
        return "Zusammenfassung";
      default:
        return `Schritt ${step}`;
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/bedarfsanalyse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear localStorage after successful submission
        localStorage.removeItem('hirehelden_bedarfsanalyse');
        // Move to the final thank you step
        setCurrentStep(totalSteps);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CustomerInfoStep formData={formData} onChange={handleChange} validationErrors={validationErrors} />;
      case 2:
        return <WebsiteAnalysisStep formData={formData} onChange={handleChange} />;
      case 3:
        return <PositionDescriptionStep formData={formData} onChange={handleChange} validationErrors={validationErrors} />;
      case 4:
        return <TeamStructureStep formData={formData} onChange={handleChange} />;
      case 5:
        return <RequirementsProfileStep formData={formData} onChange={handleChange} />;
      case 6:
        return <BenefitsCultureStep formData={formData} onChange={handleChange} />;
      case 7:
        return <RecruitmentProcessStep formData={formData} onChange={handleChange} />;
      case 8:
        return <SummaryStep formData={formData} onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-base-lightgray">
      <div className="py-12 container-section">
        <div className="bg-white rounded-xl shadow-elevated overflow-hidden">
          <div className="p-5 sm:p-8">
            {/* Heading and intro */}
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Bedarfsanalyse</h1>
            <p className="text-center text-gray-700 text-sm sm:text-base mb-6">
              Bitte füllen Sie das folgende Formular aus, damit wir Ihre Anforderungen besser verstehen
              und geeignete Kandidaten für Sie finden können.
            </p>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Schritt {currentStep} von {totalSteps}</span>
                <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Step indicators */}
            <div className="hidden sm:flex justify-between mb-10 px-4">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep > index + 1 
                        ? 'bg-primary text-white' 
                        : currentStep === index + 1 
                        ? 'bg-primary-light text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-xs mt-2 text-gray-500 max-w-[80px] text-center">
                    {getStepName(index + 1)}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Current step */}
            <div className="mb-8">
              {renderStep()}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-12 pt-6 border-t border-gray-200 gap-3 sm:gap-0">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`btn ${currentStep === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'} text-gray-800 order-2 sm:order-1`}
              >
                Zurück
              </button>
              
              {currentStep < totalSteps && (
                <button
                  onClick={nextStep}
                  className="btn btn-primary order-1 sm:order-2"
                >
                  Weiter
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer removed to keep page minimal and hidden */}
    </div>
  );
} 