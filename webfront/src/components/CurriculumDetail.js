import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CurriculumDetail = () => {
  const { courseId } = useParams(); // Get the curriculum ID from the URL
  const navigate = useNavigate(); // For navigation
  const [selectedCourse, setSelectedCourse] = useState(""); // State for selected course
  const [newCourse, setNewCourse] = useState(""); // State to hold the new course input

  // Sample curriculum data
  const initialCurriculums = [
    {
      id: 1,
      name: "1-4 Class",
      details: "Detailed content for 1-4 Class",
      courses: ["Painting", "Typing", "Basic Computer Skills"],
    },
    {
      id: 2,
      name: "5-7 Class",
      details: "Detailed content for 5-7 Class",
      courses: [
        "Advanced Software Applications",
        "Introduction to Programming",
      ],
    },
    {
      id: 3,
      name: "8-10 Class",
      details: "Detailed content for 8-10 Class",
      courses: ["Data Structures", "Algorithms", "Web Development"],
    },
  ];

  const [curriculums, setCurriculums] = useState(initialCurriculums);

  // Find the curriculum details based on the ID
  const curriculum = curriculums.find((c) => c.id === parseInt(courseId));

  if (!curriculum) {
    return <div style={styles.error}>Curriculum not found</div>; // Handle case when curriculum is not found
  }

  // Function to handle course selection
  const handleCourseSelection = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Function to navigate to the next page with the selected course
  const handleCourseClick = () => {
    if (selectedCourse) {
      navigate(`/course-detail/${selectedCourse}`, {
        state: { course: selectedCourse },
      });
    } else {
      alert("Please select a course.");
    }
  };

  // Function to add the new course
  const handleAddCourse = () => {
    if (newCourse.trim()) {
      const updatedCurriculums = curriculums.map((cur) => {
        if (cur.id === curriculum.id) {
          return {
            ...cur,
            courses: [...cur.courses, newCourse.trim()], // Add new course
          };
        }
        return cur;
      });
      setCurriculums(updatedCurriculums); // Update the state with new curriculums
      setNewCourse(""); // Clear the input field
      alert(`Course "${newCourse}" added!`); // Corrected alert syntax
    } else {
      alert("Please enter a valid course name to add.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{curriculum.name}</h1>
      <p style={styles.details}>{curriculum.details}</p>
      <h2 style={styles.subHeader}>Courses:</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Select</th>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {curriculum.courses.map((course, index) => (
            <tr key={index} style={styles.tableRow}>
              <td>
                <input
                  type="radio"
                  value={course}
                  checked={selectedCourse === course}
                  onChange={handleCourseSelection}
                  style={styles.radioInput}
                />
              </td>
              <td style={styles.courseName}>{course}</td>
              <td>
                <button onClick={handleCourseClick} style={styles.linkButton}>
                  View Course
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.addCourseContainer}>
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter new course name"
          style={styles.inputField}
        />
        <button style={styles.addButton} onClick={handleAddCourse}>
          Add Course
        </button>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          Back to Curriculums
        </button>
      </div>
    </div>
  );
};

// Styles for the CurriculumDetail component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  subHeader: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#5bc0de",
  },
  details: {
    fontSize: "1.2rem",
    margin: "20px 0",
    color: "#555",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    marginBottom: "20px",
  },
  tableRow: {
    borderBottom: "1px solid #ccc",
  },
  radioInput: {
    cursor: "pointer",
  },
  courseName: {
    fontSize: "1rem",
    color: "#333",
    padding: "10px 0",
  },
  addCourseContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  inputField: {
    padding: "10px",
    fontSize: "1rem",
    marginRight: "10px",
    width: "250px",
    maxWidth: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5bc0de",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#ffc107",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  error: {
    color: "red",
    fontSize: "1.2rem",
    marginTop: "20px",
  },
};

export default CurriculumDetail;
