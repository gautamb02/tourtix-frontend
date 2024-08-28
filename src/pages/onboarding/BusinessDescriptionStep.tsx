import React from "react";
import { FormData } from "./types";
import NextButton from "../../components/onboarding/NextButton";
import BackButton from "../../components/onboarding/BackButton";

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
  const MIN_DESCRIPTION_LENGTH = 750;
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
          className="w-full p-5 mb-2 text-justify border focus:border-none rounded resize-none"
          style={{ height: "350px" }} 
        />
        <div className={`text-right text-sm text-gray-600`}>
          {CURRENT_DESCRIPTION_LENGTH}/{MIN_DESCRIPTION_LENGTH}
        </div>
        <div className="flex justify-between mt-4">
         <BackButton onBack={onBack}/>
          <NextButton isButtonDisabled={isButtonDisabled} onNext={onNext}/>
        </div>
      </div>
    </div>
  );
};

export default BusinessDescriptionStep;
