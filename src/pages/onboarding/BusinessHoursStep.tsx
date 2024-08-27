// BusinessHoursStep.tsx
import React from 'react';

const BusinessHoursStep: React.FC = () => (
  <div className="mb-4 flex">
    <div className="w-1/2 pr-4">
      <h2 className="text-xl font-bold mb-2">Business Hours</h2>
      <p className="text-sm text-gray-600 mb-2">Please set your business hours for each day of the week.</p>
      {/* Implement a more complex hours input here */}
    </div>
    <div className="w-1/2">
      <img src="https://placehold.co/400x300?text=Business+Hours" alt="Business Hours" className="w-full rounded-lg shadow-md" />
    </div>
  </div>
);

export default BusinessHoursStep;