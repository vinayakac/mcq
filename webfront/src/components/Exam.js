
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Exam.css'; // Optional: add styles for Exam component

const Exam = () => {
  const location = useLocation();

  // Extracting the exam data from the location state
  const { selectedCourse, questionsData, examNumber } = location.state || {};

  // Ensure questionsData and selectedCourse are valid before using them
  const questions = selectedCourse && questionsData[selectedCourse] ? questionsData[selectedCourse] : [];

  // State to track selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // State to track the score
  const [score, setScore] = useState(null); // Initialize score state

  // Function to handle answer selection
  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  // Function to handle exam submission
  const handleSubmit = () => {
    let calculatedScore = 0;

    // Calculate score
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        calculatedScore += 1; // Increment score for correct answer
      }
    });

    // Set the score state
    setScore(calculatedScore);
  };

  // Early return if there's no valid course or questions
  if (!questions.length) {
    return <div>No exam data available.</div>;
  }

  return (
    <div className="exam-section">
      <h2>{`${selectedCourse} Exam ${examNumber}`}</h2>
      {questions.map(question => (
        <div key={question.id} className="question-box">
          <p className="question">{question.question}</p>
          <ul className="options">
            {question.options.map(option => (
              <li key={option.id} className="option">
                <label>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.id}
                    checked={selectedAnswers[question.id] === option.id}
                    onChange={() => handleAnswerChange(question.id, option.id)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="submit-exam-button" onClick={handleSubmit}>
        Submit Exam
      </button>

      {/* Display the score on the screen after submission */}
      {score !== null && (
        <div className="score-display">
          <h3>Your Score: {score} out of {questions.length}</h3>
        </div>
      )}
    </div>
  );
};

export default Exam;
