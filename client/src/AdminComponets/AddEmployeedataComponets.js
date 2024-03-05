import React, { useState } from 'react';
import HeaderComponets from '../Componets/header/HeaderComponets';
const AddEmployeedataComponets = () => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        previousCompany: '',
        salary: '',
        skills: '',
        educations: '',
        jobRole: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Handle the form submission, e.g., send data to the server
        console.log('Employee data submitted:', employeeData);
        // You can also reset the form after submission
        setEmployeeData({
            name: '',
            address: '',
            email: '',
            phone: '',
            previousCompany: '',
            salary: '',
            skills: '',
            educations: '',
            jobRole: '',
        });
    };

    return (
        <>
            <HeaderComponets />

            <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-md mt-10">
                <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">Add Employee Data</h1>
                <div className="grid grid-cols-1 gap-4">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Employee Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={employeeData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={employeeData.address}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={employeeData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={employeeData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Previous Company:</label>
                        <input
                            type="text"
                            name="previousCompany"
                            value={employeeData.previousCompany}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Salary:</label>
                        <input
                            type="text"
                            name="salary"
                            value={employeeData.salary}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Skills:</label>
                        <input
                            type="text"
                            name="skills"
                            value={employeeData.skills}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Educations:</label>
                        <input
                            type="text"
                            name="educations"
                            value={employeeData.educations}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Job Role:</label>
                        <input
                            type="text"
                            name="jobRole"
                            value={employeeData.jobRole}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md mt-4 mx-auto block"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </>
    );
}

export default AddEmployeedataComponets;
