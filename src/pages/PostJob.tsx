
import React, { useState } from "react";
import Document from "./_document";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    description: "",
    requirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.title || !formData.company || !formData.description) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically submit the form data to your backend
    console.log("Job posting submitted:", formData);
    
    toast({
      title: "Job posted successfully!",
      description: "Your job posting has been submitted and will be reviewed shortly.",
    });
    
    // Reset form
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      description: "",
      requirements: "",
    });
  };

  return (
    <Document>
      <div className="max-w-3xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Post a Job
          </span>
          <h1 className="text-4xl font-semibold text-apple-text dark:text-white mb-4">
            Reach top talent <span className="text-apple-blue">with JobVista</span>
          </h1>
          <p className="text-apple-lighttext dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Fill your open positions quickly with our network of qualified job seekers.
          </p>
        </div>
        
        <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-apple-text dark:text-white mb-1">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:ring-apple-blue focus:border-apple-blue"
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-apple-text dark:text-white mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:ring-apple-blue focus:border-apple-blue"
                  placeholder="e.g. Acme Inc."
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-apple-text dark:text-white mb-1">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:ring-apple-blue focus:border-apple-blue"
                  placeholder="e.g. San Francisco, CA or Remote"
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-apple-text dark:text-white mb-1">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:ring-apple-blue focus:border-apple-blue"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-apple-text dark:text-white mb-1">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:ring-apple-blue focus:border-apple-blue"
                  placeholder="Describe the role, responsibilities, and what a typical day looks like"
                />
              </div>
              
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-apple-text dark:text-white mb-1">
                  Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:ring-apple-blue focus:border-apple-blue"
                  placeholder="List the skills, experience, and qualifications required"
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full bg-apple-blue hover:bg-blue-600 text-white py-2 rounded-md transition-colors">
                  Post Job
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Document>
  );
};

export default PostJob;
