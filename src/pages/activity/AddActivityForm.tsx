import React, { useState } from "react";
import { ActivityFormState, initialState, initialTimeSlot } from "./types";
import { ADD_ACTIVITY_API } from "../../../constants";
import { getToken } from "../../utils/localStorage";

const AddActivityForm = () => {
  const [activityFormData, setActivityFormData] =
    useState<ActivityFormState>(initialState);
  const [openSlotIndex, setOpenSlotIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setActivityFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));

    console.log(activityFormData);
  };

  const handleTimeSlotChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setActivityFormData((prevState) => {
      const updatedTimeSlots = [...prevState.availableTimeSlots];
      updatedTimeSlots[index] = {
        ...updatedTimeSlots[index],
        [name]: inputValue,
      };
      return { ...prevState, availableTimeSlots: updatedTimeSlots };
    });
  };

  const addTimeSlot = () => {
    setActivityFormData((prevState) => ({
      ...prevState,
      availableTimeSlots: [...prevState.availableTimeSlots, initialTimeSlot],
    }));
    setOpenSlotIndex(activityFormData.availableTimeSlots.length); // Open the new slot
  };

  const removeTimeSlot = (index: number) => {
    setActivityFormData((prevState) => {
      const updatedTimeSlots = prevState.availableTimeSlots.filter(
        (_, i) => i !== index
      );
      return { ...prevState, availableTimeSlots: updatedTimeSlots };
    });
    setOpenSlotIndex(null);
  };

  const toggleSlot = (index: number) => {
    setOpenSlotIndex(openSlotIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (activityFormData.hasTimeSlots) {
      if (!(activityFormData.availableTimeSlots.length > 0)) {
        alert("add time slot");
        return;
      }
    }

    try {
      const response = await fetch(ADD_ACTIVITY_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(activityFormData),
      });

      if (response.ok) {
        alert("Activity added successfully!");
        setActivityFormData(initialState); // Reset form
      } else {
        alert("Failed to add activity.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 space-y-6 bg-white border rounded-md"
    >
      <div>
        <label className="block mb-2 text-gray-700">Activity Name</label>
        <input
          type="text"
          name="name"
          value={activityFormData.name}
          onChange={handleInputChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div>
        <label className="block mb-2 text-gray-700">Description</label>
        <textarea
          name="description"
          required
          value={activityFormData.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="flex justify-between w-full items-center">
        <div>
          <input
            type="checkbox"
            name="hasTimeSlots"
            checked={activityFormData.hasTimeSlots}
            onChange={handleInputChange}
            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="text-gray-700">Has Time Slots?</label>
        </div>

        {activityFormData.hasTimeSlots && (
          <button
            type="button"
            onClick={addTimeSlot}
            className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center"
          >
            <i className="bx mr-1 bx-plus"></i> Add Time Slot
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activityFormData.hasTimeSlots &&
          activityFormData.availableTimeSlots.map((slot, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-gray-50 rounded-md p-4 mb-2"
            >
              <div
                className="flex justify-between items-center mb-2 cursor-pointer"
                onClick={() => toggleSlot(index)}
              >
                <div className="text-gray-900">
                  {slot.startTime || "Start Time"} -{" "}
                  {slot.endTime || "End Time"}
                </div>
                {openSlotIndex === index ? (
                  <i className="bx bx-chevron-up"></i>
                ) : (
                  <i className="bx bx-chevron-down"></i>
                )}
              </div>
              {openSlotIndex === index && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-gray-600">
                      Start Time
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      value={slot.startTime}
                      onChange={(e) => handleTimeSlotChange(index, e)}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-gray-600">End Time</label>
                    <input
                      type="time"
                      name="endTime"
                      value={slot.endTime}
                      onChange={(e) => handleTimeSlotChange(index, e)}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="hasSeatLimit"
                      checked={slot.hasSeatLimit}
                      onChange={(e) => handleTimeSlotChange(index, e)}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="text-gray-700">Has Seat Limit?</label>
                  </div>

                  {slot.hasSeatLimit && (
                    <div>
                      <label className="block mb-1 text-gray-600">
                        Available Seats
                      </label>
                      <input
                        type="number"
                        name="availableSeats"
                        value={slot.availableSeats ?? ""}
                        onChange={(e) => handleTimeSlotChange(index, e)}
                        required={slot.hasSeatLimit}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => removeTimeSlot(index)}
                    className="text-white bg-red-500 p-2 rounded-sm hover:font-semibold hover:bg-red-600 flex items-center mt-2"
                  >
                    <i className="bx bxs-trash-alt mr-1"></i> Remove
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default AddActivityForm;
