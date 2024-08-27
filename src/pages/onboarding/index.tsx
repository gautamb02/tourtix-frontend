import React, { useState } from "react";
import BusinessInfoStep from "./BusinessInfoStep";
import BusinessAddressStep from "./BusinessAddressStep";
import BusinessContactStep from "./BusinessContactStep";
import BusinessDescriptionStep from "./BusinessDescriptionStep";
import BusinessPhotosStep from "./BusinessPhotosStep";
import BusinessHoursStep from "./BusinessHoursStep";
import { FormData, Hours } from "./types";
import Navbar from "../../components/Navbar";
import BusinessGeoLocationStep from "./BusinessGeoLocationStep";

const OnboardingIndex: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    category: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    photos: [],
    hours: {},
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhotoChange = (photos: string[]) => {
    setFormData((prevData) => ({ ...prevData, photos }));
  };

  const handleHoursChange = (hours: Record<string, Hours>) => {
    setFormData((prevData) => ({ ...prevData, hours }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case -1:
        return(
          <BusinessGeoLocationStep/>
        )
      case 0:
        return (
          <BusinessInfoStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <BusinessAddressStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <BusinessContactStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <BusinessDescriptionStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <BusinessPhotosStep
            photos={formData.photos}
            handlePhotoChange={handlePhotoChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <BusinessHoursStep
            hours={formData.hours}
            handleHoursChange={handleHoursChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Onboarding Complete!</h2>
            <img
              src="https://placehold.co/600x400?text=Welcome+to+Your+Business+Profile"
              alt="Onboarding Complete"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-5/6 mx-auto my-8 bg-white">
          {renderStep()}
        </div>
      </div>
    </>
  );
};

export default OnboardingIndex;
