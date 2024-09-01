import React, { useEffect, useState } from "react";
import { Package } from "./types";
import { getLocalBusinessId, getToken } from "../../utils/localStorage";
import { GET_PKGS_API } from "../../../constants";
import PackageCard from "./PackageCard";

const GetPackages: React.FC = () => {
  // Component implementation here

  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(
          `${GET_PKGS_API}/${getLocalBusinessId()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`,
            },
          }
        );
        const res = await response.json();

        if (response.ok) {
          //   alert("Activity added successfully!");
          setPackages(res);
        } else {
          //   alert("Failed to add activity.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPackages();
  });

  return (
    <div>
      {/* Render activitiesServer and packages */}
      {packages.map((packageData) => {
        return <PackageCard packageData={packageData} />;
      })}
    </div>
  );
};

export default GetPackages;
