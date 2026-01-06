import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-orange-50 text-black py-16 px-6 sm:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          Privacy Policy – Cewexa.com
        </h1>
        <p className="text-gray-700 mb-8">
          <strong>Effective Date:</strong> 1st December 2025
        </p>
        <p className="text-gray-700 mb-8">
          Cewexa.com (“we,” “our,” or “us”) is a platform run by Deepak Kumar Gupta and Naresh Gupta, offering web development services as a team of freelancers. We respect your privacy and are committed to protecting your personal information.
        </p>

        {/* 1. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-2">
            We only collect information you voluntarily provide through our contact form, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Name</li>
            <li>Phone number</li>
            <li>Business type</li>
            <li>Message or inquiry</li>
          </ul>
          <p className="text-gray-700 mt-2">
            This information is processed via Email.js service to facilitate communication and service delivery.
          </p>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">We use your information solely to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Discuss project details, payments, and agreements</li>
            <li>Send updates related to your project, if requested</li>
          </ul>
          <p className="text-gray-700 mt-2">
            We do not use your data for marketing or share it with third parties, except for the purpose of responding to your inquiries.
          </p>
        </section>

        {/* 3. Payments */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payments</h2>
          <p className="text-gray-700 mb-2">
            Cewexa.com is not a registered company; all payments are directly handled by Deepak Kumar Gupta or Naresh Gupta.
          </p>
          <p className="text-gray-700">
            Any financial transaction will take place through their personal bank accounts.
          </p>
        </section>

        {/* 4. Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Security</h2>
          <p className="text-gray-700">
            We take reasonable measures to protect the information you provide. However, no system transmitted over the internet is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        {/* 5. Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Services</h2>
          <p className="text-gray-700">
            The contact form uses Email.js service to deliver messages. We are not responsible for their privacy practices.
          </p>
        </section>

        {/* 6. Changes to This Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy occasionally. Changes will be posted here with an updated Effective Date.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            For questions about this Privacy Policy, contact: <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:enquiry@cewexa.com" className="text-orange-600 hover:underline">
              enquiry@cewexa.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
