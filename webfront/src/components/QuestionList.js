// src/components/QuestionList.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExamData from "./ExamData"; // Ensure the path is correct

const QuestionList = () => {
  const { examNumber } = useParams(); // Get the exam number from the URL
  const navigate = useNavigate();
  const exam = ExamData[examNumber]; // Get the corresponding exam data

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60); // Set duration in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate if the exam exists
  if (!exam) {
    return <h2>Exam not found.</h2>; // Handle case where exam does not exist
  }

  // Timer to countdown the remaining time
  useEffect(() => {
    let timer;

    // Only set timer if the exam is not submitted
    if (!isSubmitted) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsSubmitted(true); // Automatically submit if time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup on unmount or if isSubmitted changes
  }, [isSubmitted]); // Only depend on isSubmitted

  // Function to handle answer selection
  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  // Function to handle the next question or submit
  const handleNextQuestion = () => {
    if (selectedAnswer) {
      if (
        selectedAnswer ===
        exam.sampleQuestions[currentQuestionIndex].correctAnswer
      ) {
        setScore((prev) => prev + 1);
      }
      if (currentQuestionIndex < exam.sampleQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(""); // Reset selected answer for the next question
      } else {
        setIsSubmitted(true); // Mark as submitted if it's the last question
      }
    }
  };

  // Function to reset the exam
  const resetExam = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setTimeRemaining(60); // Reset timer
    setIsSubmitted(false);
  };

  return (
    <div style={styles.container}>
      <h1>{exam.title}</h1>
      <p>{exam.description}</p>
      <p>Time Remaining: {timeRemaining} seconds</p>
      <h2>Question {currentQuestionIndex + 1}:</h2>
      <p>{exam.sampleQuestions[currentQuestionIndex].question}</p>
      <ul style={styles.optionsList}>
        {exam.sampleQuestions[currentQuestionIndex].options.map(
          (option, index) => (
            <li key={index} style={styles.optionItem}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                {option}
              </label>
            </li>
          )
        )}
      </ul>
      <button style={styles.submitButton} onClick={handleNextQuestion}>
        {currentQuestionIndex < exam.sampleQuestions.length - 1
          ? "Next Question"
          : "Submit"}
      </button>

      {isSubmitted && (
        <div style={styles.resultContainer}>
          <h2>
            Your Score: {score}/{exam.sampleQuestions.length}
          </h2>
          <button style={styles.resetButton} onClick={resetExam}>
            Try Again
          </button>
          <button style={styles.backButton} onClick={() => navigate("/")}>
            Back to Exam List
          </button>
        </div>
      )}
    </div>
  );
};

// Styles for the QuestionList component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  optionsList: {
    listStyleType: "none",
    padding: 0,
  },
  optionItem: {
    margin: "5px 0",
    padding: "8px",
    backgroundColor: "#e7f1f7",
    borderRadius: "4px",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  },
  resultContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  resetButton: {
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: "#5cb85c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  backButton: {
    padding: "10px 20px",
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default QuestionList;
