
import React from "react";
import { Link } from "react-router-dom";
import { Job } from "../data/jobs";

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  // Calculate animation delay based on index
  const animationDelay = `${index * 0.05}s`;

  return (
    <Link 
      to={`/job/${job.id}`} 
      className="block"
      style={{ animationDelay }}
    >
      <div className="glass-card p-6 h-full transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] animate-fade-up" style={{ animationDelay }}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 h-12 w-12 bg-apple-gray dark:bg-gray-700 rounded-md overflow-hidden flex items-center justify-center">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`} 
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-apple-text dark:text-white font-semibold text-lg">
                {job.company.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="subtitle dark:text-gray-300">{job.company}</div>
            <h3 className="text-lg font-semibold text-apple-text dark:text-white truncate mb-1">{job.title}</h3>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3 text-sm">
              <div className="flex items-center text-apple-lighttext dark:text-gray-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-1" 
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
                {job.location}
              </div>
              {job.remote && (
                <div className="flex items-center text-apple-lighttext dark:text-gray-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  </svg>
                  Remote
                </div>
              )}
              <div className="flex items-center text-apple-lighttext dark:text-gray-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 mr-1" 
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
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                {job.type}
              </div>
            </div>
          </div>
          {job.featured && (
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-apple-blue bg-opacity-10 text-apple-blue dark:bg-apple-blue/20">
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="mt-4">
          {job.tags && job.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {job.tags.slice(0, 3).map((tag, i) => (
                <span 
                  key={i} 
                  className="inline-block px-2 py-1 text-xs rounded-md bg-apple-gray dark:bg-gray-700 text-apple-lighttext dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {job.tags.length > 3 && (
                <span className="inline-block px-2 py-1 text-xs rounded-md bg-transparent text-apple-lighttext dark:text-gray-300">
                  +{job.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="text-sm text-apple-lighttext dark:text-gray-300">
            {job.salary && (
              <span className="font-medium text-apple-text dark:text-white">{job.salary}</span>
            )}
          </div>
          <div className="text-sm text-apple-lighttext dark:text-gray-300">
            {job.postedDate}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
