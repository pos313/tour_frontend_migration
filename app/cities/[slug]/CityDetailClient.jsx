import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CityDetailClient = ({ city }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{city.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={city.image_url || '/placeholder-city.jpg'} 
            alt={city.name} 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>About {city.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{city.description}</p>
              <div className="mt-6">
                <Link href={`/chat/${city.slug}`}>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Chat about {city.name}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CityDetailClient;