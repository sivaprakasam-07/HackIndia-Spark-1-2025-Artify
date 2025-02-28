// filepath: frontend/src/pages/admin/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const fetchFreelancers = async () => {
      const response = await axios.get('/api/admin/freelancers?status=Pending');
      setFreelancers(response.data);
    };
    fetchFreelancers();
  }, []);

  const handleApprove = async (id) => {
    await axios.post(`/api/admin/approve-freelancer/${id}`);
    setFreelancers(freelancers.filter(freelancer => freelancer._id !== id));
  };

  const handleReject = async (id) => {
    await axios.post(`/api/admin/reject-freelancer/${id}`);
    setFreelancers(freelancers.filter(freelancer => freelancer._id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Pending Freelancer Approvals</h2>
      <ul>
        {freelancers.map(freelancer => (
          <li key={freelancer._id}>
            {freelancer.name} - {freelancer.email}
            <button onClick={() => handleApprove(freelancer._id)}>Approve</button>
            <button onClick={() => handleReject(freelancer._id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;