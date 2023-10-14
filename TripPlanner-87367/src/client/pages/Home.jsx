import React from 'react';
import { Link } from 'react-router-dom';


export function HomePage() {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to TripPlanner!</h1>
      <p className='mb-4'>Start planning your next adventure or explore your past trips.</p>
      <div className='flex gap-4'>
        <Link to='/newtrip' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Start a New Trip</Link>
        <Link to='/pasttrips' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View Past Trips</Link>
        <Link to='/edit-profile' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit Profile</Link>
      </div>
    </div>
  );
}