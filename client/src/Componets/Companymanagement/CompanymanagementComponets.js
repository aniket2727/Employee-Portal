import React from 'react';
import HeaderComponets from '../header/HeaderComponets';
const CompanyManagementComponents = () => {
    return (
        <>
            <HeaderComponets />
            <div className="mx-auto max-w-2xl p-4">
                <h1 className="text-3xl font-bold mb-6 text-green-700">Company Management</h1>

                {/* CEO details */}
                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">CEO</h2>
                    <p><span className="font-bold text-purple-700">Name:</span> John Doe</p>
                    <p><span className="font-bold text-purple-700">Email:</span> john.doe@example.com</p>
                    <p><span className="font-bold text-purple-700">Contact Number:</span> +1234567890</p>
                    <p><span className="font-bold text-purple-700">Office Location:</span> Main Office</p>
                    <p><span className="font-bold text-purple-700">Responsibilities:</span> Strategic Planning, Decision Making</p>
                </div>

                {/* HR details */}
                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Human Resources (HR)</h2>
                    <p><span className="font-bold text-purple-700">Head of HR:</span> Jane Smith</p>
                    <p><span className="font-bold text-purple-700">Email:</span> jane.smith@example.com</p>
                    <p><span className="font-bold text-purple-700">Contact Number:</span> +9876543210</p>
                    <p><span className="font-bold text-purple-700">Office Location:</span> HR Department</p>
                    <p><span className="font-bold text-purple-700">Responsibilities:</span> Employee Relations, Talent Acquisition</p>
                </div>

                {/* IT Department Head details */}
                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">IT Department Head</h2>
                    <p><span className="font-bold text-purple-700">Head of IT:</span> Mark Johnson</p>
                    <p><span className="font-bold text-purple-700">Email:</span> mark.johnson@example.com</p>
                    <p><span className="font-bold text-purple-700">Contact Number:</span> +1112233445</p>
                    <p><span className="font-bold text-purple-700">Office Location:</span> IT Department</p>
                    <p><span className="font-bold text-purple-700">Responsibilities:</span> Technology Management, Innovation</p>
                </div>

                {/* Finance Department Head details */}
                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-blue-700">Finance Department Head</h2>
                    <p><span className="font-bold text-purple-700">Head of Finance:</span> Susan Williams</p>
                    <p><span className="font-bold text-purple-700">Email:</span> susan.williams@example.com</p>
                    <p><span className="font-bold text-purple-700">Contact Number:</span> +3334445556</p>
                    <p><span className="font-bold text-purple-700">Office Location:</span> Finance Department</p>
                    <p><span className="font-bold text-purple-700">Responsibilities:</span> Budgeting, Financial Planning</p>
                </div>

                {/* Add more management details as needed */}
            </div>
        </>
    );
}

export default CompanyManagementComponents;
