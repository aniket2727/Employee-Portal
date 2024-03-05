import React from 'react';

const AdminUpdateUserComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Update User Details</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Skills:</label>
          <input
            type="text"
            name="skills"
            className="w-full p-2 border rounded-md"
            // Add value and onChange props for controlled input
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Salary:</label>
          <input
            type="text"
            name="salary"
            className="w-full p-2 border rounded-md"
            // Add value and onChange props for controlled input
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Completed Projects:</label>
          <input
            type="text"
            name="completedProjects"
            className="w-full p-2 border rounded-md"
            // Add value and onChange props for controlled input
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded-md"
            // Add value and onChange props for controlled input
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            className="w-full p-2 border rounded-md"
            // Add value and onChange props for controlled input
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Job Profile Assigned Projects:</label>
          <input
            type="text"
            name="jobProfileAssignedProjects"
            className="w-full p-2 border rounded-md"
            // Add value and onChange props for controlled input
          />
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
        Update Details
      </button>
    </div>
  );
};

export default AdminUpdateUserComponents;
