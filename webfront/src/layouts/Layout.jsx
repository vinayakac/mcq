// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import './Layout.css'; // Ensure you have appropriate CSS for styling

const Layout = ({ children }) => {
  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('userToken'); // Replace 'userToken' with your token key
    window.location.href = '/'; // Redirect to the homepage or login page
  };

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
          <li>
            <Link to="/" onClick={handleLogout} className="logout-link">Logout</Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
