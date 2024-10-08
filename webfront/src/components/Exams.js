// src/components/Exams.js
import React from "react";
import "./Exams.css"; // Import the CSS file

function Exams({ course }) {
  // Example exams for each course
  const examsData = {
    Typing: ["Typing Exam 1", "Typing Exam 2"],
    Drawing: ["Drawing Exam 1", "Drawing Exam 2"],
    Computer: ["Computer Exam 1", "Computer Exam 2"],
    PHP: ["PHP Exam 1", "PHP Exam 2"],
    Python: ["Python Exam 1", "Python Exam 2"],
  };

  const exams = examsData[course] || [];
  const allExams = Object.entries(examsData); // Get all exams for every course

  return (
    <div className="exams">
      <h2>{course ? `Exams for ${course}` : "All Exams"}</h2>

      {/* Show exams for the selected course or all exams if no course is selected */}
      <ul>
        {course ? (
          exams.length > 0 ? (
            exams.map((exam, index) => <li key={index}>{exam}</li>)
          ) : (
            <li>No exams available for this course.</li>
          )
        ) : allExams.length > 0 ? (
          allExams.map(([courseName, exams]) => (
            <li key={courseName}>
              <strong>{courseName}</strong>
              <ul>
                {exams.map((exam, index) => (
                  <li key={index}>{exam}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li>No exams available.</li>
        )}
      </ul>
    </div>
  );
}

export default Exams;
