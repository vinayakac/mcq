import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Adjust the path as necessary
import "./Exam.css"; // Include your CSS file for styles

const Exam = () => {
  const { examId } = useParams(); // Get the examId from URL
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(150); // Set initial time limit
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Fetch questions based on examId
  useEffect(() => {
    const fetchedQuestions = mcqData[examId.replace(/-/g, " ")] || []; // Convert back to space
    setQuestions(fetchedQuestions);
  }, [examId]);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
  };

  return (
    <div className="exam-container">
      <h2>{examId.replace(/-/g, " ")} Questions</h2>
      <div>
        Time Left: {Math.floor(timeLeft / 60)}:
        {("0" + (timeLeft % 60)).slice(-2)}
      </div>
      {questions.length > 0 ? (
        <div className="question-card">
          <p>
            Question {currentQuestionIndex + 1}/{questions.length}:{" "}
            {questions[currentQuestionIndex].question}
          </p>
          <ul className="options-list">
            {questions[currentQuestionIndex].options.map((option, i) => (
              <li key={i}>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`} // Use backticks for template literal
                    value={option}
                    checked={selectedAnswers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div className="navigation-buttons">
            {currentQuestionIndex > 0 && (
              <button onClick={handlePreviousQuestion}>Previous</button>
            )}
            {currentQuestionIndex < questions.length - 1 && (
              <button onClick={handleNextQuestion}>Next</button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button onClick={() => alert("Submit your answers!")}>
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No questions available for this exam.</p>
      )}
    </div>
  );
};

export default Exam;
