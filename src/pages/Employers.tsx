
import React from "react";
import Document from "./_document";

const Employers = () => {
  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            For Employers
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Find the right talent <br className="hidden md:block" />
            <span className="text-apple-blue">for your company</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Post jobs, search resumes, and find the perfect candidates to join your team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-apple-blue mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Easy Job Posting</h3>
            <p className="text-apple-lighttext">
              Create and post job listings quickly with our intuitive interface.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-apple-blue mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Applicant Tracking</h3>
            <p className="text-apple-lighttext">
              Manage applications efficiently and communicate with candidates.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-apple-blue mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Premium Support</h3>
            <p className="text-apple-lighttext">
              Get personalized assistance from our dedicated support team.
            </p>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default Employers;
