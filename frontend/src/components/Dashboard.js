// src/components/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming useAuth is a custom hook to access auth context
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { auth } = useAuth(); // Access the auth context which includes user and token
  
  return (
    <div>
    <h1>Welcome to the Dashboard, {auth.user.username}</h1>
    <nav>
      <ul>
        <li><Link to="/create-logistics-request">Create Logistics Request</Link></li>
        <li><Link to="/view-logistics-requests">View My Logistics Requests</Link></li>
        <li><Link to="/bid-management">Manage Bids</Link></li>
      </ul>
    </nav>
  </div>
  );
};

export default Dashboard;
