
import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-apple-text">
      <header className="sticky top-0 bg-white/80 dark:bg-apple-text/80 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-apple-text dark:bg-white text-white dark:text-apple-text rounded-lg p-1">
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
              <span className="text-apple-text dark:text-white font-semibold text-xl">JobVista</span>
            </Link>
            <nav className="flex-1 flex justify-center max-w-md ml-8">
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-apple-text dark:text-white hover:text-apple-blue transition-colors duration-300">
                  Browse Jobs
                </Link>
                <Link to="/employers" className="text-apple-text dark:text-white hover:text-apple-blue transition-colors duration-300">
                  For Employers
                </Link>
                <Link to="/resources" className="text-apple-text dark:text-white hover:text-apple-blue transition-colors duration-300">
                  Resources
                </Link>
                <Link to="/profile" className="text-apple-text dark:text-white hover:text-apple-blue transition-colors duration-300">
                  My Profile
                </Link>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/post-job" className="hidden md:block apple-button">Post a Job</Link>
              <button 
                className="md:hidden p-2 rounded-md bg-apple-gray dark:bg-gray-700"
                onClick={toggleMobileMenu} 
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
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
                  className="w-5 h-5 text-apple-text dark:text-white"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-apple-text border-b border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="px-4 py-3 space-y-2">
              <Link 
                to="/" 
                className="block py-2 px-3 text-apple-text dark:text-white hover:bg-apple-gray dark:hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Jobs
              </Link>
              <Link 
                to="/employers" 
                className="block py-2 px-3 text-apple-text dark:text-white hover:bg-apple-gray dark:hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Employers
              </Link>
              <Link 
                to="/resources" 
                className="block py-2 px-3 text-apple-text dark:text-white hover:bg-apple-gray dark:hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/profile" 
                className="block py-2 px-3 text-apple-text dark:text-white hover:bg-apple-gray dark:hover:bg-gray-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link 
                to="/post-job" 
                className="block py-2 px-3 bg-apple-blue text-white rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Post a Job
              </Link>
              <div className="py-2 px-3">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="page-container dark:text-white">{children}</main>
      <footer className="py-12 bg-apple-gray dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-apple-text dark:text-white mb-4">For Job Seekers</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Browse Jobs</Link></li>
                <li><Link to="/job-alerts" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Job Alerts</Link></li>
                <li><Link to="/profile" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">My Profile</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text dark:text-white mb-4">For Employers</h3>
              <ul className="space-y-3">
                <li><Link to="/post-job" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Post a Job</Link></li>
                <li><Link to="/employers" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Search Resumes</Link></li>
                <li><Link to="/employers" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Employer Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text dark:text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-apple-text dark:text-white mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Help Center</Link></li>
                <li><Link to="/privacy-policy" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-apple-lighttext dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-apple-lighttext dark:text-gray-300">© {new Date().getFullYear()} JobVista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
