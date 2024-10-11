import React, { useState } from "react";
import "./Curriculums.css"; // Import the CSS file
import Courses from "./Courses";
import CourseDetails from "./CourseDetails";

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
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  const handleCurriculumClick = (curriculum) => {
    setSelectedCurriculum(curriculum);
    setSelectedCourse(null);
  };

  // Function to handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
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
          </tr>
        </thead>
        <tbody>
          {curriculums.map((curriculum, index) => (
            <tr
              key={index}
              className={`curriculum-item ${
                selectedCurriculum === curriculum.name ? "selected" : ""
              }`}
              onClick={() => handleCurriculumClick(curriculum.name)}
            >
              <td>{curriculum.name}</td>
              <td>{curriculum.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCurriculum && (
        <div className="courses-section">
          {" "}
          {/* New div for spacing */}
          <Courses
            curriculum={selectedCurriculum}
            onCourseSelect={handleCourseSelect} // Use handleCourseSelect here
          />
        </div>
      )}

      {selectedCourse && <CourseDetails course={selectedCourse} />}
    </div>
  );
}

export default Curriculums;
