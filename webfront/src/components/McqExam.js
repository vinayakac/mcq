import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Import the MCQ data

function McqExam() {
  const { exam } = useParams(); // Get the exam name from the URL parameters

  // Wrap questions in useMemo to avoid unnecessary re-renders
  const questions = useMemo(() => mcqData[exam] || [], [exam]);

  const [selectedAnswers, setSelectedAnswers] = useState({}); // To store selected answers
  const [score, setScore] = useState(null); // To store the score after submission
  const [results, setResults] = useState([]); // To store results for each question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // To track the current question
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false); // Flag to check if time is up

  const handleSubmit = useCallback(
    (e) => {
      if (e) e.preventDefault();

      let totalScore = 0;
      const newResults = questions.map((questionData, index) => {
        const isCorrect = selectedAnswers[index] === questionData.answer;
        if (isCorrect) totalScore += 1;
        return { questionData, isCorrect }; // Store the question data and if it's correct
      });
      setScore(totalScore); // Set the final score
      setResults(newResults); // Store the results
      setIsTimeUp(true); // Set time up flag to true
      setTimeLeft(0); // Stop the timer
    },
    [questions, selectedAnswers]
  );

  // Handle countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      if (!isTimeUp) {
        setIsTimeUp(true);
        handleSubmit(); // Automatically submit if time is up
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit, isTimeUp]);

  const handleChange = (questionIndex, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

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

  const styles = {
    container: {
      backgroundColor: "#f0f8ff",
      padding: "20px",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "auto",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      color: "blue",
    },
    question: {
      marginBottom: "20px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "black",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
    },
    li: {
      margin: "5px 0",
    },
    button: {
      marginTop: "20px",
      padding: "10px 15px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    correct: {
      color: "green", // Green for correct answers
    },
    incorrect: {
      color: "red", // Red for incorrect answers
    },
    timer: {
      color: timeLeft <= 30 ? "red" : "green", // Change to red when less than 30 seconds left
      fontWeight: "bold",
    },
    timeTaken: {
      color: "pink", // Pink for time taken
    },
    timeUp: {
      color: "orange", // Orange for time up message
      fontWeight: "bold",
    },
    score: {
      color: "purple", // Purple for score message
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1>{exam} Questions</h1>
      <p style={styles.timer}>
        Time Left: {Math.floor(timeLeft / 60)}:
        {String(timeLeft % 60).padStart(2, "0")}
      </p>
      {questions.length > 0 ? (
        <>
          <form onSubmit={handleSubmit}>
            <div style={styles.question}>
              <p>
                Question {currentQuestionIndex + 1}/{questions.length}:{" "}
                {questions[currentQuestionIndex].question}
              </p>
              <ul style={styles.ul}>
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => {
                    const userAnswer = selectedAnswers[currentQuestionIndex];
                    const isCorrect = results[currentQuestionIndex]?.isCorrect;
                    let optionStyle = {}; // Default style

                    // Determine the style based on user answer and correctness
                    if (userAnswer === option) {
                      optionStyle =
                        styles[
                          userAnswer === option
                            ? isCorrect
                              ? "correct"
                              : "incorrect"
                            : ""
                        ];
                    } else if (
                      isCorrect === false &&
                      option === questions[currentQuestionIndex].answer
                    ) {
                      optionStyle = styles.correct; // Show the correct answer
                    }

                    return (
                      <li key={optionIndex} style={optionStyle}>
                        <label>
                          <input
                            type="radio"
                            name={`question-${currentQuestionIndex}`} // Group by question index
                            value={option}
                            checked={userAnswer === option} // Check if this option is selected
                            onChange={() =>
                              handleChange(currentQuestionIndex, option)
                            } // Handle answer selection
                            disabled={score !== null || isTimeUp} // Disable radio buttons after submission or if time is up
                          />
                          {option}
                        </label>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* Show buttons for navigation */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Previous Question Button */}
              {currentQuestionIndex > 0 && (
                <button
                  style={styles.button}
                  type="button"
                  onClick={handlePreviousQuestion}
                  disabled={isTimeUp} // Disable if time is up
                >
                  Previous Question
                </button>
              )}

              {/* Add a gap here */}
              <div style={{ width: "20px" }}></div>

              {/* Next Question Button */}
              {currentQuestionIndex < questions.length - 1 && (
                <button
                  style={styles.button}
                  type="button"
                  onClick={handleNextQuestion}
                  disabled={isTimeUp} // Disable button if time is up
                >
                  Next Question
                </button>
              )}
            </div>
            {/* Show "Submit Answers" button if on the last question */}
            {currentQuestionIndex === questions.length - 1 && (
              <button style={styles.button} type="submit" disabled={isTimeUp}>
                Submit Answers
              </button>
            )}
          </form>

          {score !== null && (
            <div>
              <h2 style={styles.score}>
                Your Score: {score}/{questions.length}
              </h2>
              <h3>Results:</h3>
              <ul style={styles.ul}>
                {results.map((result, index) => (
                  <li key={index}>
                    <strong>{result.questionData.question}</strong>:{" "}
                    <span
                      style={
                        result.isCorrect ? styles.correct : styles.incorrect
                      }
                    >
                      {result.isCorrect
                        ? "Correct"
                        : `Incorrect (Correct answer: ${result.questionData.answer})`}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 style={styles.timeTaken}>
                Time Taken: {180 - timeLeft} seconds
              </h3>
            </div>
          )}
          {isTimeUp && (
            <h2 style={styles.timeUp}>
              Time is up! Your Score: {score}/{questions.length}
            </h2>
          )}
        </>
      ) : (
        <p>No questions available for this exam.</p>
      )}
    </div>
  );
}

export default McqExam;
