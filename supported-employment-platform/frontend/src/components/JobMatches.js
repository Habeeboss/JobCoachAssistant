import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobMatches = ({ userId }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`/api/jobs/matches/${userId}`);
      setJobs(response.data);
    };
    fetchJobs();
  }, [userId]);

  return (
    <div>
      <h2>Job Matches</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobMatches;