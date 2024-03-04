import React from 'react';
import HeaderComponets from '../header/HeaderComponets';
const OrganizationComponets = () => {
  const departments = [
    {
      name: 'Development Department',
      head: 'Jane Doe',
      employeeCount: 50,
      currentProjects: ['Project A', 'Project B'],
      previousProjects: ['Legacy System Upgrade', 'Mobile App Development'],
      requiredSkills: ['React', 'Node.js', 'JavaScript'],
    },
    {
        name: 'UI design Department',
        head: 'Jane Doe',
        employeeCount: 50,
        currentProjects: ['Project A', 'Project B'],
        previousProjects: ['Legacy System Upgrade', 'Mobile App Development'],
        requiredSkills: ['React', 'Node.js', 'JavaScript'],
      },
      {
        name: 'Saleforce Department',
        head: 'Jane Doe',
        employeeCount: 50,
        currentProjects: ['Project A', 'Project B'],
        previousProjects: ['Legacy System Upgrade', 'Mobile App Development'],
        requiredSkills: ['React', 'Node.js', 'JavaScript'],
      },
    // Add more department details as needed
  ];

  return (
   <>
   <HeaderComponets/>
   <div>
   <h1 className="text-3xl font-bold mb-6 text-purple-800">Organizations Details</h1>

   {departments.map((department, index) => (
     <div key={index} className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-6 rounded-md mb-6">
       {/* Department details */}
       <h2 className="text-2xl font-semibold mb-4 text-white bg-indigo-500 rounded-md p-2">Department: {department.name}</h2>
       <p><span className="font-bold text-green-600">Head:</span> {department.head}</p>
       <p><span className="font-bold text-orange-600">Employee Count:</span> {department.employeeCount}</p>
       <p><span className="font-bold text-yellow-600">Current Projects:</span> {department.currentProjects.join(', ')}</p>
       <p><span className="font-bold text-pink-600">Previous Projects:</span> {department.previousProjects.join(', ')}</p>
       <p><span className="font-bold text-red-600">Required Skills:</span> {department.requiredSkills.join(', ')}</p>
       {/* Add more department details as needed */}
     </div>
   ))}
 </div>
   </>
  );
}

export default OrganizationComponets;
