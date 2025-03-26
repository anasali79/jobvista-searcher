
import React from "react";
import Document from "./_document";

const PrivacyPolicy = () => {
  return (
    <Document>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Last updated: June 1, 2023
          </p>
        </div>
        
        <div className="glass-card p-8">
          <div className="prose prose-sm max-w-none">
            <h2 className="text-2xl font-semibold text-apple-text mb-4">1. Introduction</h2>
            <p className="text-apple-lighttext mb-6">
              At JobVista, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">2. The Data We Collect About You</h2>
            <p className="text-apple-lighttext mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="text-apple-lighttext mb-6">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-apple-lighttext mb-6">
              <li>Identity Data includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Profile Data includes your username and password, your interests, preferences, feedback and survey responses.</li>
              <li>Usage Data includes information about how you use our website, products and services.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">3. How We Use Your Personal Data</h2>
            <p className="text-apple-lighttext mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-apple-lighttext mb-6">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">4. Data Security</h2>
            <p className="text-apple-lighttext mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">5. Your Legal Rights</h2>
            <p className="text-apple-lighttext mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-apple-lighttext mb-6">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">6. Contact Us</h2>
            <p className="text-apple-lighttext">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="text-apple-lighttext mb-6">
              Email: privacy@jobvista.com<br />
              Phone: +1 (800) 555-0123<br />
              Address: 123 Tech Avenue, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default PrivacyPolicy;
