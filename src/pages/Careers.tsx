
import React from "react";
import Document from "./_document";

const Careers = () => {
  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Careers at JobVista
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Join Our <span className="text-apple-blue">Team</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Help us transform how people find their dream jobs and how companies find great talent.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-semibold text-apple-text mb-4">Why Work With Us?</h2>
          <p className="text-apple-lighttext mb-6">
            At JobVista, we're passionate about creating meaningful connections between talented individuals and forward-thinking companies. Our team is dedicated to building innovative solutions that make the job search and hiring process more efficient, transparent, and enjoyable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-apple-blue flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h3 className="font-medium text-apple-text">Meaningful Work</h3>
                <p className="text-sm text-apple-lighttext">Help people find jobs they love and companies find talent they need.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-apple-blue flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h3 className="font-medium text-apple-text">Growth Opportunities</h3>
                <p className="text-sm text-apple-lighttext">Develop your skills and advance your career in a supportive environment.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-apple-blue flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h3 className="font-medium text-apple-text">Remote-First Culture</h3>
                <p className="text-sm text-apple-lighttext">Work from anywhere with flexible hours and a focus on results.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-apple-blue flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h3 className="font-medium text-apple-text">Competitive Benefits</h3>
                <p className="text-sm text-apple-lighttext">Health insurance, retirement plans, and generous paid time off.</p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-apple-text mb-6 text-center">Open Positions</h2>
        <div className="space-y-6 mb-12">
          <div className="glass-card p-6">
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-apple-text mb-1">Senior Frontend Developer</h3>
                <p className="text-apple-lighttext mb-4 md:mb-0">Remote • Full-time</p>
              </div>
              <button className="apple-button">Apply Now</button>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-apple-text mb-1">UX/UI Designer</h3>
                <p className="text-apple-lighttext mb-4 md:mb-0">Remote • Full-time</p>
              </div>
              <button className="apple-button">Apply Now</button>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-apple-text mb-1">Backend Engineer</h3>
                <p className="text-apple-lighttext mb-4 md:mb-0">Remote • Full-time</p>
              </div>
              <button className="apple-button">Apply Now</button>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-apple-text mb-1">Customer Success Manager</h3>
                <p className="text-apple-lighttext mb-4 md:mb-0">Remote • Full-time</p>
              </div>
              <button className="apple-button">Apply Now</button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-apple-lighttext mb-4">Don't see a position that matches your skills?</p>
          <button className="apple-button">Send General Application</button>
        </div>
      </div>
    </Document>
  );
};

export default Careers;
