import React from "react";
import { FormData } from "./types";

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

const BusinessInfoStep: React.FC<Props> = ({
  formData,
  handleInputChange,
  onNext,
}) => {
  // Check if either field is empty
  const isButtonDisabled =
    !formData.businessName.trim() || !formData.category.trim();

  return (
    <div className="mb-4">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <img src="/business-info.png" className="w-5/6 mx-auto" />
        </div>
        <div className="w-1/2 p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Business Information</h2>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            placeholder="Business Name"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Business Category"
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex justify-end mt-4">
            <button
              disabled={isButtonDisabled}
              onClick={onNext}
              className={`font-bold py-2 px-4 rounded text-white ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
              >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoStep;
