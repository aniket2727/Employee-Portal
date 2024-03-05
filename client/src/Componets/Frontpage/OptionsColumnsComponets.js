import React from 'react';
import { useNavigate } from 'react-router-dom';

const OptionsColumnsComponets = () => {
  const navigate=useNavigate();
  return (
    <div className='mt-5'>
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl'>
          Aniket Kadam
        </h1>
      </div>

      <div className='mt-5 space-y-2'>
        <div className='flex items-center rounded-md bg-blue-200 p-3 cursor-pointer' onClick={()=>navigate('/company-project')}>
          <span className='mr-2'>🚀</span> Projects
        </div>
        <div className='flex items-center rounded-md bg-green-200 p-3 cursor-pointer' onClick={()=>navigate('/my-projects')}>
          <span className='mr-2'>📂</span> My Projects
        </div>
        <div className='flex items-center rounded-md bg-yellow-200 p-3 cursor-pointer' onClick={()=>navigate('/company-project-upcommming')}>
          <span className='mr-2'>🗓️</span> Upcoming Projects
        </div>
        <div className='flex items-center rounded-md bg-purple-200 p-3 cursor-pointer' onClick={()=>navigate('/employee-search')}>
          <span className='mr-2'>👥</span> Employee Search
        </div>
        <div className='flex items-center rounded-md bg-pink-200 p-3 cursor-pointer' onClick={()=>navigate('/company-management')}>
          <span className='mr-2'>💼</span> Management
        </div>
        <div className='flex items-center rounded-md bg-indigo-200 p-3 cursor-pointer' onClick={()=>navigate('/orgaziation')}>
          <span className='mr-2'>🏢</span> Organizations Info
        </div>
        <div className='flex items-center rounded-md bg-red-200 p-3 cursor-pointer' onClick={()=>navigate('/help')}>
          <span className='mr-2'>❓</span> Help
        </div>
      </div>
    </div>
  );
};

export default OptionsColumnsComponets;
