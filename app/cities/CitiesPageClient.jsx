import React from 'react';
import Link from 'next/link';

const CitiesPageClient = ({ cities }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Cities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map(city => (
          <Link 
            href={`/cities/${city.slug}`} 
            key={city.id}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={city.image_url || '/placeholder-city.jpg'} 
              alt={city.name} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{city.name}</h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{city.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitiesPageClient;