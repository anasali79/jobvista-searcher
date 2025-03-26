
import React from "react";
import Document from "./_document";
import { useApplicationStore } from "../utils/applicationStore";
import { Link } from "react-router-dom";

const Profile = () => {
  const { appliedJobs } = useApplicationStore();

  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            My Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Manage Your <span className="text-apple-blue">Professional Profile</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Update your information, manage your resume, and track your job applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="glass-card p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-apple-gray rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-apple-lighttext" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-apple-text">John Doe</h2>
                <p className="text-apple-lighttext">Software Developer</p>
                <button className="mt-4 text-sm text-apple-blue hover:underline">Edit Profile</button>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="text-md font-semibold text-apple-text mb-2">Account</h3>
                <ul className="space-y-2">
                  <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Profile Settings</button></li>
                  <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Resume Manager</button></li>
                  <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Job Preferences</button></li>
                  <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Privacy Settings</button></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-semibold text-apple-text mb-4">Your Applications</h3>
              <div className="space-y-4">
                {appliedJobs.length > 0 ? (
                  appliedJobs.map((job) => (
                    <div key={job.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-medium text-apple-text">{job.title}</h4>
                      <p className="text-sm text-apple-lighttext">{job.company} • {job.location}</p>
                      <div className="flex mt-2 gap-2">
                        <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Applied</span>
                        <Link to={`/job/${job.id}`} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                          View Job
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-apple-lighttext mb-3">You haven't applied to any jobs yet.</p>
                    <Link to="/" className="apple-button">Browse Jobs</Link>
                  </div>
                )}
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-apple-text mb-4">Saved Jobs</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium text-apple-text">Full Stack Developer</h4>
                  <p className="text-sm text-apple-lighttext">Netflix • Remote</p>
                  <p className="text-sm text-apple-lighttext">Saved 3 days ago</p>
                </div>
                <div>
                  <h4 className="font-medium text-apple-text">iOS Developer</h4>
                  <p className="text-sm text-apple-lighttext">Spotify • New York, NY</p>
                  <p className="text-sm text-apple-lighttext">Saved 1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Document>
  );
};

export default Profile;
