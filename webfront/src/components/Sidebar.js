// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import "./Sidebar.css"; // Import sidebar styles

function Sidebar() {
  const handleLogout = () => {
    // Implement your logout logic here, e.g., clear tokens or redirect to login
    localStorage.removeItem("userToken"); // Replace 'userToken' with your token key
    window.location.href = "/"; // Redirect to the homepage or login page
  };

  return (
    <div className="sidebar">
      <h3>MCQ APP</h3>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/curriculums">Curriculums</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/exams">Exams</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout} className="logout-link">
            Logout
          </Link>{" "}
          {/* Logout link */}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
