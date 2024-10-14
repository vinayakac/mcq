import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Curriculums.css"; // Import the CSS file

// Initial data for curriculums including names and descriptions
const initialCurriculumsData = [
  { name: "1-4 class", description: "Basic education for young learners." },
  {
    name: "5-7 class",
    description: "Intermediate education focusing on core subjects.",
  },
  {
    name: "8-10 class",
    description: "Advanced education preparing for secondary studies.",
  },
];

function Curriculums() {
  const [curriculums, setCurriculums] = useState(initialCurriculumsData);
  const [newCurriculum, setNewCurriculum] = useState("");
  const [newDescription, setNewDescription] = useState(""); // For new description
  const navigate = useNavigate(); // Hook for navigation

  // Function to add a new curriculum and description
  const addCurriculum = () => {
    if (
      newCurriculum.trim() &&
      newDescription.trim() &&
      !curriculums.some((curr) => curr.name === newCurriculum.trim())
    ) {
      setCurriculums([
        ...curriculums,
        { name: newCurriculum.trim(), description: newDescription.trim() },
      ]);
      setNewCurriculum("");
      setNewDescription("");
    }
  };

  return (
    <div className="curriculums-container">
      <h2>Curriculums</h2>
      <div className="add-curriculum">
        <input
          type="text"
          value={newCurriculum}
          onChange={(e) => setNewCurriculum(e.target.value)}
          placeholder="Add new curriculum"
        />
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Add description"
        />
        <button onClick={addCurriculum}>Add Curriculum</button>
      </div>
      <table className="curriculums-table">
        <thead>
          <tr>
            <th>Curriculum</th>
            <th>Description</th>
            <th>View Courses</th> {/* New column for viewing courses */}
          </tr>
        </thead>
        <tbody>
          {curriculums.map((curriculum, index) => (
            <tr key={index}>
              <td>{curriculum.name}</td>
              <td>{curriculum.description}</td>
              <td>
                <button
                  onClick={() => navigate(`/courses/${curriculum.name}`)} // Navigate to CoursesPage
                >
                  View Courses
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Curriculums;
