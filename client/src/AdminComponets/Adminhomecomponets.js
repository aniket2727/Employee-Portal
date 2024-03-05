import React from 'react';
import HeaderComponets from '../Componets/header/HeaderComponets';
const Adminhomecomponets = () => {
    return (
        <>
            <HeaderComponets />
            <div className="flex flex-col items-center justify-center h-screen">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-48 mb-4">
                    Add Employee info
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-48 mb-4">
                    Update User
                </button>

                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-48 mb-4">
                    Upcoming Projects
                </button>

                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md w-48 mb-4">
                    New Projects
                </button>

                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md w-48 mb-4">
                    Change Management Details
                </button>
            </div>
        </>

    );
};

export default Adminhomecomponets;
