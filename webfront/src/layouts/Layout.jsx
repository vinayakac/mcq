// src/layouts/Layout.js
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Layout.css"; // Import the CSS file

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout-container">
      {/* Header */}
      <header className="layout-header">
        <h1>Computer Education</h1>
      </header>

      <div className="layout-body">
        {/* Sidebar */}
        <Sidebar currentPath={location.pathname} />
        {/* Main Content */}
        <div className="content">
          {children} {/* Use children instead of component */}
        </div>
      </div>

      {/* Footer */}
      <footer className="layout-footer">
        <p>© 2024 MCQ Management Application.</p>
      </footer>
    </div>
  );
};

export default Layout;
