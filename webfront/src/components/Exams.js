import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './Exams.css'; // Optional: add styles for Exam component

const Exams = () => {
  const location = useLocation();

  // Extracting the exam data from the location state
  const { selectedCourse, questionsData, examNumber } = location.state || {};

  // Memoize the questions array to avoid unnecessary re-calculations
  const questions = useMemo(() => {
    return selectedCourse && questionsData[selectedCourse] ? questionsData[selectedCourse] : [];
  }, [selectedCourse, questionsData]);

  // State to track selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // State to track the score
  const [score, setScore] = useState(null);
  // State to track correct and incorrect answers
  const [resultDetails, setResultDetails] = useState([]);
  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // State for timing-related variables
  const [timeRemaining, setTimeRemaining] = useState(90); // e.g., 90 seconds for the exam
  const [warning, setWarning] = useState(false);

  // Get the current question based on the currentQuestionIndex
  const currentQuestion = questions[currentQuestionIndex];

  // Memoize the handleSubmit function to avoid re-creation on every render
  const handleSubmit = useCallback(() => {
    let calculatedScore = 0;
    const results = [];

    // Calculate score
    questions.forEach(question => {
      const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
      if (isCorrect) {
        calculatedScore += 1;
      }

      results.push({
        id: question.id,
        correctAnswer: question.correctAnswer,
        selectedAnswer: selectedAnswers[question.id],
        isCorrect,
      });
    });

    setScore(calculatedScore);
    setResultDetails(results);
  }, [questions, selectedAnswers]);

  // Timer useEffect to manage the exam time and trigger warnings
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when time is up
          return 0; // Prevent going negative
        }
        return prevTime - 1;
      });
    }, 1000);

    if (timeRemaining <= 30 && !warning) {
      setWarning(true); // Show warning when 30 seconds are left
    }

    return () => clearInterval(timer);
  }, [timeRemaining, warning, handleSubmit]);

  // Function to handle answer selection
  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  // Function to handle "Next" button click
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Early return if there's no valid course or questions
  if (!questions.length) {
    return <div>No exam data available.</div>;
  }

  return (
    <div className="exam-section">
      <h2>{`${selectedCourse} Exam ${examNumber}`}</h2>

      {/* Timer display */}
      <div className="timer">
        {warning ? (
          <p style={{ color: 'red' }}>Hurry up! Only {timeRemaining} seconds left!</p>
        ) : (
          <p>Time Remaining: {timeRemaining} seconds</p>
        )}
      </div>

      {/* Display the current question */}
      <div className="question-box">
        <p className="question">{currentQuestion.question}</p>
        <ul className="options">
          {currentQuestion.options.map(option => (
            <li key={option.id} className="option">
              <label>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`} // Corrected name
                  value={option.id}
                  checked={selectedAnswers[currentQuestion.id] === option.id}
                  onChange={() => handleAnswerChange(currentQuestion.id, option.id)}
                />
                {option.text}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Previous button */}
      {currentQuestionIndex > 0 && (
        <button className="previous-question-button" onClick={handlePrevious}>
          Previous
        </button>
      )}

      {/* Display the "Next" button if not on the last question */}
      {currentQuestionIndex < questions.length - 1 && (
        <button className="next-question-button" onClick={handleNext}>
          Next
        </button>
      )}

      {/* Display the submit button on the last question */}
      {currentQuestionIndex === questions.length - 1 && (
        <button className="submit-exam-button" onClick={handleSubmit}>
          Submit Exam
        </button>
      )}

      {/* Display the score on the screen after submission */}
      {score !== null && (
        <div className="score-display">
          <h3>Your Score: {score} out of {questions.length}</h3>
          <h4>Results:</h4>
          <ul>
            {resultDetails.map(result => (
              <li key={result.id}>
                Question ID: {result.id} - Correct Answer: {result.correctAnswer}, Your Answer: {result.selectedAnswer} - {result.isCorrect ? 'Correct' : 'Incorrect'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Exams;
