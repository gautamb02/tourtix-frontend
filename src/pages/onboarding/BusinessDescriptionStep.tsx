// BusinessDescriptionStep.tsx
import React from 'react';
import { FormData } from './types';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const BusinessDescriptionStep: React.FC<Props> = ({ formData, handleInputChange }) => (
  <div className="mb-4 flex">
    <div className="w-1/2 pr-4">
      <h2 className="text-xl font-bold mb-2">Business Description</h2>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Describe your business..."
        className="w-full p-2 mb-2 border rounded h-32"
      />
    </div>
    <div className="w-1/2">
      <img src="https://placehold.co/400x300?text=Business+Description" alt="Business Description" className="w-full rounded-lg shadow-md" />
    </div>
  </div>
);

export default BusinessDescriptionStep;