// src/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block mb-1">Full Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
          )}
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button
            type="submit"
            onClick={() => navigate('/')}
            className="w-full py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-500 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Switch between Login/Signup */}
        <p className="text-center mt-4">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
          <button
            onClick={toggleForm}
            className="text-blue-600 font-semibold hover:underline transition duration-300"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
