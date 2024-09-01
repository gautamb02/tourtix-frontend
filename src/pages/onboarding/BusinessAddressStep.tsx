// BusinessAddressStep.tsx
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

const BusinessAddressStep: React.FC<Props> = ({
  formData,
  handleInputChange,
  onNext,
  onBack,
}) => {
  const isButtonDisabled =
    !formData.address.trim() ||
    !formData.city.trim() ||
    !formData.state.trim() ||
    !formData.country.trim() ||
    !formData.pincode.trim();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="hidden md:w-1/2 md:block">
        <img src="/address.svg" className="w-5/6 mx-auto" alt="Address" />
      </div>
      <div className="mb-4 w-full md:w-1/2 p-4">
        <h2 className="text-xl text-center font-bold mb-2">Business Address</h2>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Street Address"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          placeholder="Pincode"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="flex justify-between mt-4">
          <BackButton onBack={onBack} />
          <NextButton isButtonDisabled={isButtonDisabled} onNext={onNext} />
        </div>
      </div>
    </div>
  );
};

export default BusinessAddressStep;