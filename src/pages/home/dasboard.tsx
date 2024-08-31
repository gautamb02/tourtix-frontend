import React, { useState, ChangeEvent } from "react";

interface BusinessHours {
  [key: string]: { open: string; close: string };
}

interface MediaFile {
  type: "photo" | "video";
  file: File;
  preview: string;
}

interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  phoneNumber: string;
  websiteUrl: string;
  businessHours: BusinessHours;
  description: string;
  media: MediaFile[];
}

const initialBusinessInfo: BusinessInfo = {
  name: "",
  category: "",
  address: "",
  phoneNumber: "",
  websiteUrl: "",
  businessHours: {
    monday: { open: "", close: "" },
    tuesday: { open: "", close: "" },
    wednesday: { open: "", close: "" },
    thursday: { open: "", close: "" },
    friday: { open: "", close: "" },
    saturday: { open: "", close: "" },
    sunday: { open: "", close: "" },
  },
  description: "",
  media: [],
};

const Dashboard: React.FC = () => {
  const [businessInfo, setBusinessInfo] =
    useState<BusinessInfo>(initialBusinessInfo);
  const [editing, setEditing] = useState<string | null>(null);

  const handleInputChange = (field: keyof BusinessInfo, value: string) => {
    setBusinessInfo({ ...businessInfo, [field]: value });
  };

  const handleHoursChange = (
    day: string,
    type: "open" | "close",
    value: string
  ) => {
    setBusinessInfo({
      ...businessInfo,
      businessHours: {
        ...businessInfo.businessHours,
        [day]: { ...businessInfo.businessHours[day], [type]: value },
      },
    });
  };

  const handleEdit = (field: string) => {
    setEditing(field);
  };

  const handleSave = () => {
    setEditing(null);
    // Here you would typically send an API request to update the data
    console.log("Saving data:", businessInfo);
  };

  const handleDelete = (field: keyof BusinessInfo) => {
    if (field === "media") {
      setBusinessInfo({ ...businessInfo, media: [] });
    } else {
      setBusinessInfo({ ...businessInfo, [field]: initialBusinessInfo[field] });
    }
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
    type: "photo" | "video"
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles: MediaFile[] = Array.from(files).map((file) => ({
        type,
        file,
        preview: URL.createObjectURL(file),
      }));
      setBusinessInfo({
        ...businessInfo,
        media: [...businessInfo.media, ...newFiles],
      });
    }
  };

  const handleRemoveMedia = (index: number) => {
    const newMedia = [...businessInfo.media];
    URL.revokeObjectURL(newMedia[index].preview);
    newMedia.splice(index, 1);
    setBusinessInfo({ ...businessInfo, media: newMedia });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center   font-bold mb-4">
        Business Dashboard
      </h1>

      {/* Media Upload Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Photos and Videos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {businessInfo.media.map((media, index) => (
            <div key={`media-${index}`} className="relative">
              {media.type === "photo" ? (
                <img
                  src={media.preview}
                  alt={`Business`}
                  className="w-full h-32 object-cover rounded"
                />
              ) : (
                <video
                  src={media.preview}
                  className="w-full h-32 object-cover rounded"
                />
              )}
              <button
                onClick={() => handleRemoveMedia(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center m-1"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* upload image / video   */}
      <div className="mt-5 justify-center  flex space-x-4">
        <div>
          <label
            htmlFor="photo-upload"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Photo
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "photo")}
            className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="video-upload"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Video
          </label>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            onChange={(e) => handleFileUpload(e, "video")}
            className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
          />
        </div>
      </div>

      {/* Business Information Section */}
      <div className="bg-white shadow rounded-lg mb-4 p-4">
        <h2 className="text-xl font-semibold mb-2">Business Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["name", "category", "address", "phoneNumber", "websiteUrl"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {editing === field ? (
                  <input
                    type="text"
                    value={businessInfo[field as keyof BusinessInfo] as string}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(
                        field as keyof BusinessInfo,
                        e.target.value
                      )
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                ) : (
                  <p className="mt-1">
                    {businessInfo[field as keyof BusinessInfo] as string}
                  </p>
                )}
                <div className="mt-2">
                  {editing === field ? (
                    <button
                      onClick={handleSave}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(field)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(field as keyof BusinessInfo)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Business Hours Section */}
      <div className="bg-white shadow rounded-lg mb-4 p-4">
        <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(businessInfo.businessHours).map(([day, hours]) => (
            <div key={day}>
              <label className="block text-sm font-medium text-gray-700">
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
              <div className="flex space-x-2 mt-1">
                <input
                  type="time"
                  value={hours.open}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleHoursChange(day, "open", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <input
                  type="time"
                  value={hours.close}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleHoursChange(day, "close", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Description Section */}
      <div className="bg-white shadow rounded-lg mb-4 p-4">
        <h2 className="text-xl font-semibold mb-2">Business Description</h2>
        {editing === "description" ? (
          <textarea
            value={businessInfo.description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("description", e.target.value)
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={4}
          />
        ) : (
          <p className="mt-1">{businessInfo.description}</p>
        )}
        <div className="mt-2">
          {editing === "description" ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit("description")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => handleDelete("description")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
