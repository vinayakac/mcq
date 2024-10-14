import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const location = useLocation(); // Get the current location from React Router

  // Function to check if the link is active
  const isActive = (path) => {
    // Check if the current path is equal to the path or starts with it
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="sidebar">
      <h3>MCQ APP</h3>
      <ul>
        <li>
          <Link to="/dashboard" className={isActive("/dashboard") ? "active" : ""}>Dashboard</Link>
        </li>
        <li>
          <Link to="/curriculums" className={isActive("/curriculums") ? "active" : ""}>Curriculums</Link>
        </li>
        <li>
          <Link to="/courses" className={isActive("/courses") ? "active" : ""}>Courses</Link>
        </li>
        <li>
          <Link to="/exams" className={isActive("/exams") ? "active" : ""}>Exams</Link>
        </li>
        <li>
          <Link to="/students" className={isActive("/students") ? "active" : ""}>Students</Link>
        </li>
        <li>
          <Link to="/login" className={isActive("/login") ? "active" : ""}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
