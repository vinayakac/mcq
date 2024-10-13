import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const initialCurriculumsData = [
  { name: "1-4 class", courses: ["Typing", "Drawing"] },
  { name: "5-7 class", courses: ["Computer", "PHP"] },
  { name: "8-10 class", courses: ["Python", "Advanced PHP"] },
];

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "1000px", // Increased max width for better spacing
    margin: "0 auto", // Center the container
  },
  header: {
    textAlign: "center",
    color: "#333", // Darker text color
    backgroundColor: "#aeeeee", // Light teal for the heading
    padding: "15px", // Increased padding for header
    borderRadius: "5px",
    marginBottom: "20px", // Add space below the header
    fontSize: "26px", // Increased font size for header
  },
  addCurriculum: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
    flex: 1,
  },
  button: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#b2ebf2", // Lighter button color
    color: "black",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  table: {
    width: "100%", // Set table width to 100%
    borderCollapse: "collapse",
    margin: "20px auto", // Center the table
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow
    borderRadius: "8px", // Rounded corners
    overflow: "hidden", // For rounded corners
  },
  th: {
    border: "1px solid #ddd",
    padding: "15px", // Increased padding for a more spacious look
    textAlign: "left",
    backgroundColor: "#e0e0e0", // Light gray for headers
    color: "#333", // Darker text for headers
    fontSize: "20px", // Increased font size for headers
  },
  td: {
    border: "1px solid #ddd",
    padding: "15px", // Increased padding for table data
    fontSize: "18px", // Increased font size for table data
  },
  curriculumRow: {
    backgroundColor: "#e0f7fa", // Light blue for curriculum rows
    color: "#00796b", // Dark teal for text
  },
  courseRow: {
    backgroundColor: "#f1f8e9", // Very light green for course rows
    color: "#388e3c", // Darker green for text
  },
  rowHover: {
    backgroundColor: "#f5f5f5", // Light gray for hover effect
  },
  selectedRow: {
    backgroundColor: "#b2ebf2", // Light teal for selected row
  },
};

function Curriculums() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [curriculums, setCurriculums] = useState(initialCurriculumsData);
  const [newCurriculum, setNewCurriculum] = useState("");

  const addCurriculum = () => {
    if (
      newCurriculum.trim() &&
      !curriculums.some((curr) => curr.name === newCurriculum.trim())
    ) {
      setCurriculums([
        ...curriculums,
        { name: newCurriculum.trim(), courses: [] },
      ]);
      setNewCurriculum("");
    }
  };

  const handleCurriculumClick = (curriculum) => {
    navigate(`/courses/${curriculum}`); // Navigate to the CoursesPage
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Curriculums</h2>
      <div style={styles.addCurriculum}>
        <input
          type="text"
          value={newCurriculum}
          onChange={(e) => setNewCurriculum(e.target.value)}
          placeholder="Add new curriculum"
          style={styles.input}
        />
        <button onClick={addCurriculum} style={styles.button}>
          Add Curriculum
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Curriculum</th>
            <th style={styles.th}>Courses</th>
          </tr>
        </thead>
        <tbody>
          {curriculums.map((curriculum, index) => (
            <tr
              key={index}
              onClick={() => handleCurriculumClick(curriculum.name)}
              style={styles.curriculumRow}
            >
              <td>{curriculum.name}</td>
              <td>
                {curriculum.courses.length > 0
                  ? curriculum.courses.join(", ")
                  : "No courses available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Curriculums;
