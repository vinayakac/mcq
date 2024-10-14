import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Sample data for MCQ questions based on course
const mcqData = {
  Typing: [
    { question: "What is the home row in typing?", options: ["A", "S", "D", "F"], answer: "A" },
    { question: "How do you capitalize a letter?", options: ["Shift", "Alt", "Ctrl", "Space"], answer: "Shift" },
  ],
  Painting: [
    { question: "Which color is made by mixing red and blue?", options: ["Green", "Purple", "Orange", "Yellow"], answer: "Purple" },
    { question: "What tool is used to paint?", options: ["Brush", "Pencil", "Pen", "Chalk"], answer: "Brush" },
  ],
  "Introduction to Python": [
    { question: "What symbol is used to comment in Python?", options: ["#", "//", "/*", "/*/"], answer: "#" },
    { question: "What function is used to print in Python?", options: ["echo", "print", "console.log", "write"], answer: "print" },
  ],
};
const MCQQuestions = () => {
  const { course } = useParams(); // Get the course name from the URL
  const questions = mcqData[course] || [];
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (questionIndex, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOption,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="mcq-questions">
      <h2>MCQ Questions for {course}</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {questions.map((item, index) => (
            <li key={index}>
              <p>{item.question}</p>
              <ul>
                {item.options.map((option) => (
                  <li key={option}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={userAnswers[index] === option}
                        onChange={() => handleChange(index, option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h3>Your Results:</h3>
          <ul>
            {questions.map((item, index) => (
              <li key={index}>
                {item.question} - Your Answer: {userAnswers[index]} (Correct Answer: {item.answer})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MCQQuestions;