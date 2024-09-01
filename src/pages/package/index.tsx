import React, { useEffect, useState } from "react";
import PackageModal from "./PackageModal";
import PackageForm from "./PackageForm";
import { getLocalBusinessId, getToken } from "../../utils/localStorage";
import { GET_ACTIVITIES_API } from "../../../constants";
import { ActivityState, Package } from "./types";
import GetPackages from "./GetPackages";

const PackageIndex: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [activities, setActivities] = useState<ActivityState[]>([] );
  const [loading, setLoading] = useState(false);

  const [packageToUpdate, setPackageToUpdate] = useState<Package|null>(null);
  const funcToSetUpdatePackage =( pkg : Package)=>{
    setPackageToUpdate(pkg)
    openModal();
  }
  
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const businessId = getLocalBusinessId();
        if (!businessId) {
          throw new Error("Business ID is missing.");
        }

        const response = await fetch(GET_ACTIVITIES_API, {
          method: "POST",
          body: JSON.stringify({ businessId }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data: ActivityState[] = await response.json();
        setActivities(data);
      } catch (err: any) {
        // setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="w-5/6 mx-auto">
      <div className="flex m-4 justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Packages</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Create Package
        </button>
        <PackageModal isOpen={isModalOpen} onClose={closeModal}>
          <PackageForm activitiesServer={activities}  />
        </PackageModal>
      </div>
      <GetPackages funcToSetUpdatePackage={funcToSetUpdatePackage} />
    </div>
  );
};

export default PackageIndex;
