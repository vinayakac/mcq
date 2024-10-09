import React, { useState } from "react";
import Exams from "./Exams"; // Import the Exams component
import "./CourseDetails.css"; // Import the CSS file

// Initial sample student data
const initialStudentsData = {
  Typing: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
  Drawing: ["David Wilson", "Eva Green", "Frank Wright"],
  Computer: ["Grace Hall", "Henry Adams", "Ivy Clark"],
  PHP: ["Jack King", "Lily Scott", "Mason Lee"],
  Python: ["Nora White", "Oliver Green", "Paula Blue"],
};

function CourseDetails({ course }) {
  const [students, setStudents] = useState(initialStudentsData[course] || []);
  const [newStudent, setNewStudent] = useState("");

  // Function to handle adding a new student
  const addStudent = () => {
    if (newStudent.trim() !== "") {
      setStudents((prevStudents) => [...prevStudents, newStudent.trim()]);
      setNewStudent(""); // Clear input after adding
    }
  };

  return (
    <div className="course-details">
      <h2>Details for {course}</h2>

      {/* Show students enrolled in the selected course */}
      <h3>Students in {course}</h3>
      <ul>
        {students.length > 0 ? (
          students.map((student, index) => <li key={index}>{student}</li>)
        ) : (
          <li>No students enrolled in this course.</li>
        )}
      </ul>

      {/* Input form to add a new student */}
      <div className="add-student">
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Add new student"
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Show exams for the selected course */}
      <Exams course={course} />
    </div>
  );
}

export default CourseDetails;
