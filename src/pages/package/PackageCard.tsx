import React from "react";
import { Package } from "./types";
import { getToken } from "../../utils/localStorage";
import { DELETE_PKG_API } from "../../../constants";

interface Props {
  packageData: Package;
  funcToSetUpdatePackage: (pkg: Package) => void;
  fetchPackages : ()=>void;
}

const PackageCard: React.FC<Props> = ({
  packageData,
  funcToSetUpdatePackage, fetchPackages
}) => {
  const deletePackage = async (pkg_id: string) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      try {
        const response = await fetch(`${DELETE_PKG_API}/${pkg_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`, // Assuming you use JWT for authentication
          },
        });

        if (response.ok) {
          alert("Package deleted successfully!");
          fetchPackages();
          // refreshPackages(); // Call the function to refresh the list of packages
        } else {
          alert("Failed to delete package.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while trying to delete the package.");
      }
    }
  };

  return (
    <div className="rounded-lg p-4 my-2 border bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <h2 className="text-xl font-bold">{packageData.name}</h2>
          <span
            className={`font-medium border-green-800 px-3 py-1 rounded-3xl ${
              packageData.isActive
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-600"
            }`}
          >
            &#x2022; {packageData.isActive ? "Available" : "Not Available"}
          </span>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => funcToSetUpdatePackage(packageData)}
            className="bg-yellow-400 hover:bg-yellow-500  rounded-md px-4 py-2 flex items-center justify-center"
          >
            <i className="bx text-2xl text-white bxs-pencil"></i>
          </button>
          <button
            onClick={() => deletePackage(packageData._id)}
            className="bg-red-500 hover:bg-red-600  rounded-md px-4 py-2 flex items-center justify-center"
          >
            <i className="bx text-2xl text-white bxs-trash"></i>
          </button>
        </div>
      </div>
      <p className="text-gray-600 mt-2">{packageData.description}</p>
      <div className="mt-4">
        <p>
          <strong>Adult Price:</strong> &#8377; {packageData.adultPrice}
        </p>
        <p>
          <strong>Child Price:</strong> &#8377; {packageData.childPrice}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {packageData.activities.map((activity) => (
          <div
            key={activity._id}
            className=" bg-slate-100 p-2 border rounded-md"
          >
            <h3 className="text-lg font-semibold">{activity.name}</h3>
            <p className="text-gray-600">
              {activity.description?.slice(0, 20)}
            </p>
            {/* Uncomment if time slots functionality is needed */}
            {/* {activity.hasTimeSlots && activity.availableTimeSlots.length > 0 ? (
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
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
