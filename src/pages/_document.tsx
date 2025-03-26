
import React from "react";
import Layout from "../components/Layout";

// This is a wrapper component to mimic Next.js _document.js functionality
interface DocumentProps {
  children: React.ReactNode;
}

const Document: React.FC<DocumentProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Document;
