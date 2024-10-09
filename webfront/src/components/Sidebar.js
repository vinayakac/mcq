// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import sidebar styles

function Sidebar() {
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
      </ul>
    </div>
  );
}

export default Sidebar;
