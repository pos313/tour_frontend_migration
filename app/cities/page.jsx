import React from 'react';
import CitiesPageClient from './CitiesPageClient';

async function getCities() {
  // In a real app, this would fetch from your API
  return [
    {
      id: 1,
      name: 'New York',
      slug: 'new-york',
      description: 'The Big Apple - a city that never sleeps.',
      image_url: '/placeholder-newyork.jpg'
    },
    {
      id: 2,
      name: 'London',
      slug: 'london',
      description: 'Historic city on the Thames with rich culture and architecture.',
      image_url: '/placeholder-london.jpg'
    },
    {
      id: 3,
      name: 'Tokyo',
      slug: 'tokyo',
      description: 'Ultra-modern metropolis with traditional roots.',
      image_url: '/placeholder-tokyo.jpg'
    }
  ];
}

export default async function CitiesPage() {
  const cities = await getCities();
  
  return <CitiesPageClient cities={cities} />;
}