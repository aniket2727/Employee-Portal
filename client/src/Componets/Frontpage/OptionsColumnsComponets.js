import React from 'react';


const OptionsColumnsComponets = () => {
  return (
    <div className='mt-5'>
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl'>
          Aniket Kadam
        </h1>
      </div>

      <div className='mt-5 space-y-2'>
        <div className='flex items-center rounded-md bg-blue-200 p-3 cursor-pointer'>
          <span className='mr-2'>🚀</span> Projects
        </div>
        <div className='flex items-center rounded-md bg-green-200 p-3 cursor-pointer'>
          <span className='mr-2'>📂</span> My Projects
        </div>
        <div className='flex items-center rounded-md bg-yellow-200 p-3 cursor-pointer'>
          <span className='mr-2'>🗓️</span> Upcoming Projects
        </div>
        <div className='flex items-center rounded-md bg-purple-200 p-3 cursor-pointer'>
          <span className='mr-2'>👥</span> Employee Search
        </div>
        <div className='flex items-center rounded-md bg-pink-200 p-3 cursor-pointer'>
          <span className='mr-2'>💼</span> Management
        </div>
        <div className='flex items-center rounded-md bg-indigo-200 p-3 cursor-pointer'>
          <span className='mr-2'>🏢</span> Organizations Info
        </div>
        <div className='flex items-center rounded-md bg-red-200 p-3 cursor-pointer'>
          <span className='mr-2'>❓</span> Help
        </div>
      </div>
    </div>
  );
};

export default OptionsColumnsComponets;
