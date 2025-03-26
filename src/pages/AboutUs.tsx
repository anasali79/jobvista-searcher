
import React from "react";
import Document from "./_document";

const AboutUs = () => {
  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Our Mission at <span className="text-apple-blue">JobVista</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Connecting talented professionals with companies that value their skills and potential.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-semibold text-apple-text mb-4">Our Story</h2>
          <p className="text-apple-lighttext mb-4">
            JobVista was founded in 2020 with a simple mission: to transform how people find jobs and how companies find talent. We noticed that traditional job platforms were focused on volume rather than quality matches, leading to frustration for both job seekers and employers.
          </p>
          <p className="text-apple-lighttext mb-4">
            Our platform uses advanced matching algorithms to ensure that job seekers find opportunities that align with their skills, career goals, and work preferences. For employers, we provide access to qualified candidates who are genuinely interested in their openings.
          </p>
          <p className="text-apple-lighttext">
            Today, JobVista serves thousands of job seekers and employers across various industries, with a focus on technology, design, marketing, and business operations. We're constantly improving our platform to make the job search and hiring process more efficient and enjoyable for everyone involved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-apple-blue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Modern Platform</h3>
            <p className="text-apple-lighttext">
              Built with the latest technology to provide a seamless experience.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-apple-blue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Community Focus</h3>
            <p className="text-apple-lighttext">
              We prioritize building a supportive community for job seekers.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-apple-blue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Quality Matches</h3>
            <p className="text-apple-lighttext">
              Our algorithms create meaningful connections between talent and employers.
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-apple-text mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-apple-gray rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-apple-text">Sarah Johnson</h3>
              <p className="text-sm text-apple-lighttext">CEO & Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-apple-gray rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-apple-text">David Chen</h3>
              <p className="text-sm text-apple-lighttext">CTO & Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-apple-gray rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-apple-text">Jessica Kim</h3>
              <p className="text-sm text-apple-lighttext">Head of Product</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-apple-gray rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-apple-text">Michael Patel</h3>
              <p className="text-sm text-apple-lighttext">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default AboutUs;
