import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // Adjust the path as necessary

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Check localStorage for sidebar state on mount
  useEffect(() => {
    const sidebarState = localStorage.getItem("isSidebarOpen");
    setSidebarOpen(sidebarState === "true");
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isSidebarOpen", newState); // Store state in localStorage
      return newState;
    });
  };

  return (
    <div style={styles.container}>
      {/* Sidebar component with isOpen and toggle functionality */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1 style={styles.header}>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      {/* Add more dashboard content as necessary */}
      <button style={styles.toggleButton} onClick={toggleSidebar}>
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
    </div>
  );
};

// Styles for the Dashboard component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  toggleButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Dashboard;
