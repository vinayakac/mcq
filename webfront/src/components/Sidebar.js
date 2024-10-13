import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>MCQ APP</h3>
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
          <Link to="/exams" style={styles.link}>
            Exams
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/students" style={styles.link}>
            Students
          </Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#3b3f5c",
    color: "white",
    padding: "20px",
    height: "100vh",
    position: "fixed",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    margin: "15px 0",
  },
  link: {
    textDecoration: "none",
    color: "#d1d1d1",
    display: "block",
    padding: "10px",
    borderRadius: "5px",
    transition: "background 0.3s, color 0.3s",
  },
  linkHover: {
    backgroundColor: "#5a5f7d",
    color: "grey",
  },
};

export default Sidebar;
