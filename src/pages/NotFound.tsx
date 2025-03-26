
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Document from "./_document";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Document>
      <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in">
        <div className="glass-card p-12 text-center max-w-md">
          <div className="text-6xl font-semibold text-apple-text mb-4">404</div>
          <h1 className="text-2xl font-semibold text-apple-text mb-4">Page not found</h1>
          <p className="text-apple-lighttext mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="apple-button inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    </Document>
  );
};

export default NotFound;
