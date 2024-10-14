
import React, { useState } from 'react';
import './Students.css'; // Import the CSS file

const Students = () => {
  const [studentList, setStudentList] = useState([
    { id: 1, name: 'Mahima', class: '5th', course: 'Math', age: 10, gender: 'Female' },
    { id: 2, name: 'Ashvita', class: '7th', course: 'Science', age: 12, gender: 'Female' },
    { id: 3, name: 'Pranam', class: '10th', course: 'History', age: 15, gender: 'Male' },
    { id: 4, name: 'John Doe', class: '5th', course: 'English', age: 10, gender: 'Male' },
    { id: 5, name: 'Emily Davis', class: '5th', course: 'Art', age: 10, gender: 'Female' },
    { id: 6, name: 'Alice Brown', class: '5th', course: 'Math', age: 10, gender: 'Female' },
    { id: 7, name: 'Jane Smith', class: '5th', course: 'Science', age: 10, gender: 'Female' },
    { id: 8, name: 'Mike Johnson', class: '5th', course: 'Math', age: 10, gender: 'Male' },
    { id: 9, name: 'Charlie Wilson', class: '5th', course: 'English', age: 10, gender: 'Male' },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', class: '', course: '', age: '', gender: '' });
  const [showForm, setShowForm] = useState(false); // State to control the visibility of the form
  const [searchTerm, setSearchTerm] = useState(''); // State for the search bar

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.class) {
      const newId = studentList.length + 1; // Simple ID assignment
      setStudentList([...studentList, { id: newId, ...newStudent }]);
      setNewStudent({ name: '', class: '', course: '', age: '', gender: '' }); // Reset form fields
      setShowForm(false); // Hide the form after adding the student
    }
  };

  // Filter students based on the search term
  const filteredStudents = studentList.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="students">
      <h2>All Students</h2>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      
      {/* Table to display student information */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to show the form */}
      <button onClick={() => setShowForm(true)}>Add New Student</button>

      {/* Show the form only if showForm is true */}
      {showForm && (
        <div>
          <h3>Add New Student</h3>
          <form onSubmit={handleAddStudent}>
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={newStudent.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={newStudent.class}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={newStudent.course}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={newStudent.age}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={newStudent.gender}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Student</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Students;
