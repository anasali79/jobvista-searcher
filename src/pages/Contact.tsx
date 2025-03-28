
import React from "react";
import Document from "./_document";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <Document>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-apple-blue bg-opacity-10 text-apple-blue rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-apple-text mb-4">
            Get in <span className="text-apple-blue">Touch</span>
          </h1>
          <p className="text-apple-lighttext text-lg max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-apple-blue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Phone</h3>
            <p className="text-apple-lighttext">
              +1 (800) 555-0123
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-apple-blue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Email</h3>
            <p className="text-apple-lighttext">
              support@jobvista.com
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-apple-blue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h3 className="text-xl font-semibold text-apple-text mb-2">Location</h3>
            <p className="text-apple-lighttext">
              123 Tech Avenue, San Francisco, CA 94107
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-apple-text mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-apple-text mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full search-field" 
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-text mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full search-field" 
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-apple-text mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full search-field" 
                placeholder="Subject of your message"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-apple-text mb-1">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full search-field" 
                placeholder="Your message"
                required
              />
            </div>
            
            <button type="submit" className="apple-button">Send Message</button>
          </form>
        </div>
      </div>
    </Document>
  );
};

export default Contact;
