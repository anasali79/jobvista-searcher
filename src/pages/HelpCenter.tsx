
import React from "react";
import Document from "./_document";

const HelpCenter = () => {
  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            How Can We <span className="text-apple-blue">Help?</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Find answers to common questions and learn how to make the most of JobVista.
          </p>
        </div>
        
        <div className="mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for help topics..." 
              className="w-full search-field pl-12"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-apple-lighttext"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-apple-text mb-4">For Job Seekers</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  How to create a strong profile
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Tips for effective job searching
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Setting up job alerts
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  How to apply for jobs
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Resume and cover letter tips
                </a>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-apple-text mb-4">For Employers</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Posting job listings
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Finding qualified candidates
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Managing applications
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Company profile setup
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  Subscription plans
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-apple-text mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-12">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-apple-text mb-2">How do I reset my password?</h3>
            <p className="text-apple-lighttext">
              To reset your password, click on the "Forgot Password" link on the login page. Enter your email address, and we'll send you a link to reset your password. Click on the link in the email and follow the instructions to create a new password.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-apple-text mb-2">How do I update my profile information?</h3>
            <p className="text-apple-lighttext">
              Log in to your account and navigate to the "Profile" section. Click on "Edit Profile" to update your personal information, skills, experience, and preferences. Don't forget to save your changes when you're done.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-apple-text mb-2">What happens after I apply for a job?</h3>
            <p className="text-apple-lighttext">
              After you apply for a job, the employer will receive your application and can review your profile. You can track the status of your applications in the "Applications" section of your account. If the employer is interested, they may contact you directly for the next steps in the hiring process.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-apple-text mb-2">How do I cancel my subscription?</h3>
            <p className="text-apple-lighttext">
              To cancel your subscription, go to the "Billing" section in your account settings. Click on "Manage Subscription" and follow the instructions to cancel. Please note that cancellations take effect at the end of your current billing cycle.
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-semibold text-apple-text mb-4">Still Need Help?</h2>
          <p className="text-apple-lighttext mb-6">
            Our support team is available to assist you with any questions or issues.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#" className="apple-button">Contact Support</a>
            <a href="#" className="bg-apple-gray text-apple-text font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition-all duration-300">
              Submit a Request
            </a>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default HelpCenter;
