// src/components/StudentLayout.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; // Use Outlet for nested routing
import './StudentLayout.css'; // Optional: Create this CSS file for styling

const StudentLayout = () => {
  return (
    <div className="student-layout">
      <nav className="student-sidebar">
        <h3>Student MCQ</h3>
        <ul>
          <li>
            <NavLink to="/student-dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/join-course" activeClassName="active">
              Join Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-exams" activeClassName="active">
              My Exams
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="student-content">
        <Outlet /> {/* Render nested routes here */}
      </main>
    </div>
  );
};

export default StudentLayout;
