// BusinessContactStep.tsx
import React from "react";
import { FormData } from "./types";
import BackButton from "../../components/onboarding/BackButton";
import NextButton from "../../components/onboarding/NextButton";

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessContactStep: React.FC<Props> = ({
  formData,
  handleInputChange,
  onNext,
  onBack,
}) => {

    const isButtonDisabled = !formData.website.trim() || !formData.phone.trim() || !formData.email.trim() ;
  return(
  <div className="flex items-center justify-center">
    <div className="w-1/2">
      <img src="/contact.png" className="w-5/6 mx-auto" />
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Business Contact</h2>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone Number"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email Address"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="url"
        name="website"
        value={formData.website}
        onChange={handleInputChange}
        placeholder="Website URL"
        className="w-full p-2 mb-2 border rounded"
      />
      <div className="flex justify-between mt-4">
      <BackButton onBack={onBack}/>
      <NextButton isButtonDisabled={isButtonDisabled} onNext={onNext}/>
      </div>
    </div>
  </div>
  );
};

export default BusinessContactStep;
