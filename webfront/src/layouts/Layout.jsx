import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Ensure the correct import path for Sidebar

const Layout = () => {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.content}>
        <Outlet /> {/* This renders the child components/pages */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", // Use flexbox to align items
    minHeight: "100vh", // Ensure the container takes full viewport height
  },
  content: {
    marginLeft: "250px", // Leave space for the sidebar
    padding: "20px",
    flex: 1, // Allow the content area to take the remaining space
    overflowY: "auto", // Allow scrolling in the content area
  },
};

export default Layout;
