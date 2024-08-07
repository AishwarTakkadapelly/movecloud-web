import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Documentation</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Explore our detailed documentation to get the most out of MoveCloud. Find comprehensive guides, API references, and troubleshooting tips to help you at every step.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Getting Started</h2>
          <p className="text-lg text-gray-700 mb-4">
            Start here if you are new to MoveCloud. Our getting started guide will help you set up your account and start using our platform in no time.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Account Setup</li>
            <li className="mb-2">Platform Overview</li>
            <li className="mb-2">Basic Configuration</li>
            <li className="mb-2">First Deployment</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">API Reference</h2>
          <p className="text-lg text-gray-700 mb-4">
            Access detailed information about our API endpoints, including usage examples and parameter descriptions. Learn how to integrate MoveCloud with your existing systems.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Authentication</li>
            <li className="mb-2">Resource Management</li>
            <li className="mb-2">Monitoring and Alerts</li>
            <li className="mb-2">Billing and Usage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Advanced Configuration</h2>
          <p className="text-lg text-gray-700 mb-4">
            Dive deeper into MoveCloud's capabilities with our advanced configuration guides. Learn how to customize and optimize your cloud environment for better performance.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Custom Templates</li>
            <li className="mb-2">Scaling Strategies</li>
            <li className="mb-2">Security Best Practices</li>
            <li className="mb-2">Compliance Configuration</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Troubleshooting</h2>
          <p className="text-lg text-gray-700 mb-4">
            Find solutions to common issues and learn how to troubleshoot problems effectively. Our troubleshooting guides are designed to help you resolve issues quickly.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Common Errors</li>
            <li className="mb-2">Performance Issues</li>
            <li className="mb-2">Configuration Problems</li>
            <li className="mb-2">Support Resources</li>
          </ul>
        </section>

        <div className="text-center">
          <p className="text-lg text-gray-700">
            Need more help? Visit our support portal or contact our support team for additional assistance.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-800">
            Visit Support Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
