// OnboardingIndex.tsx
import React, { useState } from 'react';
import BusinessInfoStep from './BusinessInfoStep';
import ContactInfoStep from './ContactInfoStep';
import BusinessHoursStep from './BusinessHoursStep';
import PhotosStep from './PhotosStep';
import { FormData } from './types';
import BusinessDescriptionStep from './BusinessDescriptionStep';

const OnboardingIndex: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    category: '',
    address: '',
    phone: '',
    website: '',
    hours: {},
    description: '',
    photos: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BusinessInfoStep formData={formData} handleInputChange={handleInputChange} />;
      case 1:
        return <ContactInfoStep formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <BusinessHoursStep />;
      case 3:
        return <BusinessDescriptionStep formData={formData} handleInputChange={handleInputChange} />;
      case 4:
        return <PhotosStep />;
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Onboarding Complete!</h2>
            <img src="https://placehold.co/600x400?text=Welcome+to+Your+Business+Profile" alt="Onboarding Complete" className="w-full rounded-lg shadow-md" />
          </div>
        );
    }
  };

  return (
   <div className='w-full min-h-screen flex bg-transparent items-center'>



<div className='w-5/6  mx-auto my-8 bg-white p-6 rounded-md border '>
      <h1 className="text-2xl font-bold mb-4">Business Profile Onboarding</h1>
      {renderStep()}
      <div className="flex justify-between  items-center mt-4">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        )}
        {currentStep < 4 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => console.log('Submit', formData)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
   </div>
  );
};

export default OnboardingIndex;