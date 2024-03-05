import React from 'react';
import HeaderComponets from '../header/HeaderComponets';

const MyCompanyprojects = () => {
  return (
    <>
      <HeaderComponets />
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Aniket Kadam's Work</h1>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">List of Projects You've Done</h2>

        {/* Project details */}
        <div className="bg-gray-200 p-4 rounded-md mb-6">
          <p><span className="font-bold text-purple-700">Project Name:</span> Project X</p>
          <p><span className="font-bold text-purple-700">Manager Name:</span> John Doe</p>
          <p><span className="font-bold text-purple-700">Client Name:</span> ABC Corporation</p>
          <p><span className="font-bold text-purple-700">Project Team:</span> Team A</p>
          <p><span className="font-bold text-purple-700">Your Role:</span> Full Stack Developer</p>
          <p><span className="font-bold text-purple-700">Time Period:</span> 6 months</p>
          <p><span className="font-bold text-purple-700">Start Date:</span> 2022-01-01</p>
          <p><span className="font-bold text-purple-700">End Date:</span> 2022-06-30</p>
        </div>

        {/* Add more project details as needed */}
      </div>
    </>
  );
}

export default MyCompanyprojects;
