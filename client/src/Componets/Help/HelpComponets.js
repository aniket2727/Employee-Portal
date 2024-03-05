import React from 'react';
import HeaderComponets from '../header/HeaderComponets';
const HelpComponents = () => {
    return (
        <>
            <HeaderComponets />
            <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Help Center</h1>
                <div className="bg-white p-8 rounded-md w-full max-w-md shadow-md">
                    <p className="mb-4 text-gray-700">
                        Welcome to our Help Center. If you have any questions or issues, feel free to explore the topics below.
                    </p>

                    <h2 className="text-lg font-semibold mt-4">Frequently Asked Questions (FAQs)</h2>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>How to create a new post?</li>
                        <li>Where can I find my profile settings?</li>
                        <li>How to search for employees?</li>
                        {/* Add more FAQ items as needed */}
                    </ul>

                    <h2 className="text-lg font-semibold mt-4">Contact Support</h2>
                    <p className="mb-4 text-gray-700">
                        If you can't find the information you need, please contact our support team at support@example.com.
                    </p>

                    <h2 className="text-lg font-semibold mt-4">User Guides</h2>
                    <p className="text-gray-700">
                        Explore our user guides to learn more about the features and functionalities of our platform.
                    </p>
                </div>
            </div>
        </>
    );
}

export default HelpComponents;
