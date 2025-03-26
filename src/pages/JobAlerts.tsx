
import React from "react";
import Document from "./_document";

const JobAlerts = () => {
  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Job Alerts
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Stay Updated on <span className="text-apple-blue">New Opportunities</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Set up personalized job alerts to receive notifications about new job postings that match your preferences.
          </p>
        </div>
        
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-apple-text mb-6">Create Job Alert</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-apple-text mb-1">Keywords</label>
              <input 
                type="text" 
                id="keywords" 
                className="w-full search-field" 
                placeholder="Job title, skills, or company"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-apple-text mb-1">Location</label>
              <input 
                type="text" 
                id="location" 
                className="w-full search-field" 
                placeholder="City, state, or remote"
              />
            </div>
            
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-apple-text mb-1">Alert Frequency</label>
              <select id="frequency" className="w-full search-field">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="instant">Instant</option>
              </select>
            </div>
            
            <button type="submit" className="apple-button w-full">Create Alert</button>
          </form>
        </div>
      </div>
    </Document>
  );
};

export default JobAlerts;
