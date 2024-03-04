import React from 'react';
import { IoMdPerson } from 'react-icons/io';
const HeaderComponets = () => {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <div>
                <h1 className="text-4xl font-bold font-serif ">MERN STACK</h1>
            </div>

            <div className="text-right flex justify-between items-center">
                <div className="mr-4"> {/* Add margin-right for spacing */}
                    <h1 className="text-2xl font-serif font-bold">Welcome</h1>
                    <h1 className="text-2xl font-bold font-serif ">Aniket Kadam</h1>
                </div>

                <div className='flex justify-betweeen items-center'>
                    <IoMdPerson className="text-3xl mr-2 cursor-pointer" />
                    <h1 className="text-2xl font-bold  cursor-pointer font-serif ">My Profile</h1>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponets;
