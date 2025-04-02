import React from 'react';

const TermsServices: React.FC = () => {
  return (
    <>
      <section className="bg-gray-50 text-gray-800 px-4 py-8 sm:px-8 md:px-16 lg:px-24 ">
        <div className="max-w-4xl mx-auto mt-32">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Terms and Conditions
          </h1>
          <p className="text-lg mb-8 text-gray-700 leading-relaxed text-center">
            Please read these terms and conditions carefully before using Our Service.
          </p>

          {/* Interpretation and Definitions */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interpretation and Definitions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mt-4">Interpretation</h3>
              <p className="text-gray-700">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mt-4">Definitions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
                <li><strong>Country</strong> refers to: New Jersey, United States.</li>
                <li><strong>Company</strong> refers to Golden Oak Estates, NJ 08520, United States.</li>
                <li><strong>Device</strong> means any device that can access the Service.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                <li><strong>Third-party Social Media Service</strong> means any services or content provided by a third-party that may be displayed, included, or made available by the Service.</li>
                <li><strong>Website</strong> refers to Golden Oak Estates, accessible from <a href="https://www.goldenoaknj.com/" className="text-blue-500 underline">https://www.goldenoaknj.com/</a></li>
                <li><strong>You</strong> means the individual accessing or using the Service.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Acknowledgment</h2>
    <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>

    <h3 className="text-xl font-medium mt-4">Termination</h3>
    <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>

    <h3 className="text-xl font-medium mt-4">Limitation of Liability</h3>
    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>

    <h3 className="text-xl font-medium mt-4">Disclaimer</h3>
    <p>The Service is provided to You "AS IS" and "AS AVAILABLE" without warranty of any kind.</p>

    <h3 className="text-xl font-medium mt-4">Governing Law</h3>
    <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.</p>

    <h3 className="text-xl font-medium mt-4">Contact Us</h3>
    <p>Email: <a href="mailto:mail@goldenoaknj.com" className="text-blue-500">mail@goldenoaknj.com</a></p>
    <p>Phone: (609) 375-8828</p>
        </div>
      </section>
    </>
  );
};

export default TermsServices;
