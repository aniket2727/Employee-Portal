import React from 'react';
import HeaderComponets from '../header/HeaderComponets';
const UpcomingProjectComponents = () => {
  return (
    <>
    <HeaderComponets/>
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Upcoming Company Projects</h1>
      <div className="bg-gray-200 p-4 rounded-md mb-6">
        <p><span className="font-bold text-purple-700">Project Name:</span> Project Y</p>
        <p><span className="font-bold text-purple-700">Client:</span> XYZ Corporation</p>
        <p><span className="font-bold text-purple-700">Technology:</span> React, Node.js</p>
        <p><span className="font-bold text-purple-700">Time Period:</span> 3 months</p>
        <p><span className="font-bold text-purple-700">Budget:</span> $50,000</p>
      </div>

    </div>
    </>
  );
}

export default UpcomingProjectComponents;
