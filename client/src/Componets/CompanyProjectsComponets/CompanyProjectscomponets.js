import React from 'react';
import HeaderComponets from '../header/HeaderComponets';
const CompanyProjectscomponets = () => {
    return (
        <>
            <HeaderComponets />

            <div className="p-8">
                <h1 className="text-4xl font-bold mb-6">MERN STACK</h1>

                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    {/* Company details */}
                    <h2 className="text-xl font-semibold mb-4 bg-red-500 rounded-md w-25">Company Details</h2>
                    <p><span className="font-bold">Name:</span> ABC Corporation</p>
                    <p><span className="font-bold">Founder:</span> John Doe</p>
                    <p><span className="font-bold">Technology Used:</span> MERN Stack (MongoDB, Express.js, React, Node.js)</p>
                    <p><span className="font-bold">Clients:</span> Fortune 500 companies</p>
                    <p><span className="font-bold">Employee Count:</span> 200+</p>
                    <p><span className="font-bold">Chairman:</span> Jane Smith</p>
                    <p><span className="font-bold">Product Turnover:</span> $50 million annually</p>
                    <p><span className="font-bold">Office Locations:</span>
                        <ul>
                            <li>Main Office: New York, USA</li>
                            <li>Regional Office: London, UK</li>
                            <li>Development Center: Bangalore, India</li>s
                        </ul>
                    </p>
                  
                </div>

                <div className="bg-gray-200 p-4 rounded-md">
                   
                    <h2 className="text-xl font-semibold mb-4  bg-red-500 rounded-md w-25">Project Details</h2>
                    <p><span className="font-bold">Project Name:</span> MERN STACK Development</p>
                    <p><span className="font-bold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 
                </div>
            </div>
        </>
    );
};

export default CompanyProjectscomponets;
