import React from 'react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Resources</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Explore our comprehensive set of resources to help you get the most out of MoveCloud. From documentation to tutorials, we provide everything you need to succeed.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Documentation</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our detailed documentation covers all aspects of MoveCloud, from setup to advanced configurations. Find step-by-step guides, API references, and troubleshooting tips.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Getting Started Guide</li>
            <li className="mb-2">API Reference</li>
            <li className="mb-2">Configuration Examples</li>
            <li className="mb-2">Troubleshooting Tips</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Tutorials</h2>
          <p className="text-lg text-gray-700 mb-4">
            Learn how to use MoveCloud with our comprehensive tutorials. Each tutorial provides step-by-step instructions to help you achieve your goals.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Deploying Applications</li>
            <li className="mb-2">Setting Up Continuous Integration</li>
            <li className="mb-2">Managing Multi-Cloud Environments</li>
            <li className="mb-2">Automating Infrastructure</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Webinars</h2>
          <p className="text-lg text-gray-700 mb-4">
            Join our webinars to get the latest updates and learn from our experts. We cover a wide range of topics to help you stay ahead in the cloud industry.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Upcoming Webinars</li>
            <li className="mb-2">On-Demand Webinars</li>
            <li className="mb-2">Expert Q&A Sessions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Support</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our support team is here to help you with any issues you may encounter. Access our support portal to get in touch with our experts.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">24/7 Support Portal</li>
            <li className="mb-2">Community Forums</li>
            <li className="mb-2">Knowledge Base</li>
            <li className="mb-2">Contact Support</li>
          </ul>
        </section>

        <div className="text-center">
          <p className="text-lg text-gray-700">
            Discover more about MoveCloud's resources and how they can help you achieve your cloud goals. Contact us today to learn more.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-800">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
