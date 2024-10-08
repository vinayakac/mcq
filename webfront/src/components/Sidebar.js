import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  // Determine whether to show sidebar (e.g., don't show on login or register pages)
  const shouldShowSidebar =
    !location.pathname.includes("login") &&
    !location.pathname.includes("register");

  return (
    shouldShowSidebar && (
      <div style={styles.sidebar}>
        <nav style={styles.nav}>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link to="/dashboard" style={styles.link}>
                Dashboard
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link to="/curriculums" style={styles.link}>
                Curriculums
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link to="/courses" style={styles.link}>
                Courses
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link to="/exam-list" style={styles.link}>
                Exams
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link to="/students" style={styles.link}>
                Students
              </Link>
            </li>
            <li style={styles.listItem}>
              <button onClick={handleLogout} style={styles.logoutLink}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};

// Styles for the Sidebar
const styles = {
  sidebar: {
    position: "fixed", // Keeps the sidebar in a fixed position
    top: 0,
    left: 0,
    width: "250px",
    height: "100vh", // Full height of the viewport
    backgroundColor: "#343a40",
    color: "white",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
    zIndex: 1000, // Ensures the sidebar is on top
    overflowY: "auto", // Allows the sidebar content to scroll if it overflows
  },
  nav: {
    marginTop: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0, // Reset margin to avoid unwanted spacing
  },
  listItem: {
    marginBottom: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    display: "block",
    padding: "10px 0",
    transition: "color 0.3s ease",
  },
  logoutLink: {
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    padding: 0,
    textDecoration: "underline",
  },
};

export default Sidebar;
