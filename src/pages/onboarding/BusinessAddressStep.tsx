// BusinessAddressStep.tsx
import React from "react";
import { FormData } from "./types";

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
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <img src="/address.png" className="w-5/6 mx-auto" />
      </div>
      <div className="mb-4 w-1/2">
        <h2 className="text-xl font-bold mb-2">Business Address</h2>
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
          <button
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
          <button
            disabled={isButtonDisabled}
            onClick={onNext}
            className={`font-bold py-2 px-4 rounded text-white ${
              isButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessAddressStep;
