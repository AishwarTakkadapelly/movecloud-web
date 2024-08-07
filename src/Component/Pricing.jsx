import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Pricing</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          MoveCloud offers flexible pricing plans to meet your needs. Whether you are a small startup or a large enterprise, we have a plan that fits your requirements.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Free Tier</h2>
          <p className="text-lg text-gray-700 mb-4">
            Get started with our free tier, perfect for small projects and testing. Enjoy limited access to our core features without any cost.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Limited access to core features</li>
            <li className="mb-2">5 GB of storage</li>
            <li className="mb-2">10,000 API requests per month</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Standard Plan</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our standard plan is ideal for growing businesses. Enjoy more resources and advanced features to support your growth.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Access to advanced features</li>
            <li className="mb-2">50 GB of storage</li>
            <li className="mb-2">100,000 API requests per month</li>
            <li className="mb-2">$49 per month</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Enterprise Plan</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our enterprise plan is designed for large organizations with complex needs. Get access to all our features and premium support.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li className="mb-2">Unlimited access to all features</li>
            <li className="mb-2">Unlimited storage</li>
            <li className="mb-2">Unlimited API requests</li>
            <li className="mb-2">Dedicated account manager</li>
            <li className="mb-2">Premium support</li>
            <li className="mb-2">Contact us for pricing</li>
          </ul>
        </section>

        <div className="text-center">
          <p className="text-lg text-gray-700">
            Choose the plan that suits your needs and start leveraging the power of MoveCloud today. Contact us for more details.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-800">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
