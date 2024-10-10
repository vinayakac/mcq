import React from "react";
import { NavLink } from "react-router-dom";
import './Layout.css'; // Ensure you have appropriate CSS for styling

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <h3>MCQ APPLICATION</h3>
        <ul>
          <li>
            <NavLink 
              to="/dashboard" 
              activeClassName="active"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/curriculums" 
              activeClassName="active"
            >
              Curriculums
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/courses" 
              activeClassName="active"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/exams" 
              activeClassName="active"
            >
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/students" 
              activeClassName="active"
            >
              Students
            </NavLink>
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
