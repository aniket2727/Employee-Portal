import React, { useState } from 'react';
import HeaderComponets from '../header/HeaderComponets';

const CreatePostComponents = () => {
  const [postContent, setPostContent] = useState('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const openConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const confirmAddPost = () => {
    // Handle the post confirmation here (e.g., send it to a server or update state)
    setIsModalOpen(true); // Open the modal after confirming
    closeConfirmation(); // Close the confirmation modal
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = () => {
    openConfirmation(); // Open the confirmation modal when clicking "Add Post"
  };

  return (
    <>
      <HeaderComponets />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-100 p-8 rounded-md w-1/2 h-300 flex-shrink-0">
          <h1 className="text-2xl font-bold mb-4">Create Post</h1>
          <textarea
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Type your post here..."
            value={postContent}
            onChange={handlePostChange}
            style={{ height: '300px' }}
          />

          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
              onClick={handleAddPost}
            >
              Add Post
            </button>

            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              onClick={() => setPostContent('')}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Confirmation Modal */}
        {isConfirmationOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md w-80">
              <h2 className="text-xl font-semibold mb-4">Confirm Add Post</h2>
              <p>Are you sure you want to add this post?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                  onClick={confirmAddPost}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded-md"
                  onClick={closeConfirmation}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Result Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md w-80">
              <h2 className="text-xl font-semibold mb-4">Post Added Successfully</h2>
              <p>Your post has been added successfully.</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={closeModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreatePostComponents;
