// src/components/Exams.js
import React from "react";
import "./Exams.css"; // Import the CSS file

function Exams({ course }) {
  // Example exams for each course
  const examsData = {
    Math: ["Math Exam 1", "Math Exam 2"],
    Science: ["Science Exam 1", "Science Exam 2"],
    History: ["History Exam 1", "History Exam 2"],
    Geography: ["Geography Exam 1", "Geography Exam 2"],
    Biology: ["Biology Exam 1", "Biology Exam 2"],
  };

  const exams = examsData[course] || [];
  const allExams = Object.entries(examsData); // Get all exams for every course

  return (
    <div className="exams">
      <h2>{course ? `Exams for ${course}` : "All Exams"}</h2>

      {/* Show exams for the selected course or all exams if no course is selected */}
      <ul>
        {course
          ? exams.length > 0
            ? exams.map((exam, index) => <li key={index}>{exam}</li>)
            : <li>No exams available for this course.</li>
          : allExams.length > 0
            ? allExams.map(([courseName, exams]) => (
                <li key={courseName}>
                  <strong>{courseName}</strong>
                  <ul>
                    {exams.map((exam, index) => (
                      <li key={index}>{exam}</li>
                    ))}
                  </ul>
                </li>
              ))
            : <li>No exams available.</li>
        }
      </ul>
    </div>
  );
}

export default Exams;
