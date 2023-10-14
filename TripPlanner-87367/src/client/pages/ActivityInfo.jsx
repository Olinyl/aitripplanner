import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getActivityInfo from '@wasp/queries/getActivityInfo';
import uploadActivityImage from '@wasp/actions/uploadActivityImage';

export function ActivityInfo() {
  const { activityId } = useParams();
  const { data: activity, isLoading, error } = useQuery(getActivityInfo, { activityId });
  const uploadImage = useAction(uploadActivityImage);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    uploadImage({ activityId, file });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>{activity.name}</h1>
      <p className='mb-4'>{activity.description}</p>
      <div className='mb-4'>
        <h2 className='text-lg font-bold mb-2'>Images:</h2>
        <input type='file' onChange={handleImageUpload} accept='image/*' />
      </div>
      <div>
        <h2 className='text-lg font-bold mb-2'>Reviews:</h2>
        <div>{activity.reviews}</div>
      </div>
    </div>
  );
}