import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUserData } from '../../utils/localStorage';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage
    clearUserData();
    
    // Optionally, handle other logout-related tasks here

    // Redirect to the home page or login page
    navigate('/');
  };

  return (
    <button 
      onClick={handleLogout} 
      className="text-white bg-red-500 rounded-lg px-2 py-2 hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;