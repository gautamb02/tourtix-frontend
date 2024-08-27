// ContactInfoStep.tsx
import React from 'react';
import { FormData } from './types';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInfoStep: React.FC<Props> = ({ formData, handleInputChange }) => (
  <div className="mb-4 flex">
    <div className="w-1/2 pr-4">
      <h2 className="text-xl font-bold mb-2">Contact Information</h2>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Business Address"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone Number"
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
    </div>
    <div className="w-1/2">
      <img src="https://placehold.co/400x300?text=Contact+Info" alt="Contact Info" className="w-full rounded-lg shadow-md" />
    </div>
  </div>
);

export default ContactInfoStep;