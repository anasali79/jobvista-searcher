
import React, { useState } from "react";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { jobs, filterJobs } from "../data/jobs";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredJobs(filterJobs(query));
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Find Your Next Opportunity
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Discover the perfect job <br className="hidden md:block" /> 
            <span className="text-apple-blue">for your career</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Thousands of jobs from top companies in tech, design, 
            marketing, and more. Find the right opportunity for you.
          </p>
        </div>
        
        <div className="mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {searchQuery && (
          <div className="mb-6 text-apple-lighttext animate-fade-in">
            Found {filteredJobs.length} jobs matching "{searchQuery}"
          </div>
        )}
        
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-card animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-apple-lighttext mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
              <path d="M8 11h6" />
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">No jobs found</h3>
            <p className="text-apple-lighttext">
              We couldn't find any jobs matching your search criteria. <br />
              Try adjusting your search or browsing all available jobs.
            </p>
            <button
              onClick={() => handleSearch("")}
              className="apple-button mt-6"
            >
              View All Jobs
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
