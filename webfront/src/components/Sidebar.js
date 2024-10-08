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
            {/* Dashboard link */}
            <li style={styles.listItem}>
              <Link to="/dashboard" style={styles.link}>
                Dashboard
              </Link>
            </li>
            {/* Curriculums link */}
            <li style={styles.listItem}>
              <Link to="/curriculums" style={styles.link}>
                Curriculums
              </Link>
            </li>
            {/* Courses link */}
            <li style={styles.listItem}>
              <Link to="/courses" style={styles.link}>
                Courses
              </Link>
            </li>
            {/* Exams link */}
            <li style={styles.listItem}>
              <Link to="/exam-list" style={styles.link}>
                Exams
              </Link>
            </li>
            {/* Students link */}
            <li style={styles.listItem}>
              <Link to="/students" style={styles.link}>
                Students
              </Link>
            </li>
            {/* Logout button */}
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "250px",
    height: "100%",
    backgroundColor: "#343a40",
    color: "white",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
  },
  nav: {
    marginTop: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  logoutLink: {
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    padding: 0,
    textDecoration: "underline",
  },
};

export default Sidebar;
