
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Job } from "../data/jobs";

interface JobDetailProps {
  job: Job | undefined;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  const navigate = useNavigate();
  
  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-semibold text-apple-text">Job not found</h2>
        <p className="text-apple-lighttext mt-2">The job you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="apple-button mt-6">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-apple-lighttext hover:text-apple-blue transition-colors mb-8"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to results
      </button>
      
      <div className="glass-card p-8 mb-8 animate-scale-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center">
            <div className="h-16 w-16 bg-apple-gray rounded-md overflow-hidden flex items-center justify-center mr-4">
              {job.companyLogo ? (
                <img 
                  src={job.companyLogo} 
                  alt={`${job.company} logo`} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-apple-text font-semibold text-xl">
                  {job.company.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-apple-text">{job.title}</h1>
              <div className="flex items-center mt-1">
                <span className="text-apple-lighttext">{job.company}</span>
                {job.verified && (
                  <span className="ml-2 inline-flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-apple-blue" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="ml-1 text-xs text-apple-blue">Verified</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <button className="apple-button">
            Apply Now
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-6 border-b border-gray-100">
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-apple-lighttext mr-3" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <div className="text-sm text-apple-lighttext">Location</div>
              <div className="font-medium text-apple-text">
                {job.location}
                {job.remote && <span className="ml-1">(Remote)</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-apple-lighttext mr-3" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <div>
              <div className="text-sm text-apple-lighttext">Job Type</div>
              <div className="font-medium text-apple-text">{job.type}</div>
            </div>
          </div>
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-apple-lighttext mr-3" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <div>
              <div className="text-sm text-apple-lighttext">Salary</div>
              <div className="font-medium text-apple-text">{job.salary || "Not specified"}</div>
            </div>
          </div>
        </div>
        
        <div className="prose prose-apple max-w-none">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-apple-text mb-4">About the Role</h2>
            <div className="text-apple-text leading-relaxed whitespace-pre-line">
              {job.description}
            </div>
          </div>
          
          {job.responsibilities && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-apple-text mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-apple-text">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {job.requirements && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-apple-text mb-4">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-apple-text">
                {job.requirements.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {job.benefits && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-apple-text mb-4">Benefits</h2>
              <ul className="list-disc pl-5 space-y-2 text-apple-text">
                {job.benefits.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center glass-card p-6 animate-fade-up">
        <div>
          <h3 className="text-lg font-semibold text-apple-text">Interested in this job?</h3>
          <p className="text-apple-lighttext">Apply now and we'll help you get in touch with {job.company}</p>
        </div>
        <button className="apple-button mt-4 md:mt-0">
          Apply for this Position
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
