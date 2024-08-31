import React, {  useEffect, useState } from "react";
import { GET_ACTIVITIES_API } from "../../../constants";
import { getLocalBusinessId, getToken } from "../../utils/localStorage";
import { ActivityFormState } from "./types";
import ActivityDisplay from "./ActivityDisplay";

const GetActivities: React.FC = () => {
  const [activities, setActivities] = useState<ActivityFormState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | any>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const businessId = getLocalBusinessId();
        if (!businessId) {
          throw new Error("Business ID is missing.");
        }

        const response = await fetch(GET_ACTIVITIES_API, {
          method: "POST",
          body : JSON.stringify({businessId}),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },

        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data: ActivityFormState[] = await response.json();
        setActivities(data);
      } catch (err :any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <p>Loading activities...</p>;
  }

  if (error) {
    return <p>Error loading activities: {error}</p>;
  }

  return (
    <div className="my-8 ">
      {activities.length > 0 ? (
        activities.map((activity) => (
          <ActivityDisplay activity={activity}/>
        ))
      ) : (
        <p>No activities found.</p>
      )}
    </div>
  );
};

export default GetActivities;
