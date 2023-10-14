import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createTrip from '@wasp/actions/createTrip';

export function NewTripPage() {
  const createTripFn = useAction(createTrip);
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [budget, setBudget] = useState(0);

  const handleCreateTrip = () => {
    createTripFn({ destination, travelDates, budget });
  };

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold mb-4'>Create a New Trip</h1>
      <div className='mb-4'>
        <label className='block'>Destination:</label>
        <input
          type='text'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className='border rounded px-2 py-1'
        />
      </div>
      <div className='mb-4'>
        <label className='block'>Travel Dates:</label>
        <input
          type='text'
          value={travelDates}
          onChange={(e) => setTravelDates(e.target.value)}
          className='border rounded px-2 py-1'
        />
      </div>
      <div className='mb-4'>
        <label className='block'>Budget:</label>
        <input
          type='number'
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
          className='border rounded px-2 py-1'
        />
      </div>
      <button
        onClick={handleCreateTrip}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Trip
      </button>
      <Link to='/' className='text-blue-500 underline'>Go Back</Link>
    </div>
  );
}