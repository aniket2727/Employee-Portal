import React from 'react';
import { useState } from 'react';
import HeaderComponets from '../header/HeaderComponets';
import { useNavigate } from 'react-router-dom';
const MyProfileComponets = () => {
    const Navigate=useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const skills = ['React', 'Node.js', 'Next.js', 'MongoDB', 'Redis', 'Docker'];
    return (
        <>
            <HeaderComponets />
            <div className='flex justify-center space-x-4 mt-4'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md' onClick={()=>Navigate('/create-post')}>
                    Create Post
                </button>

                <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md'>
                    Message Manager
                </button>

                <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md'>
                    Raise Token
                </button>
            </div>
            <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-md md:w-3/4 mt-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-blue-700 text-center">
                    Welcome to employee profile Aniket Kadam
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Name:</h2>
                        <p>Aniket Kadam</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Email:</h2>
                        <p>aniket@example.com</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Contact Number:</h2>
                        <p>+1234567890</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Job role:</h2>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Current Project:</h2>
                        <p>Internal Projects</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Previous Project:</h2>
                        <p>Mernhat Project</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Manager Name:</h2>
                        <p>Sanket J</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Address:</h2>
                        <p>Pune</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Joining Date:</h2>
                        <p>1-1-2023</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-600">Skills:</h2>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            onClick={openModal}
                        >
                            View Skills
                        </button>
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-md w-80">
                            <h2 className="text-xl font-semibold mb-4">Skills</h2>
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index} className="mb-2">{skill}</li>
                                ))}
                            </ul>
                            <button
                                className="mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default MyProfileComponets;