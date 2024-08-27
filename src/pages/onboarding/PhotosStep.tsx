// PhotosStep.tsx
import React from 'react';

const PhotosStep: React.FC = () => (
  <div className="mb-4 flex">
    <div className="w-1/2 pr-4">
      <h2 className="text-xl font-bold mb-2">Photos</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        className="w-full p-2 mb-2 border rounded"
      />
      <p className="text-sm text-gray-600">Upload photos of your business to attract customers.</p>
    </div>
    <div className="w-1/2">
      <img src="https://placehold.co/400x300?text=Upload+Photos" alt="Upload Photos" className="w-full rounded-lg shadow-md" />
    </div>
  </div>
);

export default PhotosStep;