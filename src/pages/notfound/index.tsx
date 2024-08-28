import React from 'react';

const NotFoundIndex: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundIndex;