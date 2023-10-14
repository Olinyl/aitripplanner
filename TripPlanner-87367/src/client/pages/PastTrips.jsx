import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getTrips from '@wasp/queries/getTrips';

export function PastTrips() {
  const { data: trips, isLoading, error } = useQuery(getTrips);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {trips.map((trip) => (
        <div
          key={trip.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{trip.destination}</div>
          <div>{trip.travelDates}</div>
          <div>{trip.budget}</div>
          <Link
            to={`/itinerary/${trip.id}`} // Assuming there's an ItineraryPage
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
          >
            View Itinerary
          </Link>
        </div>
      ))}
    </div>
  );
}