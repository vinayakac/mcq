
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Adjust the path as necessary
import "./Exam.css"; // Include your CSS file for styles

const Exam = () => {
  const { examId } = useParams(); // Get the examId from URL
  const questions = mcqData[examId.replace(/-/g, " ")] || []; // Convert back to space
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [results, setResults] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // Set initial time limit to 2 minutes
  const [showAnswers, setShowAnswers] = useState(false); // State to control answer visibility
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [timerId, setTimerId] = useState(null); // State for timer ID

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const id = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      setTimerId(id); // Store timer ID
      return () => clearTimeout(id);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
    setErrorMessage(""); // Clear error message when selecting an option
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const selectedOption = selectedAnswers[currentQuestionIndex];
    if (!selectedOption) {
      setErrorMessage("Please select an answer before proceeding."); // Set error message
      return;
    }
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
    setErrorMessage(""); // Clear error message if answer is selected
  };

  // Move to the previous question
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setErrorMessage(""); // Clear error message
  };

  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Clear the timer
    clearTimeout(timerId);
    setTimeLeft(0); // Optional: Set time left to 0 if you want to show that time is up

    const newResults = questions.map((questionData, index) => {
      const isCorrect = selectedAnswers[index] === questionData.correctAnswer;
      return { ...questionData, isCorrect, selected: selectedAnswers[index] };
    });

    const totalScore = newResults.filter((result) => result.isCorrect).length; // Calculate total score
    setScore(totalScore);
    setResults(newResults);
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Toggle answers visibility
  const toggleShowAnswers = () => {
    setShowAnswers((prev) => !prev);
  };

  return (
    <div className="exam-container">
      <h2>{examId.replace(/-/g, " ")} Questions</h2>
      <div className="timer">
        Time Left: <span>{formatTime(timeLeft)}</span>
      </div>

      {questions.length > 0 ? (
        <>
          <form onSubmit={handleSubmit} className="question-form">
            <div className="question-card">
              <p>
                Question {currentQuestionIndex + 1}/{questions.length}:{" "}
                {questions[currentQuestionIndex].question}
              </p>
              <ul className="options-list">
                {questions[currentQuestionIndex].options.map((option, i) => {
                  const result = results[currentQuestionIndex];
                  let optionClass = "";

                  if (result) {
                    if (option === result.correctAnswer) {
                      optionClass = "option-correct";
                    } else if (option === result.selected) {
                      optionClass = "option-wrong";
                    }
                  }

                  return (
                    <li key={i} className={`option-item ${optionClass}`}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={option}
                          checked={
                            selectedAnswers[currentQuestionIndex] === option
                          }
                          onChange={() => handleAnswerSelect(option)}
                          disabled={score !== null} // Disable radio buttons after submission
                        />
                        {option}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Display error message */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
              {currentQuestionIndex > 0 && (
                <button type="button" onClick={handlePreviousQuestion}>
                  Previous
                </button>
              )}
              {currentQuestionIndex < questions.length - 1 && (
                <button type="button" onClick={handleNextQuestion}>
                  Next
                </button>
              )}
              {currentQuestionIndex === questions.length - 1 && (
                <button type="submit">Submit</button>
              )}
            </div>
          </form>

          {/* Display score and results */}
          {score !== null && (
            <div className="score-section">
              <h2>
                Your Score: {score}/{questions.length}
              </h2>
              <button onClick={toggleShowAnswers}>
                {showAnswers ? "Hide Answers" : "View Answers"}
              </button>
              {showAnswers && (
                <ul className="results-list">
                  {results.map((result, index) => (
                    <li
                      key={index}
                      className={result.isCorrect ? "correct" : "incorrect"}
                    >
                      Q{index + 1}: {result.question} -{" "}
                      {result.isCorrect ? "Correct" : "Wrong"} (Your Answer:{" "}
                      {result.selected || "Not Answered"})<br />
                      <strong>Correct Answer: {result.correctAnswer}</strong>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      ) : (
        <p>No questions available for this exam.</p>
      )}
    </div>
  );
};

export default Exam;
