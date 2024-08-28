import React, { useState } from "react";
import BusinessInfoStep from "./BusinessInfoStep";
import BusinessAddressStep from "./BusinessAddressStep";
import BusinessContactStep from "./BusinessContactStep";
import BusinessDescriptionStep from "./BusinessDescriptionStep";
import BusinessPhotosStep from "./BusinessPhotosStep";
import BusinessHoursStep from "./BusinessHoursStep";
import { FormData, GeoLocationData, Hours, initialState } from "./types";
import BusinessGeoLocationStep from "./BusinessGeoLocationStep";
import axios from "axios";
import { ONBOARD_API } from "../../../constants";
import { getToken, setOnboard } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

const OnboardingIndex: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // Initialize with the first step (Info)
  const [formData, setFormData] = useState<FormData>(initialState);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhotoChange = (photos: string[]) => {
    setFormData((prevData) => ({ ...prevData, photos }));
  };

  const handleGeoLocationChange = (geolocation: GeoLocationData) => {
    setFormData((prevData) => ({ ...prevData, geolocation }));
  };

  const handleHoursChange = (hours: Record<string, Hours>) => {
    setFormData((prevData) => ({ ...prevData, hours }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    console.log(formData);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    
    axios
      .post(ONBOARD_API, formData, {
        headers: {
          'Content-Type': 'application/json', // Or 'application/json' if you're sending JSON
          'Authorization': `Bearer ${getToken()}`, // Optional, if you need to send an authorization token
          // Add other headers as needed
        }
      })
      .then((result) => {
        console.log(result.data);
        // Redirect to the home page or any other page after successful login
        const res = result.data;

        if (res.success === 1) {
          setOnboard(true);
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  const renderStep = () => {
    switch (currentStep) {
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
          <BusinessDescriptionStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <BusinessAddressStep
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <BusinessGeoLocationStep
            formData={formData}
            onBack={handleBack}
            handleGeoLocationChange={handleGeoLocationChange}
            onNext={handleNext}
          />
        );
      case 4:
        return (
          <BusinessContactStep
            formData={formData}
            handleInputChange={handleInputChange}
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
      case 6:
        return (
          <BusinessPhotosStep
            photos={formData.photos}
            handlePhotoChange={handlePhotoChange}
            onSubmit={handleSubmit}
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
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-5/6 mx-auto my-8 bg-white">{renderStep()}</div>
      </div>
    </>
  );
};

export default OnboardingIndex;
