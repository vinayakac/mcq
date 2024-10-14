import React, { useState } from "react";
import "./Students.css"; // Import the CSS file

const studentsData = [
  // Initial sample student data with course and standard (for demonstration purposes)
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
  { name: "Quinn Brown", course: "Typing", standard: "1" },
  { name: "Riley Thomas", course: "Typing", standard: "1" },
  { name: "Sophia Wilson", course: "Drawing", standard: "2" },
  { name: "Toby Hall", course: "Drawing", standard: "2" },
  { name: "Uma Lewis", course: "Computer", standard: "3" },
  { name: "Vera Thompson", course: "Computer", standard: "3" },
  { name: "Walter White", course: "PHP", standard: "4" },
  { name: "Xena Black", course: "PHP", standard: "4" },
  { name: "Yara Green", course: "Python", standard: "5" },
  { name: "Zachary Taylor", course: "Python", standard: "5" },
];

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newStandard, setNewStandard] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.trim() && newCourse.trim() && newStandard.trim()) {
      const student = {
        name: newStudent.trim(),
        course: newCourse.trim(),
        standard: newStandard.trim(),
      };
      setStudents((prevStudents) => [...prevStudents, student]);
      setNewStudent("");
      setNewCourse("");
      setNewStandard("");
    }
  };

  return (
    <div className="students-container">
      <h1>Students</h1>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Standard"
          value={newStandard}
          onChange={(e) => setNewStandard(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.standard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
