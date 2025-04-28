import React from 'react';

const CityPlaceholder = () => {
  return (
    <div className="container mx-auto py-8 animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="mt-6">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPlaceholder;