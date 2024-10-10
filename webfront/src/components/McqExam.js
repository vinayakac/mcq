// src/components/McqExam.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import mcqData from "../data/mcqData"; // Import the MCQ data
import "./McqExam.css"; // Import the CSS file for styling

function McqExam() {
  const { exam } = useParams(); // Get the exam name from the URL parameters

  // Get the questions for the specific exam
  const questions = mcqData[exam] || [];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [results, setResults] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleChange = (questionIndex, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalScore = 0;
    const newResults = questions.map((questionData, index) => {
      const isCorrect = selectedAnswers[index] === questionData.answer;
      if (isCorrect) totalScore += 1;
      return { questionData, isCorrect };
    });
    setScore(totalScore);
    setResults(newResults);
  };

  return (
    <div className="mcq-exam">
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
                {questions[currentQuestionIndex].options.map((option, optionIndex) => {
                  const userAnswer = selectedAnswers[currentQuestionIndex];
                  const isCorrect = results[currentQuestionIndex]?.isCorrect;
                  let optionClass = "";

                  if (userAnswer === option) {
                    optionClass = isCorrect ? "correct" : "incorrect";
                  } else if (isCorrect === false && option === questions[currentQuestionIndex].answer) {
                    optionClass = "correct"; 
                  }

                  return (
                    <li key={optionIndex} className={optionClass}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={option}
                          checked={userAnswer === option}
                          onChange={() => handleChange(currentQuestionIndex, option)}
                          disabled={score !== null} 
                        />
                        {option}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Show "Previous Question" button if not on the first question */}
            {currentQuestionIndex > 0 && (
              <button type="button" onClick={handlePreviousQuestion}>
                Previous Question
              </button>
            )}

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
            <div className="score-container">
              <h2>
                Your Score: {score}/{questions.length}
              </h2>
              <h3>Answers:</h3>
              <ul>
                {results.map((result, index) => (
                  <li key={index} className={result.isCorrect ? "correct" : "incorrect"}>
                    Q{index + 1}: {result.questionData.answer} (Your answer: {selectedAnswers[index]})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>No questions available for this exam.</p>
      )}
    </div>
  );
}

export default McqExam;
