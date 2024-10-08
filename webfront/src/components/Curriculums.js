import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Curriculums = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sidebarState = localStorage.getItem("isSidebarOpen");
    setSidebarOpen(sidebarState === "true");
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => {
      const newState = !prevState;
      localStorage.setItem("isSidebarOpen", newState);
      return newState;
    });
  };

  const navigate = useNavigate();

  // Sample data for the course details
  const courses = [
    {
      id: 1,
      name: "1-4 Class",
      description: "Basic skills and introductory subjects.",
    },
    {
      id: 2,
      name: "5-7 Class",
      description: "Intermediate subjects including science and math.",
    },
    {
      id: 3,
      name: "8-10 Class",
      description: "Advanced topics and preparation for high school.",
    },
  ];

  const handleCourseClick = (courseId) => {
    navigate(`/curriculums/${courseId}`); // Navigate to the detail page for the selected course
  };

  return (
    <div style={styles.container}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1 style={styles.header}>Curriculums</h1>
      <div style={styles.card}>
        <h2>Available Courses</h2>
        <ul style={styles.courseList}>
          {courses.map((course) => (
            <li key={course.id} style={styles.courseItem}>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <button
                style={styles.courseButton}
                onClick={() => handleCourseClick(course.id)}
              >
                View Detail for {course.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Styles for the Curriculums component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    width: "80%",
  },
  courseList: {
    listStyleType: "none",
    padding: 0,
  },
  courseItem: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
  },
  courseButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Curriculums;
