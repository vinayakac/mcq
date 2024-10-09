import React from "react";
import { Link } from "react-router-dom";
import './Layout.css'; // Ensure you have appropriate CSS for styling

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <h2>MCQ APP</h2>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/curriculums">Curriculums</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/exams">Exams</Link></li>
          <li><Link to="/students">Students</Link></li>
        </ul>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;