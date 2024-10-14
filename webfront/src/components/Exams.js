import React, { useState } from "react";
import './Exams.css'; // Import the CSS file for styling

// Initial sample exam data
const initialExamsData = {
  Typing: ["Typing Exam 1", "Typing Exam 2"],
  Drawing: ["Drawing Exam 1"],
  Computer: ["Computer Exam 1", "Computer Exam 2"],
  PHP: ["PHP Exam 1"],
  Python: ["Python Exam 1", "Python Exam 2", "Python Exam 3"],
};

function Exams({ course }) {
  const [exams, setExams] = useState(initialExamsData[course] || []);
  const [newExam, setNewExam] = useState("");
  const [error, setError] = useState("");

  // Function to handle adding a new exam
  const addExam = () => {
    const trimmedName = newExam.trim();
    if (trimmedName === "") {
      setError("Exam name cannot be empty.");
      return;
    }
    if (exams.includes(trimmedName)) {
      setError("Exam is already added.");
      return;
    }

    setExams((prevExams) => [...prevExams, trimmedName]);
    setNewExam(""); // Clear input after adding
    setError(""); // Clear any previous error
  };

  return (
    <div className="exams">
      <h3 className="exams-header">Exams for {course}</h3>
      <table className="exams-table">
        <thead>
          <tr>
            <th className="exams-th">Exam Name</th>
          </tr>
        </thead>
        <tbody>
          {exams.length > 0 ? (
            exams.map((exam, index) => (
              <tr key={`${course}-exam-${index}`}>
                <td className="exams-td">{exam}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="exams-td">No exams available for this course.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Input form to add a new exam */}
      <div className="add-exam">
        <input
          type="text"
          value={newExam}
          onChange={(e) => setNewExam(e.target.value)}
          placeholder="Add new exam"
          className="input"
        />
        <button onClick={addExam} className="button">
          Add Exam
        </button>
      </div>

      {/* Display error message if exists */}
      {error && (
        <p className="error-message" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  );
}

export default Exams;
