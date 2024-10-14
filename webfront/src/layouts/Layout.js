// src/layouts/Layout.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css'; // Add your CSS file for styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Sidebar</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/curriculums" activeClassName="active">Curriculums</NavLink>
            </li>
            <li>
              <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/exams" activeClassName="active">Exams</NavLink>
            </li> 
            
            <li>
              <NavLink to="/mcqexams" activeClassName="active">MCQExams</NavLink>
            </li>
            <li>
              <NavLink to="/students" activeClassName="active">Students</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
