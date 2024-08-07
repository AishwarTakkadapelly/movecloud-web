import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <img src="/path/to/logo.png" alt="MoveCloud" className="h-8 mr-2" /> Replace with your logo path */}
          <span className="text-xl font-semibold">MOVECLOUD</span>
        </div>
        <ul className="flex space-x-10">
          <li>
            <Link to="/platform" className="hover:text-gray-400">Platform</Link>
          </li>
          <li>
            <Link to="/solutions" className="hover:text-gray-400">Solutions</Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-gray-400">Resources</Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-gray-400">Pricing</Link>
          </li>
          <li>
            <Link to="/documentation" className="hover:text-gray-400">Documentation</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-gray-400">Contact Us</Link>
          </li>
        </ul>
        <div className="flex space-x-7">
          <Link to="/" className="bg-gray-700 text-white py-2 px-9 rounded hover:bg-gray-600">Sign In</Link>
          <Link to="/signup" className="bg-gray-700 text-white py-2 px-9 rounded hover:bg-gray-600">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
