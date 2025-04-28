import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MessageChatContent = ({ city }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-4">
        <Link href={`/cities/${city.slug}`} className="text-blue-500 hover:underline">
          ← Back to {city.name}
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">Chat about {city.name}</h1>
      <Card>
        <CardContent className="p-6">
          {/* Chat interface would go here */}
          <p className="mb-4">Chat functionality for {city.name} will be implemented here.</p>
          <div className="mt-6">
            <Button variant="outline">Send Message</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageChatContent;