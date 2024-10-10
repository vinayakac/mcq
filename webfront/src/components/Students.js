import React, { useState } from "react";
import "./Students.css"; // Import the CSS file

// Initial sample student data with id, course, age, gender, and standard
const studentsData = [
  {
    id: 1,
    name: "Akshata",
    course: "Typing",
    age: 7,
    gender: "Female",
    standard: "1",
  },
  {
    id: 2,
    name: "Rekha",
    course: "Typing",
    age: 8,
    gender: "Female",
    standard: "1",
  },
  {
    id: 3,
    name: "Santosh",
    course: "Typing",
    age: 9,
    gender: "Male",
    standard: "1",
  },
  {
    id: 4,
    name: "Ishwar",
    course: "Drawing",
    age: 10,
    gender: "Male",
    standard: "2",
  },
  {
    id: 5,
    name: "Nagaratna",
    course: "Drawing",
    age: 9,
    gender: "Female",
    standard: "2",
  },
];

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newStandard, setNewStandard] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle adding a new student
  const handleAddStudent = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (
      newStudent.trim() !== "" &&
      newCourse.trim() !== "" &&
      newAge.trim() !== "" &&
      newGender.trim() !== "" &&
      newStandard.trim() !== ""
    ) {
      const student = {
        id: students.length + 1, // Generate a new ID
        name: newStudent.trim(),
        course: newCourse.trim(),
        age: parseInt(newAge.trim()),
        gender: newGender.trim(),
        standard: newStandard.trim(),
      };
      setStudents((prevStudents) => [...prevStudents, student]);
      // Clear input fields after adding
      setNewStudent("");
      setNewCourse("");
      setNewAge("");
      setNewGender("");
      setNewStandard("");
    }
  };

  // Filter students based on search query
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="students">
      <h2>All Students</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table to display students */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.standard}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No students found.</td>
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
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
          placeholder="Enter age"
          required
        />
        <input
          type="text"
          value={newGender}
          onChange={(e) => setNewGender(e.target.value)}
          placeholder="Enter gender"
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
