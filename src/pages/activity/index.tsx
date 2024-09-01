import React, { useState } from "react";
import TicketingSystem from "./TicketingSystem";
import AddActivityForm from "./AddActivityForm";
import GetActivities from "./GetActivities";

const ActivityIndex: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex m-4 justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Activitiy</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add Activity
        </button>
        <TicketingSystem isOpen={isModalOpen} onClose={closeModal}>
          <AddActivityForm />
        </TicketingSystem>
      </div>
      <GetActivities />
    </div>
  );
};

export default ActivityIndex;
