import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post(`${process.env.MOVE_CLOUD_LOCAL_HOST_BACK_END}/signin`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setData(response.data);
        setLoading(false);
        window.location.href = 'http://localhost:9000/';
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign In to MoveCloud</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="remember">
              <input
                type="checkbox"
                id="remember"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 leading-tight"
              />
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-500"
          >
            Sign In
          </button>
        </form>
        {loading && <div className="mt-4 text-center">Loading...</div>}
        {error && <div className="mt-4 text-center text-red-500">Error: {error.message}</div>}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

