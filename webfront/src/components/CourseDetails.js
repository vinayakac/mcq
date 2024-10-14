import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Exams from "./Exams"; // Import the Exams component
import './CourseDetails.css'; // Import the CSS file

// Initial sample student data
const initialStudentsData = {
  Typing: [ "Alice Johnson", "Bob Smith","Charlie Brown",  "Quinn Brown",  "Riley Thomas" ],
  Drawing: [ "David Wilson", "Eva Green", "Frank Wright", "Sophia Wilson", "Toby Hall", ],
  Computer: ["Grace Hall","Henry Adams", "Ivy Clark","Uma Lewis", "Vera Thompson",],
  PHP: ["Jack King", "Lily Scott", "Mason Lee", "Walter White",  "Xena Black", ],
  Python: [ "Nora White",  "Oliver Green", "Paula Blue","Yara Green", "Zachary Taylor",],
};

function CourseDetails() {
  const { course } = useParams(); // Extract course from URL parameters
  const [students, setStudents] = useState(initialStudentsData[course] || []);
  const [newStudent, setNewStudent] = useState("");
  const [error, setError] = useState("");

  // Function to handle adding a new student
  const addStudent = () => {
    const trimmedName = newStudent.trim();
    if (trimmedName === "") {
      setError("Student name cannot be empty.");
      return;
    }
    if (students.includes(trimmedName)) {
      setError("Student is already enrolled.");
      return;
    }

    setStudents((prevStudents) => [...prevStudents, trimmedName]);
    setNewStudent(""); // Clear input after adding
    setError(""); // Clear any previous error
  };

  return (
    <div className="course-details">
      <h2 className="header">Details for {course}</h2>

      {/* Show students enrolled in the selected course */}
      <h3 className="sub-header">Students in {course}</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Student Name</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={`${course}-${index}`}>
                <td className="td">{student}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="td">No students enrolled in this course.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Input form to add a new student */}
      <div className="add-student">
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Add new student"
          className="input"
        />
        <button onClick={addStudent} className="button">
          Add Student
        </button>
      </div>

      {/* Display error message if exists */}
      {error && (
        <p className="error-message" aria-live="assertive">
          {error}
        </p>
      )}

      {/* Show exams for the selected course */}
      <Exams course={course} />
    </div>
  );
}

export default CourseDetails;
