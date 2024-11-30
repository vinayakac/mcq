import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [joinedCourses] = useState([1, 2]); // Example joined courses

  return (
    <div className="student-dashboard">
      <nav className="student-sidebar">
        <h3>Student Dashboard</h3>
        <ul>
          <li>
            <NavLink
              to="/student-dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
              end // Ensure only exact match for dashboard
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student-dashboard/join-course"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Join Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student-dashboard/my-exams"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Exams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/student-dashboard/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="student-content">
        <Outlet context={{ joinedCourses }} />
      </main>
    </div>
  );
};

export default StudentDashboard;
