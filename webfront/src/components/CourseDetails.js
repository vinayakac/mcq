import React, { useState } from "react";
import Exams from "./Exams"; // Import the Exams component

// Initial sample student data
const initialStudentsData = {
  Typing: ["Anusha", "Vikram", "Bhavya", "Nakul"],
  Drawing: ["Dharma", "Yashmika", "Ayush", "Ratik"],
  Computer: ["Aishwarya", "Kavya", "Srushti", "Shayir"],
  PHP: ["Anjali", "Medha", "Nidhi", "Ditya"],
  Python: ["Yogesh", "Avindya", "Poorvi", "Chintan"],
};

const styles = {
  courseDetails: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  subHeader: {
    fontSize: "20px",
    margin: "10px 0",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#e0e0e0", // Header background color
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
  },
  addStudent: {
    marginTop: "10px",
  },
  input: {
    padding: "5px",
    marginRight: "5px",
  },
  button: {
    padding: "5px 10px",
  },
  errorMessage: {
    color: "red",
    marginTop: "10px",
  },
};

function CourseDetails({ course }) {
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
    <div style={styles.courseDetails}>
      <h2 style={styles.header}>Details for {course}</h2>

      {/* Show students enrolled in the selected course */}
      <h3 style={styles.subHeader}>Students in {course}</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Student Name</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={`${course}-${index}`}>
                <td style={styles.td}>{student}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={styles.td}>No students enrolled in this course.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Input form to add a new student */}
      <div style={styles.addStudent}>
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Add new student"
          style={styles.input}
        />
        <button onClick={addStudent} style={styles.button}>
          Add Student
        </button>
      </div>

      {/* Display error message if exists */}
      {error && (
        <p style={styles.errorMessage} aria-live="assertive">
          {error}
        </p>
      )}

      {/* Show exams for the selected course */}
      <Exams course={course} />
    </div>
  );
}

export default CourseDetails;
