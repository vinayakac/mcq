// src/components/Exam.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExamPage = () => {
  const { examNumber } = useParams();
  const [remainingTime, setRemainingTime] = useState(300); // Example: 5 minutes (300 seconds)
  const [questions] = useState([
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris"],
      answer: "Paris",
    },
    // Add more questions...
  ]);
  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          alert("Time is up!");
          navigate("/curriculums"); // Navigate back to curriculums after the exam
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [navigate]);

  // Function to format remaining time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} min ${secs} sec`; // Use template literals properly
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Exam {examNumber}</h1>
      <p>Time Remaining: {formatTime(remainingTime)}</p>
      <div style={styles.questions}>
        {questions.map((q, index) => (
          <div key={index} style={styles.question}>
            <p>{q.question}</p>
            {q.options.map((option, i) => (
              <div key={i}>
                <input
                  type="radio"
                  id={`q${index}o${i}`} // Use template literals correctly
                  name={`q${index}`} // Use template literals correctly
                  value={option}
                />
                <label htmlFor={`q${index}o${i}`}>{option}</label> // Use
                template literals correctly
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        style={styles.submitButton}
        onClick={() => alert("Exam submitted!")}
      >
        Submit Exam
      </button>
    </div>
  );
};

// Styles for the Exam component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  questions: {
    textAlign: "left",
  },
  question: {
    marginBottom: "15px",
  },
  submitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ExamPage;
