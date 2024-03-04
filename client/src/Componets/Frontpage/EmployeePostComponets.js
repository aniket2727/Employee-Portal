import React from 'react';
import { FaUser } from 'react-icons/fa';

const EmployeePostComponets = () => {
  return (
    <div className='main-post bg-gray-100 p-4 rounded-md shadow-md mt-10'>
      <div className='flex items-center mb-4'>
        <div className='mr-2'>
          <FaUser className='w-8 h-8 text-blue-500' />
        </div>
        <h1 className='text-xl font-bold'>Aniket Kaadam</h1>
      </div>

      <div className='post-content'>
        <p className='text-gray-700'>
          The sun sets in a blaze of orange and pink hues over the tranquil lake.
          The curious cat explored the mysterious alley, weaving between the shadows.
          Laughter echoed through the air as friends gathered for a lively picnic.
          In the quiet of the night, the moon cast a silvery glow on the sleeping town.
          The aroma of freshly baked cookies wafted from the cozy kitchen.
          Adventure awaits around every corner for those with an open heart and curious spirit.
        </p>
      </div>

      <div className='mt-2'>
        <p className='text-gray-500 line-clamp-3'>
         read more...
        </p>
      </div>
    </div>
  );
};

export default EmployeePostComponets;
