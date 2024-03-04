import React, { useState } from 'react';
import HeaderComponets from '../header/HeaderComponets';

const EmployeeSearchComponents = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Corp',
      currentProject: 'Web Development',
      previousProjects: ['Mobile App', 'E-commerce Website'],
      skills: ['React', 'Node.js', 'JavaScript'],
      jobRole: 'Software Developer',
      joiningDate: '2022-01-15',
      previousCompany: 'XYZ Tech',
      educations: ['Bachelor in Computer Science', 'Master in Software Engineering'],
    },
    // Add more employee details as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState(null);

  const handleSearch = () => {
    const foundEmployee = employees.find(
      (employee) => employee.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundEmployee) {
      setEmployeeDetails(foundEmployee);
    } else {
      setEmployeeDetails(null);
    }
  };

  return (
    <>
      <HeaderComponets />
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-8 rounded-md w-1/2 flex-shrink-0 shadow-lg">
          {/* Gradient background with shades of blue */}
          <h1 className="text-3xl font-bold mb-4 text-white">Employee Search</h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter employee name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
          {employeeDetails && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2 text-white">Employee Details</h2>
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p>
                    <span className="font-bold">Name:</span> {employeeDetails.name}
                  </p>
                  <p>
                    <span className="font-bold">Job Role:</span> {employeeDetails.jobRole}
                  </p>
                  <p>
                    <span className="font-bold">Company:</span> {employeeDetails.company}
                  </p>
                  <p>
                    <span className="font-bold">Current Project:</span>{' '}
                    {employeeDetails.currentProject}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Joining Date:</span> {employeeDetails.joiningDate}
                  </p>
                  <p>
                    <span className="font-bold">Previous Company:</span>{' '}
                    {employeeDetails.previousCompany}
                  </p>
                  <p>
                    <span className="font-bold">Education:</span>{' '}
                    {employeeDetails.educations.join(', ')}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold">Previous Projects:</p>
                <ul className="list-disc list-inside">
                  {employeeDetails.previousProjects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="font-bold">Skills:</p>
                <ul className="list-disc list-inside">
                  {employeeDetails.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {!employeeDetails && searchTerm && (
            <p className="mt-4 text-red-500">Employee not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeSearchComponents;
