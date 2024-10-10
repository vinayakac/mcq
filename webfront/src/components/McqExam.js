import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Import your MCQ data
import "./McqExam.css"; // Import the CSS file for styling

function McqExam() {
  const { exam } = useParams(); // Get the exam name from the URL parameters
  const questions = mcqData[exam] || []; // Get questions for the specific exam
  const [selectedAnswers, setSelectedAnswers] = useState({}); // To store selected answers
  const [score, setScore] = useState(null); // To store the score after submission
  const [results, setResults] = useState([]); // To store results for each question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [timeLeft, setTimeLeft] = useState(600); // Time limit in seconds
  const [showAnswers, setShowAnswers] = useState(false); // State to toggle answer visibility

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      handleSubmit(); // Auto-submit when time runs out
    }
  }, [timeLeft]);

  const handleChange = (questionIndex, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    let totalScore = 0;
    const newResults = questions.map((questionData, index) => {
      const isCorrect = selectedAnswers[index] === questionData.answer;
      if (isCorrect) totalScore += 1;
      return { ...questionData, isCorrect, selected: selectedAnswers[index] }; // Store correctness and selected answer
    });
    setScore(totalScore);
    setResults(newResults); // Set the results state
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="mcq-exam-container">
      <h1 className="exam-title">{exam} Questions</h1>
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
                    const result = results[currentQuestionIndex]; // Fetch result after submission
                    let optionClass = "";

                    // Determine class based on answer and correctness
                    if (result) {
                      if (option === result.answer) {
                        optionClass = "option-correct"; // Correct answer
                      } else if (option === result.selected) {
                        optionClass = "option-wrong"; // Wrong answer
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
                            disabled={score !== null} // Disable input after submission
                          />
                          {option}
                        </label>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

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
          </form>

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
