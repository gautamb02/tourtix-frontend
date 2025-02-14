import React, { useState } from "react";
import { days, Hours } from "./types";
import BackButton from "../../components/onboarding/BackButton";
import NextButton from "../../components/onboarding/NextButton";

interface Props {
  hours: Record<string, Hours>;
  handleHoursChange: (hours: Record<string, Hours>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BusinessHoursStep: React.FC<Props> = ({
  hours,
  handleHoursChange,
  onNext,
  onBack,
}) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleOpenChange = (day: string, isOpen: boolean) => {
    handleHoursChange({
      ...hours,
      [day]: { ...hours[day], open: isOpen },
    });
    validateHours({ ...hours, [day]: { ...hours[day], open: isOpen } });
  };

  const handleTimeChange = (
    day: string,
    start_time: string,
    end_time: string
  ) => {
    handleHoursChange({
      ...hours,
      [day]: {
        ...hours[day],
        hours: { start_time, end_time },
      },
    });
    validateHours({ ...hours, [day]: { ...hours[day], hours: { start_time, end_time } } });
  };

  const validateHours = (updatedHours: Record<string, Hours>) => {
    let isDisabled = false;
    for (const day of days) {
      const dayHours = updatedHours[day] || { open: false };
      if (dayHours.open) {
        const { start_time, end_time } = dayHours.hours || {};
        if (!start_time || !end_time || end_time <= start_time) {
          isDisabled = true;
          break;
        }
      }
    }
    setButtonDisabled(isDisabled);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="hidden md:w-1/2 md:block">
        <img
          src="/whours.svg"
          alt="Business Hours"
          className="w-5/6 mx-auto"
        />
      </div>
      <div className="mb-4 w-full md:w-1/2 p-4">
        <h2 className="text-xl text-center mb-2 font-bold mb-2">Business Hours</h2>

        {days.map((day) => {
          const dayHours = hours[day] || { open: false };
          return (
            <div key={day} className="flex mb-4">
              <label
                className={`w-1/4 flex items-center ${
                  !dayHours.open ? "text-gray-400" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={dayHours.open}
                  onChange={(e) => handleOpenChange(day, e.target.checked)}
                  className="mr-2"
                />
                {day}
              </label>
              <div className="w-3/4">
                {dayHours.open && (
                  <div className="flex items-center mb-2">
                    <input
                      type="time"
                      value={dayHours.hours?.start_time || ""}
                      onChange={(e) =>
                        handleTimeChange(
                          day,
                          e.target.value,
                          dayHours.hours?.end_time || ""
                        )
                      }
                      className="mr-2 p-2 border rounded"
                    />
                    <span className="mr-2">-</span>
                    <input
                      type="time"
                      value={dayHours.hours?.end_time || ""}
                      onChange={(e) =>
                        handleTimeChange(
                          day,
                          dayHours.hours?.start_time || "",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="flex justify-between mt-4">
          <BackButton onBack={onBack} />
          <NextButton isButtonDisabled={isButtonDisabled} onNext={onNext} />
        </div>
      </div>
    </div>
  );
};

export default BusinessHoursStep;