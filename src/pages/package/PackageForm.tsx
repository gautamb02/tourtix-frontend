import React, { useState } from 'react';
import { ActivityState, initPackageFormData, PackageFormData } from './types';
import { getLocalBusinessId, getToken } from '../../utils/localStorage';
import { ADD_PKG_API } from '../../../constants';

interface Props {
  activitiesServer: ActivityState[];
}

const PackageForm: React.FC<Props> = ({ activitiesServer }) => {
  const [formData, setFormData] = useState<PackageFormData>({
    businessId: '',
    name: '',
    activities: [],
    adultPrice: 0,
    childPrice: 0,
    description: '',
    isActive: true,
  });

  // Handle changes to form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      if (name === 'isActive') {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        setFormData({
          ...formData,
          activities: checked
            ? [...formData.activities, value]
            : formData.activities.filter(activityId => activityId !== value),
        });
      }
    } else {
      let fieldValue: string | number | boolean = value;

      if (type === 'number') {
        fieldValue = Number(value);
      }

      setFormData({
        ...formData,
        [name]: fieldValue,
      });
    }
  };

  // Handle clicks on div elements to toggle the checkbox
  const handleDivClick = (activityId: string) => {
    const isChecked = formData.activities.includes(activityId);
    setFormData({
      ...formData,
      activities: isChecked
        ? formData.activities.filter(id => id !== activityId)
        : [...formData.activities, activityId],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!(formData.activities.length>0)){
      alert("kindly select one or more activities")
      return;
    }
    setFormData({ ...formData, businessId: getLocalBusinessId() });


    // console.log(formData);

    
    try {
      const response = await fetch(ADD_PKG_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Activity added successfully!");
        setFormData(initPackageFormData)
      } else {
        alert("Failed to add activity.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Package Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Package Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {activitiesServer.map((act)=>{
          return (
            <div
            key={act._id}
            className="flex bg-gray-100 p-2 rounded-md items-center cursor-pointer"
            onClick={() => handleDivClick(act._id)}
          >
            <input
              type="checkbox"
              name="activity"
              value={act._id}
              checked={formData.activities.includes(act._id)}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              id={act._id}
            />
            <label htmlFor={act._id} className="ml-2 block text-sm font-medium text-gray-700">
              {act.name}
            </label>
          </div>
          )
        })}
      </div>

      <div>
        <label htmlFor="adultPrice" className="block text-sm font-medium text-gray-700">
          Adult Price
        </label>
        <input
          type="number"
          name="adultPrice"
          id="adultPrice"
          value={formData.adultPrice}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="childPrice" className="block text-sm font-medium text-gray-700">
          Child Price
        </label>
        <input
          type="number"
          name="childPrice"
          id="childPrice"
          value={formData.childPrice}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          checked={formData.isActive}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="isActive" className="ml-2 block text-sm font-medium text-gray-700">
          Active
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700"
      >
        Save Package
      </button>
    </form>
  );
};

export default PackageForm;
