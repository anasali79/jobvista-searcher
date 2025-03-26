
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-apple-text text-white rounded-lg p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M20 7h-4a2 2 0 0 0-2 2v.5A2.5 2.5 0 0 0 16.5 12H18a2 2 0 0 1 2 2v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
                  <path d="M16 16.5V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h.5" />
                  <path d="M8 7.5A2.5 2.5 0 0 1 10.5 5H16" />
                  <path d="M11 7V5" />
                </svg>
              </div>
              <span className="text-apple-text font-semibold text-xl">JobVista</span>
            </Link>
            <nav className="flex-1 flex justify-center max-w-md ml-8">
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-apple-text hover:text-apple-blue transition-colors duration-300">
                  Browse Jobs
                </Link>
                <a href="#" className="text-apple-text hover:text-apple-blue transition-colors duration-300">
                  For Employers
                </a>
                <a href="#" className="text-apple-text hover:text-apple-blue transition-colors duration-300">
                  Resources
                </a>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block apple-button">Post a Job</button>
              <button className="md:hidden p-2 rounded-md bg-apple-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="page-container">{children}</main>
      <footer className="py-12 bg-apple-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-apple-text mb-4">For Job Seekers</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Job Alerts</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">My Profile</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text mb-4">For Employers</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Post a Job</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Search Resumes</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Employer Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-apple-lighttext hover:text-apple-blue transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-apple-lighttext">© {new Date().getFullYear()} JobVista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
