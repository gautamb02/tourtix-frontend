// BusinessInfoStep.tsx
import React from 'react';
import { FormData } from './types';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BusinessInfoStep: React.FC<Props> = ({ formData, handleInputChange }) => (
  <div className="mb-4 flex">
    <div className="w-1/2 pr-4">
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
    </div>
    <div className="w-1/2">
      <img src="https://placehold.co/400x300?text=Business+Info" alt="Business Info" className="w-full rounded-lg shadow-md" />
    </div>
  </div>
);

export default BusinessInfoStep;