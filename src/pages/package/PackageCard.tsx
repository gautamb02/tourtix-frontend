import React from 'react'
import { Package } from './types'

interface Props {
    packageData : Package,
    funcToSetUpdatePackage: (pkg: Package)=>void;
}

const PackageCard :React.FC<Props> = ({packageData,funcToSetUpdatePackage}) => {
  return (
    <div className=" rounded-lg p-4 my-2 border bg-white">
      <h2 className="text-xl font-bold">{packageData.name}</h2>
      <p className="text-gray-600 mt-2">{packageData.description}</p>
      <div className="mt-4">
        <p><strong>Adult Price:</strong> &#8377; {packageData.adultPrice}</p>
        <p><strong>Child Price:</strong> &#8377; {packageData.childPrice}</p>
      </div>
      <div className="mt-4">
        {packageData.activities.map((activity) => (
          <div key={activity._id} className="mb-4">
            <h3 className="text-lg font-semibold">{activity.name}</h3>
            <p className="text-gray-600">{activity.description}</p>
            {
            /* {activity.hasTimeSlots && activity.availableTimeSlots.length > 0 ? (
              <div className="mt-2">
                <h4 className="text-md font-medium">Available Time Slots:</h4>
                <ul className="list-disc list-inside">
                  {activity.availableTimeSlots.map((slot) => (
                    <li key={slot._id} className="ml-4">
                      <span>{slot.startTime} - {slot.endTime}</span>
                      {slot.hasSeatLimit && (
                        <span className="text-gray-500"> ({slot.availableSeats} seats available)</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-500 mt-2">No available time slots</p>
            )} */
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default PackageCard
