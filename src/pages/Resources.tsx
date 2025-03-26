
import React from "react";
import Document from "./_document";

const Resources = () => {
  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Career resources and <br className="hidden md:block" />
            <span className="text-apple-blue">job search guidance</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Access tools, guides, and expert advice to help advance your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-apple-text mb-3">Resume Writing Tips</h3>
            <p className="text-apple-lighttext mb-4">
              Learn how to create a standout resume that gets noticed by employers.
            </p>
            <a href="#" className="text-apple-blue hover:underline flex items-center">
              Read Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-apple-text mb-3">Interview Preparation</h3>
            <p className="text-apple-lighttext mb-4">
              Expert advice on how to prepare for and ace your job interviews.
            </p>
            <a href="#" className="text-apple-blue hover:underline flex items-center">
              Read Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-apple-text mb-3">Salary Negotiation</h3>
            <p className="text-apple-lighttext mb-4">
              How to negotiate your salary and benefits with confidence.
            </p>
            <a href="#" className="text-apple-blue hover:underline flex items-center">
              Read Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-apple-text mb-3">Career Development</h3>
            <p className="text-apple-lighttext mb-4">
              Strategies for long-term career growth and professional development.
            </p>
            <a href="#" className="text-apple-blue hover:underline flex items-center">
              Read Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default Resources;
