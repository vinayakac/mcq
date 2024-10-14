import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Import your MCQ data
import "./McqExam.css"; // Import the CSS file for styling

function McqExam() {
  const { exam } = useParams(); // Get the exam name from the URL parameters
  const questions = mcqData[exam] || []; // Get questions for the specific exam

  // State variables
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [results, setResults] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(150);
  const [showAnswers, setShowAnswers] = useState(false);
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
  const handleChange = (questionIndex, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
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
      const isCorrect = selectedAnswers[index] === questionData.answer;
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
    <div className="mcq-exam-container">
      <h1 className="exam-title">{exam} Paper</h1>
      <div className="timer">
        Time Left: <span>{formatTime(timeLeft)}</span>
      </div>

      {questions.length > 0 ? (
        <>
          <form onSubmit={handleSubmit} className="question-form">
            <div className="question-card">
              <p className="question-text">
                Question {currentQuestionIndex + 1}/{questions.length}:{" "}
                {questions[currentQuestionIndex].question}
              </p>
              <ul className="options-list">
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => {
                    const result = results[currentQuestionIndex];
                    let optionClass = "";

                    if (result) {
                      if (option === result.answer) {
                        optionClass = "option-correct";
                      } else if (option === result.selected) {
                        optionClass = "option-wrong";
                      }
                    }

                    return (
                      <li
                        key={optionIndex}
                        className={`option-item ${optionClass}`}
                      >
                        <label>
                          <input
                            type="radio"
                            name={`question-${currentQuestionIndex}`}
                            value={option}
                            checked={
                              selectedAnswers[currentQuestionIndex] === option
                            }
                            onChange={() =>
                              handleChange(currentQuestionIndex, option)
                            }
                            disabled={score !== null}
                          />
                          {option}
                        </label>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* Display error message */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
              {currentQuestionIndex > 0 && ( // Show previous button if not on first question
                <button
                  type="button"
                  className="btn-previous"
                  onClick={handlePreviousQuestion}
                >
                  Previous Question
                </button>
              )}
              {currentQuestionIndex < questions.length - 1 && (
                <button
                  type="button"
                  className="btn-next"
                  onClick={handleNextQuestion}
                >
                  Next Question
                </button>
              )}
              {currentQuestionIndex === questions.length - 1 && (
                <button type="submit" className="btn-submit">
                  Submit Answers
                </button>
              )}
            </div>
          </form>

          {/* Display score and results */}
          {score !== null && (
            <div className="score-section">
              <h2>
                Your Score: {score}/{questions.length}
              </h2>
              <button onClick={toggleShowAnswers} className="btn-view-answers">
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
                      <strong>Correct Answer: {result.answer}</strong>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      ) : (
        <p className="no-questions">No questions available for this exam.</p>
      )}
    </div>
  );
}

export default McqExam;
