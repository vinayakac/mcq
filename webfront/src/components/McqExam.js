// src/components/McqExam.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Import the MCQ data
import "./McqExam.css"; // Import the CSS file for styling

function McqExam() {
  const { exam } = useParams(); // Get the exam name from the URL parameters

  // Get the questions for the specific exam
  const questions = mcqData[exam] || [];
  const [selectedAnswers, setSelectedAnswers] = useState({}); // To store selected answers
  const [score, setScore] = useState(null); // To store the score after submission
  const [results, setResults] = useState([]); // To store results for each question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // To track the current question

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
    e.preventDefault();
    let totalScore = 0;
    const newResults = questions.map((questionData, index) => {
      const isCorrect = selectedAnswers[index] === questionData.answer;
      if (isCorrect) totalScore += 1;
      return { questionData, isCorrect }; // Store the question data and if it's correct
    });
    setScore(totalScore); // Set the final score
    setResults(newResults); // Store the results
  };

  return (
    <div>
      <h1>{exam} Questions</h1>
      {questions.length > 0 ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="question">
              <p>
                Question {currentQuestionIndex + 1}/{questions.length}:{" "}
                {questions[currentQuestionIndex].question}
              </p>
              <ul>
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => {
                    const userAnswer = selectedAnswers[currentQuestionIndex];
                    const isCorrect = results[currentQuestionIndex]?.isCorrect;
                    let optionClass = ""; // Default class

                    // Determine the class based on user answer and correctness
                    if (userAnswer === option) {
                      optionClass = isCorrect ? "correct" : "incorrect"; // Correct or incorrect
                    } else if (
                      isCorrect === false &&
                      option === questions[currentQuestionIndex].answer
                    ) {
                      optionClass = "correct"; // Show the correct answer
                    }

                    return (
                      <li key={optionIndex} className={optionClass}>
                        <label>
                          <input
                            type="radio"
                            name={`question-${currentQuestionIndex}`} // Group by question index
                            value={option}
                            checked={userAnswer === option} // Check if this option is selected
                            onChange={() =>
                              handleChange(currentQuestionIndex, option)
                            } // Handle answer selection
                            disabled={score !== null} // Disable radio buttons after submission
                          />
                          {option}
                        </label>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* Show "Next Question" button if not on the last question */}
            {currentQuestionIndex < questions.length - 1 && (
              <button type="button" onClick={handleNextQuestion}>
                Next Question
              </button>
            )}
            {/* Show "Submit Answers" button if on the last question */}
            {currentQuestionIndex === questions.length - 1 && (
              <button type="submit">Submit Answers</button>
            )}
          </form>

          {score !== null && (
            <h2>
              Your Score: {score}/{questions.length}
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