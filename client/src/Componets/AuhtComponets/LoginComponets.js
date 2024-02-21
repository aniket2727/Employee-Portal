import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const loginUser = async (data) => {
  // Simulate API call (replace with actual logic)
  console.log('Logging in with:', data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const LoginComponents = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((data) => loginUser(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('userData');
      console.log('Login successful');
      // Handle any further actions after successful login
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4">Enter User Email and Password</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Employee Email
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {mutation.isError && (
          <p className="text-red-500 text-xs italic">
            Login failed. Please check your credentials.
          </p>
        )}

        <button
          className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
            mutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
          onClick={onSubmit}
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginComponents;
