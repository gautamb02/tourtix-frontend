import React from 'react';
import { ActivityFormState } from './types';


interface ActivityDisplayProps {
  activity: ActivityFormState;
}

const ActivityDisplay: React.FC<ActivityDisplayProps> = ({ activity }) => {
  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg border m-4 shadow-sm">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{activity.name}</h1>
        {activity.description && (
          <p className="mt-2 text-gray-600">{activity.description}</p>
        )}
      </div>

      {(activity.hasTimeSlots && activity.availableTimeSlots.length> 0) && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Time Slots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
            {activity.availableTimeSlots.map((slot, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {slot.startTime} - {slot.endTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    {slot.hasSeatLimit ? (
                      slot.availableSeats !== undefined ? (
                        `Seats Available: ${slot.availableSeats}`
                      ) : (
                        'Seats Available: Limited'
                      )
                    ) : (
                      'No seat limit'
                    )}
                  </p>
                </div>
                <div>
                  {/* {slot.hasSeatLimit && slot.availableSeats !== undefined && slot.availableSeats > 0 ? (
                    <span className="bg-green-100 text-green-800 text-sm font-semibold py-1 px-2 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-sm font-semibold py-1 px-2 rounded-full">
                      Fully Booked
                    </span>
                  )} */}
                </div>
              </div>
            ))}
          </div>
           
        </div>
      )}
    </div>
  );
};

export default ActivityDisplay;
