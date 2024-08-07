import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: '',
    Role: '',
    email: '',
    password: ''

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  // https://b0d2f35d-3f11-44d5-89d2-5334f71e4a6e.mock.pstmn.io/api/sighnup

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure Role is an array with a single string element
    const formDataWithRoleArray = {
      ...formData,
      Role: [formData.Role]
    };
    // Convert form data to JSON object
    const jsonData = JSON.stringify(formDataWithRoleArray);
    console.log(jsonData); // Log or send the JSON data to backend
    // Here you can send the JSON data to your backend
    // window.location.href = 'http://localhost:9000/';
    //console.log(formDataWithRoleArray);

    const baseURL = 'https://b0d2f35d-3f11-44d5-89d2-5334f71e4a6e.mock.pstmn.io';
    const endpoint = '/api/sighnup';

    axios.post(`${baseURL}${endpoint}`, formData)
      .then(response => {
        console.log('Post created:', response.data);
        if (response.data) { // Assuming a successful response is truthy
          navigate('/');
        }
        
        
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });

  };

  const handleGoogleSuccess = (response) => {
    console.log('Google Login Success:', response);
    // window.location.href = 'http://localhost:9000/';
    // Handle Google login success here
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Login Failure:', error);
    // Handle Google login failure here
  };

  return (
    <GoogleOAuthProvider clientId="927720582175-8as1tspp62fv3mun0npsjf790m6sam0k.apps.googleusercontent.com">
      <div className="min-h-screen  flex items-center justify-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up for MoveCloud</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="Username">
                Username
              </label>
              <input
                type="text"
                id="Username"
                name='Username'
                value={formData.Username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="Role">
                Role
              </label>
              <select
                id="Role"
                name="Role"
                value={formData.Role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="admin">Admin</option>
                <option value="owner">Owner</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
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
                name='password'
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                name='password'
                id="confirm-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Confirm your password"
                required
              />
            </div> */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-500"
            >
              Sign Up
            </button>
          </form>
          <div className="flex flex-col items-center mt-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              buttonText="Sign up with Google"
              className="w-full mb-4"
            />
          </div>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
