import React from "react";
import { FormData } from "./types";

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessDescriptionStep: React.FC<Props> = ({
  formData,
  handleInputChange,
  onNext,
  onBack,
}) => {
  const cleanedDescription = formData.description.trim().replace(/\s+/g, ' ');
  const MIN_DESCRIPTION_LENGTH = 20;
  const CURRENT_DESCRIPTION_LENGTH = cleanedDescription.length;
  const isButtonDisabled = CURRENT_DESCRIPTION_LENGTH < MIN_DESCRIPTION_LENGTH;

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <img src="/about.png" className="w-5/6 mx-auto" />
      </div>
      <div className="mb-4 w-1/2">
        <h2 className="text-xl font-bold mb-2">Business Description</h2>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your business..."
          className="w-full p-2 mb-2 border rounded resize-none"
          style={{ height: "400px" }} 
        />
        <div className={`text-right text-sm text-gray-600`}>
          {CURRENT_DESCRIPTION_LENGTH}/{MIN_DESCRIPTION_LENGTH} characters
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className={`font-bold py-2 px-4 rounded text-white ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
            disabled={isButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDescriptionStep;
