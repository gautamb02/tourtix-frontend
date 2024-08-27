import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const BusinessGeoLocationStep: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null); // Ref to handle marker

  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([51.505, -0.09], 13); // Initialize map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Optionally add a marker
      markerRef.current = L.marker([51.505, -0.09]).addTo(mapInstance.current);

      locateMe();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstance.current && coordinates) {
      const { lat, lng } = coordinates;
      mapInstance.current.setView([lat, lng], 13); // Update map view

      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]); // Move existing marker
      } else {
        markerRef.current = L.marker([lat, lng]).addTo(mapInstance.current); // Add new marker if none exists
      }
    }
  }, [coordinates]);

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setCoordinates({ lat, lng });
  };

  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.on("click", handleMapClick);

      return () => {
        mapInstance.current?.off("click", handleMapClick);
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <img src="/location.png" className="w-5/6 mx-auto" alt="Contact" />
      </div>
      <div className="w-1/2 h-full">
        <div
          ref={mapRef} // Attach the ref to the map container
          style={{ height: "500px", width: "100%" }} // Ensure the map container has size
        ></div>

        <div className="flex justify-between">
          <div className="mt-4">
            {coordinates && (
              <>
                {" "}
                <h3 className="text-lg font-semibold">Selected Location:</h3>
                <p>Latitude: {coordinates.lat.toFixed(6)}</p>
                <p>Longitude: {coordinates.lng.toFixed(6)}</p>
              </>
            )}
          </div>
          <div>
            <button 
              onClick={locateMe}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Locate Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGeoLocationStep;
