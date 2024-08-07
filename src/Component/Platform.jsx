import React from 'react';

const Platform = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">An Introduction to MoveCloud Platform</h1>
          <p className="text-lg text-gray-700 mb-6">
            MoveCloud is a one-click platform that simplifies the creation and management of your infrastructure. A cloud platform enables businesses to rent access to computing resources on demand over the internet with pay-as-you-go pricing, rather than buying, installing, and managing their own data centers, servers, and software required to have these resources available on premises.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">How does MoveCloud work?</h2>
          <p className="text-lg text-gray-700 mb-6">
            MoveCloud creates a virtual pool of shared resources to provide compute, data storage, and network services over the internet. Customers can access resources on the cloud platform as needed, paying only for the resources they need. MoveCloud uses virtualization technologies to provide these services efficiently.
          </p>
          
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Key Features</h2>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li className="mb-2">One-click infrastructure setup and management</li>
            <li className="mb-2">Supports multi-cloud environments</li>
            <li className="mb-2">Automated scaling and provisioning</li>
            <li className="mb-2">Integrated monitoring and alerting</li>
            <li className="mb-2">Cost optimization and management</li>
            <li className="mb-2">Security and compliance automation</li>
          </ul>
          
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Supported Technologies</h2>
          <p className="text-lg text-gray-700 mb-6">
            MoveCloud integrates with various technologies to provide a robust infrastructure management experience. Some of the supported technologies include:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li className="mb-2"><strong>Terraform:</strong> Infrastructure as code for defining and provisioning infrastructure using configuration files.</li>
            <li className="mb-2"><strong>Amazon Web Services (AWS):</strong> Deploy and manage applications on AWS's extensive cloud platform.</li>
            <li className="mb-2"><strong>Microsoft Azure:</strong> Seamless integration with Microsoft's cloud platform for deploying and managing applications.</li>
            <li className="mb-2"><strong>Google Cloud Platform (GCP):</strong> Leverage Google's powerful cloud infrastructure for deploying and managing applications.</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Why Choose MoveCloud?</h2>
          <p className="text-lg text-gray-700 mb-6">
            MoveCloud is designed to simplify and automate the complex tasks of infrastructure management, allowing you to focus on building and scaling your applications. Here are some reasons why you should choose MoveCloud:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li className="mb-2">Unified platform for managing multi-cloud environments</li>
            <li className="mb-2">Automated and scalable infrastructure provisioning</li>
            <li className="mb-2">Integrated tools for monitoring, alerting, and cost management</li>
            <li className="mb-2">Security and compliance best practices built-in</li>
            <li className="mb-2">Easy-to-use interface with powerful capabilities</li>
          </ul>
          <p className="text-lg text-gray-700">
            Join the many organizations that trust MoveCloud for their cloud infrastructure needs.
          </p>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Learn More</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800">Akamai Cloud Computing</h4>
              <p className="text-gray-700">
                Put applications and workloads close to your end users, no matter where they are in the world, with the world’s most distributed cloud platform.
              </p>
              <a href="https://www.akamai.com/us/en/products/cloud-computing.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800">Cloud Computing at the Edge</h4>
              <p className="text-gray-700">
                Deliver faster and more reliable applications with edge computing solutions that bring computation and data storage closer to your users.
              </p>
              <a href="https://www.akamai.com/us/en/resources/cloud-computing-at-the-edge.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
