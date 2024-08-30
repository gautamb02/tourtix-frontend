import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_BUSINESS_API, LOCAL_BUSINESS_DATA } from '../../../constants';
import { setLocalBusinessData, getLocalBusinessData, getToken } from '../../utils/localStorage';
import { BusinessData } from './types';


const Profile: React.FC = () => {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        // First, try to get data from local storage
        const storedData = getLocalBusinessData()
        if (storedData) {
          setBusinessData(JSON.parse(storedData));
          setLoading(false);
          return;
        }

        // If no stored data, fetch from API
        const response = await axios.get<{ success: number; business: BusinessData }>(GET_BUSINESS_API, {
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${getToken()}`,
          },
        });

        if (response.data.success === 1) {
          const fetchedData = response.data.business;
          setBusinessData(fetchedData);
          setLocalBusinessData(JSON.stringify(fetchedData))
        } else {
          setError('Failed to fetch business data');
        }
      } catch (err) {
        setError('An error occurred while fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!businessData) return <div className="text-center py-10">No business data available</div>;

  const { businessName, category, address, city, state, country, phone, email, website, description, hours, photos, geolocation } = businessData;

  return (
    <div className="container mx-auto p-6">
      <header className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold">{businessName}</h1>
        <p className="text-lg italic">{category}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
          <div className="flex items-center mb-3">
            <i className='bx bx-map mr-2 text-gray-600'></i>
            <p><strong>Address:</strong> {`${address}, ${city}, ${state}, ${country}`}</p>
          </div>
          <div className="flex items-center mb-3">
            <i className='bx bx-phone mr-2 text-gray-600'></i>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
          <div className="flex items-center mb-3">
            <i className='bx bx-envelope mr-2 text-gray-600'></i>
            <p><strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a></p>
          </div>
          <div className="flex items-center mb-3">
            <i className='bx bx-globe mr-2 text-gray-600'></i>
            <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a></p>
          </div>
          <div className="flex items-center mb-3">
            <i className='bx bx-map-pin mr-2 text-gray-600'></i>
            <p><strong>Geolocation:</strong> Lat: {geolocation.lat}, Lng: {geolocation.lng}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <ul className="list-disc pl-5">
            {Object.entries(hours).map(([day, schedule]) => (
              <li key={day} className="flex justify-between mb-2">
                <span className="font-medium">{day}:</span>
                <span className={schedule.open ? "text-green-600" : "text-red-600"}>
                  {schedule.open 
                    ? `${schedule.hours?.start_time} - ${schedule.hours?.end_time}`
                    : 'Closed'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p>{description}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Business Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img 
                src={photo} 
                alt={`Business photo ${index + 1}`} 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-4 mt-6 border-t">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;