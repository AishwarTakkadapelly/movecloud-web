import React from 'react';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Our Solutions</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          MoveCloud offers a range of solutions to meet your cloud infrastructure needs. Our solutions are designed to provide the best performance, scalability, and security for your business.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Cloud Migration</h2>
          <p className="text-lg text-gray-700 mb-4">
            Seamlessly migrate your applications, data, and infrastructure to the cloud with our expert migration services. We ensure minimal downtime and disruption to your operations.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Comprehensive migration strategy</li>
            <li className="mb-2">Minimal downtime and disruption</li>
            <li className="mb-2">Secure and efficient data transfer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Multi-Cloud Management</h2>
          <p className="text-lg text-gray-700 mb-4">
            Manage multiple cloud environments from a single platform. Our solution provides a unified interface to monitor and control your resources across different cloud providers.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Unified management interface</li>
            <li className="mb-2">Monitor and control resources</li>
            <li className="mb-2">Optimize cloud usage and costs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Infrastructure Automation</h2>
          <p className="text-lg text-gray-700 mb-4">
            Automate the provisioning, scaling, and management of your cloud infrastructure. Our automation tools help you achieve greater efficiency and reduce operational overhead.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Automated provisioning and scaling</li>
            <li className="mb-2">Configuration management</li>
            <li className="mb-2">Infrastructure as code</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Security and Compliance</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ensure your cloud environment is secure and compliant with industry standards. We provide tools and services to protect your data and maintain regulatory compliance.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Comprehensive security solutions</li>
            <li className="mb-2">Regulatory compliance support</li>
            <li className="mb-2">Continuous monitoring and assessment</li>
          </ul>
        </section>

        <div className="text-center">
          <p className="text-lg text-gray-700">
            Discover how MoveCloud's solutions can help you achieve your business goals. Contact us today to learn more.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-800">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
