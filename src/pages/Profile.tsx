
import React, { useState } from "react";
import Document from "./_document";
import { useApplicationStore, ApplicationStatus } from "../utils/applicationStore";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// User profile interface
interface UserProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
}

// Custom status badge component
const StatusBadge = ({ status }: { status: ApplicationStatus }) => {
  const statusStyles: Record<ApplicationStatus, { bg: string; text: string }> = {
    applied: { bg: "bg-blue-100", text: "text-blue-800" },
    screening: { bg: "bg-purple-100", text: "text-purple-800" },
    interview: { bg: "bg-yellow-100", text: "text-yellow-800" },
    assessment: { bg: "bg-indigo-100", text: "text-indigo-800" },
    offer: { bg: "bg-green-100", text: "text-green-800" },
    rejected: { bg: "bg-red-100", text: "text-red-800" }
  };

  const statusLabels: Record<ApplicationStatus, string> = {
    applied: "Applied",
    screening: "Screening",
    interview: "Interview",
    assessment: "Assessment",
    offer: "Offer",
    rejected: "Rejected"
  };

  const style = statusStyles[status];
  
  return (
    <span className={`inline-block px-2 py-1 text-xs ${style.bg} ${style.text} rounded`}>
      {statusLabels[status]}
    </span>
  );
};

const ApplicationTimeline = ({ status }: { status: ApplicationStatus }) => {
  const statuses: ApplicationStatus[] = ['applied', 'screening', 'interview', 'assessment', 'offer'];
  const currentIndex = statuses.indexOf(status);
  
  // Handle rejected status separately
  if (status === 'rejected') {
    return (
      <div className="mt-3 relative">
        <div className="h-1 w-full bg-gray-200 rounded">
          <div className="h-1 bg-red-400 rounded" style={{ width: '100%' }}></div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-apple-lighttext">
          <span>Applied</span>
          <span className="text-red-500 font-medium">Rejected</span>
        </div>
      </div>
    );
  }
  
  // Calculate progress percentage
  const progressPercentage = currentIndex >= 0 ? (currentIndex / (statuses.length - 1)) * 100 : 0;
  
  return (
    <div className="mt-3 relative">
      <div className="h-1 w-full bg-gray-200 rounded">
        <div 
          className="h-1 bg-apple-blue rounded transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-apple-lighttext">
        <span>Applied</span>
        <span>Screening</span>
        <span>Interview</span>
        <span>Assessment</span>
        <span>Offer</span>
      </div>
    </div>
  );
};

const Profile = () => {
  const { applications, updateApplicationStatus } = useApplicationStore();
  const { toast } = useToast();
  
  // Default user profile data (in a real app, this would come from a database)
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    title: "Software Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    about: "Experienced software developer with a passion for creating elegant, efficient solutions to complex problems. I specialize in full-stack development with modern technologies."
  });
  
  // Temporary state for editing
  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  
  // Function to handle profile edit
  const handleEditProfile = () => {
    setEditedProfile({...profile});
    setIsEditing(true);
  };
  
  // Function to handle profile update
  const handleUpdateProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };
  
  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Function to simulate changing application status (for demo purposes)
  const handleAdvanceStatus = (jobId: string, currentStatus: ApplicationStatus) => {
    const statusOrder: ApplicationStatus[] = ['applied', 'screening', 'interview', 'assessment', 'offer'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    
    if (currentIndex < statusOrder.length - 1) {
      updateApplicationStatus(jobId, statusOrder[currentIndex + 1]);
    }
  };
  
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
              {!isEditing ? (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-apple-gray rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-apple-lighttext" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-apple-text">{profile.name}</h2>
                  <p className="text-apple-lighttext">{profile.title}</p>
                  <button 
                    onClick={handleEditProfile}
                    className="mt-4 text-sm text-apple-blue hover:underline"
                  >
                    Edit Profile
                  </button>

                  <div className="mt-6 w-full border-t border-gray-200 pt-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-medium text-apple-text">Email</h3>
                        <p className="text-sm text-apple-lighttext">{profile.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-apple-text">Phone</h3>
                        <p className="text-sm text-apple-lighttext">{profile.phone}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-apple-text">Location</h3>
                        <p className="text-sm text-apple-lighttext">{profile.location}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-apple-text">About</h3>
                        <p className="text-sm text-apple-lighttext">{profile.about}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <h2 className="text-xl font-semibold text-apple-text mb-4 text-center">Edit Profile</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-apple-text mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={editedProfile.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-text mb-1">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={editedProfile.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-text mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={editedProfile.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-text mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={editedProfile.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-text mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={editedProfile.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-apple-text mb-1">About</label>
                      <textarea
                        name="about"
                        value={editedProfile.about}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-blue"
                      />
                    </div>
                    <div className="flex justify-end space-x-2 pt-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 text-sm text-apple-text bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdateProfile}
                        className="px-4 py-2 text-sm text-white bg-apple-blue rounded-md hover:bg-blue-600"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {!isEditing && (
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h3 className="text-md font-semibold text-apple-text mb-2">Account</h3>
                  <ul className="space-y-2">
                    <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Resume Manager</button></li>
                    <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Job Preferences</button></li>
                    <li><button className="text-apple-lighttext hover:text-apple-blue w-full text-left">Privacy Settings</button></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-semibold text-apple-text mb-4">Your Applications</h3>
              <div className="space-y-6">
                {applications.length > 0 ? (
                  applications.map((application) => (
                    <div key={application.job.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-apple-text">{application.job.title}</h4>
                          <p className="text-sm text-apple-lighttext">{application.job.company} • {application.job.location}</p>
                          <p className="text-xs text-apple-lighttext mt-1">
                            Applied on {new Date(application.appliedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <StatusBadge status={application.status} />
                      </div>
                      
                      <ApplicationTimeline status={application.status} />
                      
                      <div className="flex mt-4 gap-2">
                        <Link to={`/job/${application.job.id}`} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                          View Job
                        </Link>
                        {/* Demo buttons - in a real app, these would be driven by employer actions */}
                        {application.status !== 'offer' && application.status !== 'rejected' && (
                          <button 
                            onClick={() => handleAdvanceStatus(application.job.id, application.status)}
                            className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200"
                          >
                            Advance Status (Demo)
                          </button>
                        )}
                        {application.status !== 'rejected' && (
                          <button 
                            onClick={() => updateApplicationStatus(application.job.id, 'rejected')}
                            className="inline-block px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200"
                          >
                            Set Rejected (Demo)
                          </button>
                        )}
                      </div>
                      
                      <div className="mt-3 text-xs text-apple-lighttext">
                        <p>Last updated: {new Date(application.lastUpdated).toLocaleString()}</p>
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
