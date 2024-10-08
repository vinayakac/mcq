import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};

  const students = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Samuel Green" },
  ];

  const exams = ["Exam 1", "Exam 2", "Exam 3", "Exam 4", "Exam 5"];

  if (!course) {
    return (
      <div style={styles.error}>
        No course selected. Please select a course to view details.
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const handleConductExam = (exam) => {
    navigate("/exam", { state: { exam } });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Course: {course}</h1>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Students</h2>
        <ul style={styles.studentList}>
          {students.map((student, index) => (
            <li key={index} style={styles.studentName}>
              {student.name}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Exams</h2>
        <div style={styles.examButtonContainer}>
          {exams.map((exam, index) => (
            <button
              key={index}
              style={styles.examButton}
              onClick={() => handleConductExam(exam)}
              aria-label={`Conduct ${exam}`}
            >
              Conduct {exam}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles for the CourseDetail component
const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#333",
    borderBottom: "2px solid #5bc0de",
    paddingBottom: "10px",
  },
  subHeader: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#5bc0de",
  },
  section: {
    marginBottom: "30px",
    textAlign: "left",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  studentList: {
    listStyleType: "none",
    padding: 0,
  },
  studentName: {
    fontSize: "1.2rem",
    color: "#333",
    padding: "8px 0",
    borderBottom: "1px solid #ddd",
  },
  examButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  examButton: {
    padding: "12px 25px",
    fontSize: "1rem",
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "10px 0",
    transition: "background-color 0.3s",
  },
  error: {
    color: "red",
    fontSize: "1.5rem",
    marginTop: "20px",
  },
};

export default CourseDetail;
