import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
      <NavLink to="/curriculums" activeClassName="active">
        Curriculums
      </NavLink>
      <NavLink to="/courses" activeClassName="active">
        Courses
      </NavLink>
      <NavLink to="/mcq-exams" activeClassName="active">
        Exams
      </NavLink>
      <NavLink to="/students" activeClassName="active">
        Students
      </NavLink>
    </div>
  );
};

export default Sidebar;