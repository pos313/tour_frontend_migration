import React from 'react';
import MessageChatContent from '@/components/chat/MessageChatContent';

async function getCityByCity(citySlug) {
  // In a real app, this would fetch from your API
  const cities = [
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
  
  return cities.find(city => city.slug === citySlug) || {
    id: 0,
    name: 'Unknown City',
    slug: citySlug,
    description: 'Information not available for this city.',
    image_url: '/placeholder-city.jpg'
  };
}

export default async function ChatPage({ params }) {
  const city = await getCityByCity(params.city);
  
  return <MessageChatContent city={city} />;
}