
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Document from "./_document";
import JobDetailComponent from "../components/JobDetail";
import { getJobById } from "../data/jobs";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = id ? getJobById(id) : undefined;
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Document>
      <JobDetailComponent job={job} />
    </Document>
  );
};

export default JobDetail;
