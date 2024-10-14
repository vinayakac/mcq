
// src/components/Dashboard.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Dashboard.css'; // Ensure this file exists for styling

const Dashboard = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h1>MCQ Application</h1>
        
        {/* Add Dashboard title here */}
        <nav>
          <ul>
            <li>
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="curriculums">Curriculums</Link>
            </li>
            <li>
              <Link to="courses">Courses</Link>
            </li>
            <li>
              <Link to="mcq-exams">MCQ Exams</Link>
            </li>
            <li>
              <Link to="students">Students</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
        
        {/* Logout button at the bottom of the sidebar */}
        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </aside>
      <main className="content">
        <Outlet /> {/* This will render the nested routes */}
        {/* Default content if no specific route is selected */}
        <div className="blank-page">
          {/* Additional content can go here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
