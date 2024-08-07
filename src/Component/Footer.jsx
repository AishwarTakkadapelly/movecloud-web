import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">MoveCloud</h2>
          <ul>
            <li className="mb-2"><a href="/pricing" className="hover:text-gray-400">Pricing</a></li>
            <li className="mb-2"><a href="/why-movecloud" className="hover:text-gray-400">Why MoveCloud?</a></li>
            <li className="mb-2"><a href="/free-account" className="hover:text-gray-400">Free Account</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Platform</h2>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2"><a href="/about-us" className="hover:text-gray-400">About Us</a></li>
            <li className="mb-2"><a href="/case-studies" className="hover:text-gray-400">Case Studies</a></li>
            <li className="mb-2"><a href="/careers" className="hover:text-gray-400">Careers</a></li>
            <li className="mb-2"><a href="/contact-us" className="hover:text-gray-400">Contact Us</a></li>
            <li className="mb-2"><a href="/partners" className="hover:text-gray-400">Partners</a></li>
            <li className="mb-2"><a href="/customers" className="hover:text-gray-400">Customers</a></li>
            <li className="mb-2"><a href="/trademark-policy" className="hover:text-gray-400">Trademark Policy</a></li>
            <li className="mb-2"><a href="/security" className="hover:text-gray-400">Security</a></li>
            <li className="mb-2"><a href="/legal" className="hover:text-gray-400">Legal</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Resources</h2>
          <ul>
            <li className="mb-2"><a href="/documentation" className="hover:text-gray-400">Documentation</a></li>
            <li className="mb-2"><a href="/api" className="hover:text-gray-400">API</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; MoveCloud 2024</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/terms-of-service" className="hover:text-gray-400">Term Of Service</a>
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/security" className="hover:text-gray-400">Security</a>
          <a href="/cookie-settings" className="hover:text-gray-400">Cookie Settings</a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com" className="hover:text-gray-400">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
