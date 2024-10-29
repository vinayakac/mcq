// src/components/StudentDashboard.js
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; // Use Outlet for nested routing
import "./StudentDashboard.css"; // Optional: Create this CSS file for styling

const StudentDashboard = () => {
  const [message] = useState("Welcome to your Student Dashboard!"); // Removed setMessage if not used

  return (
    <div className="student-dashboard">
      <nav className="student-sidebar">
        <h3>Student Dashboard</h3>
        <ul>
          <li>
            <NavLink
              to="/student-dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join-course"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Join Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-exams"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Exams
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="student-content">
        <h2>{message}</h2>
        <Outlet /> {/* Render nested routes here */}
      </main>
    </div>
  );
};

export default StudentDashboard;
