import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-orange-50 text-black py-16 px-6 sm:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
          Terms of Service – Cewexa.com
        </h1>
        <p className="text-gray-700 mb-8">
          <strong>Effective Date:</strong> 1st December 2025
        </p>
        <p className="text-gray-700 mb-8">
          By contacting or using Cewexa.com, you agree to these Terms of Service (“Terms”).
        </p>

        {/* 1. Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Services</h2>
          <p className="text-gray-700 mb-2">
            Cewexa.com is run by Deepak Kumar Gupta and Naresh Gupta, offering freelance web development services including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Website design and development</li>
            <li>UI/UX and logo design</li>
            <li>Frontend and backend solutions</li>
            <li>Website maintenance and support</li>
          </ul>
        </section>

        {/* 2. Use of Our Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Our Services</h2>
          <p className="text-gray-700 mb-2">You agree to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Provide accurate information in the contact form</li>
            <li>Use our services lawfully and responsibly</li>
          </ul>
        </section>

        {/* 3. Payments & Fees */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payments & Fees</h2>
          <p className="text-gray-700 mb-2">
            All fees, terms, and payment methods are discussed directly with Deepak Kumar Gupta or Naresh Gupta.
          </p>
          <p className="text-gray-700">
            Payments are made only to their personal bank accounts. Cewexa.com is not a registered company or firm.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 mb-2">
            All work created by Cewexa.com remains our property until full payment is received.
          </p>
          <p className="text-gray-700">
            Ownership rights may be transferred to the client after full payment, as agreed.
          </p>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-2">
            Cewexa.com is not responsible for any indirect or consequential damages arising from our services.
          </p>
          <p className="text-gray-700">
            We aim to provide high-quality work but do not guarantee specific business results.
          </p>
        </section>

        {/* 6. Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
          <p className="text-gray-700">
            We reserve the right to refuse service or terminate discussions if these Terms are violated or payment obligations are not met.
          </p>
        </section>

        {/* 7. Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
          <p className="text-gray-700">
            These Terms are governed by the laws of India. Any disputes will fall under the jurisdiction of courts in Gangapur City, Rajasthan.
          </p>
        </section>

        {/* 8. Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms occasionally. Updates will be posted here with an updated Effective Date.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            For questions regarding these Terms of Service, contact: <br />
            <strong>Email:</strong> <a href="mailto:Cewexa@gmail.com" className="text-orange-600 hover:underline">Cewexa@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
