// src/components/Students.js
import React, { useState } from "react";
import "./Students.css"; // Import the CSS file

// Initial sample student data with course and standard
const studentsData = [
  { name: "Alice Johnson", course: "Typing", standard: "1" },
  { name: "Bob Smith", course: "Typing", standard: "1" },
  { name: "Charlie Brown", course: "Typing", standard: "1" },
  { name: "David Wilson", course: "Drawing", standard: "2" },
  { name: "Eva Green", course: "Drawing", standard: "2" },
  { name: "Frank Wright", course: "Drawing", standard: "2" },
  { name: "Grace Hall", course: "Computer", standard: "3" },
  { name: "Henry Adams", course: "Computer", standard: "3" },
  { name: "Ivy Clark", course: "Computer", standard: "3" },
  { name: "Jack King", course: "PHP", standard: "4" },
  { name: "Lily Scott", course: "PHP", standard: "4" },
  { name: "Mason Lee", course: "PHP", standard: "4" },
  { name: "Nora White", course: "Python", standard: "5" },
  { name: "Oliver Green", course: "Python", standard: "5" },
  { name: "Paula Blue", course: "Python", standard: "5" },
];

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newStandard, setNewStandard] = useState("");

  // Function to handle adding a new student
  const handleAddStudent = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (
      newStudent.trim() !== "" &&
      newCourse.trim() !== "" &&
      newStandard.trim() !== ""
    ) {
      const student = {
        name: newStudent.trim(),
        course: newCourse.trim(),
        standard: newStandard.trim(),
      };
      setStudents((prevStudents) => [...prevStudents, student]);
      // Clear input fields after adding
      setNewStudent("");
      setNewCourse("");
      setNewStandard("");
    }
  };

  return (
    <div className="students">
      <h2>All Students</h2>

      {/* Table to display students */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.standard}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No students available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Form to add a new student */}
      <form onSubmit={handleAddStudent} className="add-student-form">
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Enter student name"
          required
        />
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter course"
          required
        />
        <input
          type="text"
          value={newStandard}
          onChange={(e) => setNewStandard(e.target.value)}
          placeholder="Enter standard"
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Students;
