import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getItinerary from '@wasp/queries/getItinerary';
import updateItinerary from '@wasp/actions/updateItinerary';

export function Itinerary() {
  const { tripId } = useParams();
  const { data: itinerary, isLoading, error } = useQuery(getItinerary, { tripId });
  const updateItineraryFn = useAction(updateItineraryAction);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleUpdateItinerary = (activities) => {
    updateItineraryFn({ tripId, activities });
  };

  return (
    <div className='p-4'>
      {itinerary.activities.map((activity) => (
        <div key={activity.id} className='mb-4'>
          <h3 className='text-lg font-bold'>{activity.name}</h3>
          <p>{activity.description}</p>
          <div className='flex gap-x-4 mt-2'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Accept</button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}