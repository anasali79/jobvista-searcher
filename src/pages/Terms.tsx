
import React from "react";
import Document from "./_document";

const Terms = () => {
  return (
    <Document>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Terms of Service
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Last updated: June 1, 2023
          </p>
        </div>
        
        <div className="glass-card p-8">
          <div className="prose prose-sm max-w-none">
            <h2 className="text-2xl font-semibold text-apple-text mb-4">1. Introduction</h2>
            <p className="text-apple-lighttext mb-6">
              Welcome to JobVista. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use JobVista if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">2. License to Use</h2>
            <p className="text-apple-lighttext mb-6">
              Unless otherwise stated, JobVista and/or its licensors own the intellectual property rights for all material on JobVista. All intellectual property rights are reserved. You may view and/or print pages from https://jobvista.com for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">3. Restrictions</h2>
            <p className="text-apple-lighttext mb-4">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-apple-lighttext mb-6">
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Publicly performing and/or showing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
              <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">4. User Account</h2>
            <p className="text-apple-lighttext mb-6">
              If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with the account. We reserve the right to terminate accounts, remove or edit content at our sole discretion.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">5. Services</h2>
            <p className="text-apple-lighttext mb-6">
              JobVista provides a platform for job seekers to search for job opportunities and for employers to post job openings. We do not guarantee the accuracy, completeness, validity, or timeliness of information listed by employers. We are not responsible for any decisions, for whatever reason, made by an employer.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">6. Limitation of Liability</h2>
            <p className="text-apple-lighttext mb-6">
              In no event shall JobVista, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise. JobVista shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">7. Indemnification</h2>
            <p className="text-apple-lighttext mb-6">
              You hereby indemnify to the fullest extent JobVista from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-apple-text mb-4">8. Governing Law & Jurisdiction</h2>
            <p className="text-apple-lighttext mb-6">
              These Terms will be governed by and construed in accordance with the laws of the State of California, and you submit to the non-exclusive jurisdiction of the state and federal courts located in California for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default Terms;
