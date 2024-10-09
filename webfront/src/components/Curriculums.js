
import React, { useState } from "react";
import "./Curriculums.css";
import Courses from "./Courses"; // Import Courses component

const initialCurriculumsData = ["1-4 class", "5-7 class", "8-10 class"]; // Updated curriculums

function Curriculums() {
  const [curriculums, setCurriculums] = useState(initialCurriculumsData);
  const [newCurriculum, setNewCurriculum] = useState("");
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  const addCurriculum = () => {
    if (newCurriculum.trim() && !curriculums.includes(newCurriculum.trim())) {
      setCurriculums([...curriculums, newCurriculum.trim()]);
      setNewCurriculum("");
    }
  };

  const handleCurriculumClick = (curriculum) => {
    setSelectedCurriculum(curriculum); // Set the selected curriculum
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
        <button onClick={addCurriculum}>Add Curriculum</button>
      </div>
      <ul className="curriculums-list">
        {curriculums.map((curriculum, index) => (
          <li
            key={index}
            className="curriculum-item"
            onClick={() => handleCurriculumClick(curriculum)}
          >
            {curriculum}
          </li>
        ))}
      </ul>

      {/* Show Courses component when a curriculum is selected */}
      {selectedCurriculum && (
        <Courses curriculum={selectedCurriculum} />
      )}
    </div>
  );
}

export default Curriculums;