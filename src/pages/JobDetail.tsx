
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
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
    <Layout>
      <JobDetailComponent job={job} />
    </Layout>
  );
};

export default JobDetail;
