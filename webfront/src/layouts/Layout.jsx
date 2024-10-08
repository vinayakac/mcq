import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.js"; // Ensure the correct import path for Sidebar

const Layout = ({ showSidebar }) => {
  return (
    <div style={styles.container}>
      {showSidebar && <Sidebar />} {/* Sidebar will always be shown if showSidebar is true */}
      <div style={styles.content}>
        <Outlet /> {/* This will render the nested routes' content */}
      </div>
    </div>
  );
};

// Styles for Layout
const styles = {
  container: {
    display: "flex",
  },
  content: {
    flex: 1,
    marginLeft: "250px", // This margin ensures the content doesn't overlap the sidebar
    padding: "20px",
  },
};

export default Layout;