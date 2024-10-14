import React, { useState } from "react";
import "./Students.css"; // Import the CSS file

// Updated initial sample student data
const studentsData = [
  {
    id: "1",
    name: "Alice Johnson",
    age: "10",
    gender: "Female",
    course: "Typing",
    standard: "1",
  },
  {
    id: "2",
    name: "Bob Smith",
    age: "11",
    gender: "Male",
    course: "Typing",
    standard: "1",
  },
  {
    id: "3",
    name: "Charlie Brown",
    age: "10",
    gender: "Male",
    course: "Typing",
    standard: "1",
  },
  {
    id: "4",
    name: "David Wilson",
    age: "12",
    gender: "Male",
    course: "Drawing",
    standard: "2",
  },
  {
    id: "5",
    name: "Eva Green",
    age: "11",
    gender: "Female",
    course: "Drawing",
    standard: "2",
  },
  {
    id: "6",
    name: "Frank Wright",
    age: "12",
    gender: "Male",
    course: "Drawing",
    standard: "2",
  },
  {
    id: "7",
    name: "Grace Hall",
    age: "9",
    gender: "Female",
    course: "Computer",
    standard: "3",
  },
  {
    id: "8",
    name: "Henry Adams",
    age: "10",
    gender: "Male",
    course: "Computer",
    standard: "3",
  },
  {
    id: "9",
    name: "Ivy Clark",
    age: "11",
    gender: "Female",
    course: "Computer",
    standard: "3",
  },
  {
    id: "10",
    name: "Jack King",
    age: "12",
    gender: "Male",
    course: "PHP",
    standard: "4",
  },
  {
    id: "11",
    name: "Lily Scott",
    age: "11",
    gender: "Female",
    course: "PHP",
    standard: "4",
  },
  {
    id: "12",
    name: "Mason Lee",
    age: "12",
    gender: "Male",
    course: "PHP",
    standard: "4",
  },
  {
    id: "13",
    name: "Nora White",
    age: "13",
    gender: "Female",
    course: "Python",
    standard: "5",
  },
  {
    id: "14",
    name: "Oliver Green",
    age: "14",
    gender: "Male",
    course: "Python",
    standard: "5",
  },
  {
    id: "15",
    name: "Paula Blue",
    age: "13",
    gender: "Female",
    course: "Python",
    standard: "5",
  },
];

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [newId, setNewId] = useState("");
  const [newGender, setNewGender] = useState("Female");
  const [newStandard, setNewStandard] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(""); // State for error messages

  // Function to handle adding a new student
  const handleAddStudent = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Check if ID already exists
    if (students.some((student) => student.id === newId.trim())) {
      setError("Student ID already exists."); // Set error message
      return; // Exit the function
    }
    // Reset error message if ID is unique
    setError("");

    // Check if input fields are valid
    if (
      newStudent.trim() !== "" &&
      newAge.trim() !== "" &&
      newId.trim() !== ""
    ) {
      const student = {
        id: newId.trim(),
        name: newStudent.trim(),
        age: newAge.trim(),
        gender: newGender,
        course: newCourse.trim(),
        standard: newStandard,
      };
      setStudents((prevStudents) => [...prevStudents, student]);
      // Clear input fields after adding
      setNewStudent("");
      setNewAge("");
      setNewId("");
      setNewCourse("");
      setNewGender("Female");
      setNewStandard("1");
    }
  };

  // Search functionality
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.standard.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="students">
      <h2>All Students</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search students..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Table to display students */}
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.course}</td>
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
        <div className="form-row">
          <input
            type="text"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
            placeholder="Enter student ID"
            required
          />
          <input
            type="text"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
            placeholder="Enter student name"
            required
          />
          <input
            type="text"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            placeholder="Enter age"
            required
          />

          {/* Select for Gender */}
          <select
            value={newGender}
            onChange={(e) => setNewGender(e.target.value)}
            required
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>

          {/* Select for Standard */}
          <select
            value={newStandard}
            onChange={(e) => setNewStandard(e.target.value)}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Enter course"
            required
          />

          <button type="submit">Add Student</button>
        </div>

        {/* Error message display */}
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default Students;
