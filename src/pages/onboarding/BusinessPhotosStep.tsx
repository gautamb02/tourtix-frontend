import React, { useState } from 'react';
import BackButton from '../../components/onboarding/BackButton';
import SubmitButton from '../../components/onboarding/SubmitButton';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase.config';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating random unique strings

interface Props {
  photos: string[];
  handlePhotoChange: (photos: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessPhotosStep: React.FC<Props> = ({ photos, handlePhotoChange, onNext, onBack }) => {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      handleMultipleUploads(fileArray);
    }
  };

  const generateUniqueFileName = (originalName: string) => {
    const extension = originalName.split('.').pop();
    const uniqueName = `${uuidv4()}.${extension}`;
    return uniqueName;
  };

  const handleMultipleUploads = async (files: File[]) => {
    setUploading(true);
    try {
      const uploadPromises = files.map(async (file) => {
        const uniqueFileName = generateUniqueFileName(file.name);
        const storageRef = ref(storage, `images/${uniqueFileName}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
      });

      const urls = await Promise.all(uploadPromises);
      handlePhotoChange([...photos, ...urls]);
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files);
  };

  const handleRemovePhoto = (photo: string) => {
    handlePhotoChange(photos.filter(p => p !== photo));
  };

  const isButtonDisabled = photos.length === 0 || uploading;

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex items-center justify-center">
        <img src="/photos.png" alt="Photos" className="w-5/6 mx-auto" />
      </div>
      <div className="p-4 w-1/2">
        <h2 className="text-xl font-bold mb-4">Business Photos</h2>
        <div className="mb-4 rounded p-4">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${dragging ? 'bg-gray-100' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileInputChange}
            />
          </label>
          <div className="flex flex-wrap mt-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative w-1/3 h-36 p-1">
                <img
                  src={photo}
                  alt={`Business photo ${index + 1}`}
                  className="w-full h-full object-cover border rounded"
                />
                <button
                  onClick={() => handleRemovePhoto(photo)}
                  className="absolute top-1 right-1 bg-red-600 text-white p-1 m-2 rounded-full hover:bg-red-800 focus:outline-none"
                  aria-label="Remove photo"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <BackButton onBack={onBack} />
          <SubmitButton isButtonDisabled={isButtonDisabled} onNext={onNext} />
        </div>
      </div>
    </div>
  );
};

export default BusinessPhotosStep;
