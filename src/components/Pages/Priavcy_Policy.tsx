import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 mt-32">Privacy Policy</h1>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          This Privacy Policy describes Our policies and procedures on the collection, use, and
          disclosure of Your information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </p>
        <p className="text-lg mb-8 text-gray-700 leading-relaxed">
          We use Your Personal data to provide and improve the Service. By using the Service, You
          agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interpretation and Definitions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Interpretation</h3>
            <p className="text-gray-700">
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless
              of whether they appear in singular or in plural.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Definitions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
              <li><strong>Company</strong> refers to Golden Oak Estates, NJ 08520, United States.</li>
              <li><strong>Cookies</strong> are small files placed on Your device by a website, containing details of Your browsing history and other uses.</li>
              <li><strong>Country</strong> refers to: New Jersey, United States.</li>
              <li><strong>Device</strong> means any device that can access the Service.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
              <li><strong>Website</strong> refers to Golden Oak Estates, accessible from <a href="https://www.goldenoaknj.com/" className="text-blue-500 underline">https://www.goldenoaknj.com/</a></li>
              <li><strong>You</strong> means the individual accessing or using the Service.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Collecting and Using Your Personal Data</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Types of Data Collected</h3>
            <h4 className="text-lg font-medium text-gray-800 mt-4">Personal Data</h4>
            <p className="text-gray-700">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mt-4">Usage Data</h4>
            <p className="text-gray-700">
              Usage Data is collected automatically when using the Service and may include information such as Your Device's IP address, browser type, browser version, pages visited, and other diagnostic data.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-800 mt-4">Tracking Technologies and Cookies</h4>
            <p className="text-gray-700">
              We use Cookies and similar tracking technologies to track activity on Our Service. You can choose to refuse Cookies, but some parts of our Service may not work properly without them.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Use of Your Personal Data</h3>
            <p className="text-gray-700">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account as a registered user</li>
              <li>For contract performance</li>
              <li>To contact You with updates or promotional offers</li>
              <li>To manage Your requests</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Retention of Your Personal Data</h3>
            <p className="text-gray-700">
              We will retain Your Personal Data as long as necessary to comply with legal obligations and enforce our agreements and policies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-800 mt-4">Security of Your Personal Data</h3>
            <p className="text-gray-700">
              We strive to use commercially acceptable means to protect Your Personal Data, though no transmission method over the Internet is completely secure.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
          <li>Email: <a href="mailto:mail@goldenoaknj.com" className="text-blue-500 underline">mail@goldenoaknj.com</a></li>
          <li>Phone: (609) 375-8828</li>
          <li>Website: <a href="https://www.goldenoaknj.com" className="text-blue-500 underline">https://www.goldenoaknj.com/</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;