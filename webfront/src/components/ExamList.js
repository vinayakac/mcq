// src/components/ExamList.js

import React from "react";
import { useNavigate } from "react-router-dom";

const ExamList = () => {
  const navigate = useNavigate();

  // Function to navigate to the exam
  const handleExamClick = (examNumber) => {
    navigate(`/exam/${examNumber}`); // Navigate to the QuestionList component
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Available Exams</h1>
      <div style={styles.card}>
        <h2>Select an Exam</h2>
        <div style={styles.examButtons}>
          <button style={styles.examButton} onClick={() => handleExamClick(1)}>
            Exam 1
          </button>
          <button style={styles.examButton} onClick={() => handleExamClick(2)}>
            Exam 2
          </button>
          <button style={styles.examButton} onClick={() => handleExamClick(3)}>
            Exam 3
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles for the ExamList component
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
  examButtons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  examButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ExamList;
