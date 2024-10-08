// src/components/Students.js
import React, { useState } from "react";
import "./Students.css"; // Import the CSS file

// Initial sample student data
const studentsData = {
  Typing: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
  Drawing: ["David Wilson", "Eva Green", "Frank Wright"],
  Computer: ["Grace Hall", "Henry Adams", "Ivy Clark"],
  PHP: ["Jack King", "Lily Scott", "Mason Lee"],
  Python: ["Nora White", "Oliver Green", "Paula Blue"],
};

function Students() {
  // Get all students from all courses
  const [students, setStudents] = useState(Object.values(studentsData).flat());
  const [newStudent, setNewStudent] = useState("");

  // Function to handle adding a new student
  const handleAddStudent = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (newStudent.trim() !== "") {
      setStudents((prevStudents) => [...prevStudents, newStudent.trim()]);
      setNewStudent(""); // Clear input after adding
    }
  };

  return (
    <div className="students">
      <h2>All Students</h2>
      <ul>
        {students.length > 0 ? (
          students.map((student, index) => <li key={index}>{student}</li>)
        ) : (
          <li>No students available.</li>
        )}
      </ul>

      {/* Form to add a new student */}
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Students;
