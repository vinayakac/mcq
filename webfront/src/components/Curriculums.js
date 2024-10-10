import React, { useState } from "react";
import "./Curriculums.css";
import Courses from "./Courses"; 
import CourseDetails from "./CourseDetails"; 

const initialCurriculumsData = ["1-4 class", "5-7 class", "8-10 class"]; 

function Curriculums() {
  const [curriculums, setCurriculums] = useState(initialCurriculumsData);
  const [newCurriculum, setNewCurriculum] = useState("");
  const [selectedCurriculum, setSelectedCurriculum] = useState(null); 
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [showDelete, setShowDelete] = useState(null); 

  const addCurriculum = () => {
    if (newCurriculum.trim() && !curriculums.includes(newCurriculum.trim())) {
      setCurriculums([...curriculums, newCurriculum.trim()]);
      setNewCurriculum("");
    }
  };

  const handleCurriculumClick = (curriculum) => {
    setSelectedCurriculum(curriculum);
    setSelectedCourse(null);
    setShowDelete(null);
  };

  const handleDoubleClick = (curriculum) => {
    setShowDelete(curriculum);
  };

  const confirmDelete = (curriculum) => {
    setCurriculums(curriculums.filter((c) => c !== curriculum));
    setShowDelete(null);
  };

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
        <button onClick={addCurriculum}>Add Curriculum</button>
      </div>
      <ul className="curriculums-list">
        {curriculums.map((curriculum, index) => (
          <li
            key={index}
            className="curriculum-item"
            onClick={() => handleCurriculumClick(curriculum)}
            onDoubleClick={() => handleDoubleClick(curriculum)}
          >
            {curriculum}
            {showDelete === curriculum && (
              <span
                className="delete-icon"
                onClick={() => confirmDelete(curriculum)}
                role="button"
                tabIndex="0"
                onKeyPress={() => confirmDelete(curriculum)}
              >
                🗑️
              </span>
            )}
          </li>
        ))}
      </ul>

      {selectedCurriculum && (
        <Courses
          curriculum={selectedCurriculum}
          onCourseSelect={handleCourseSelect}
        />
      )}

      {selectedCourse && <CourseDetails course={selectedCourse} />}
    </div>
  );
}

export default Curriculums;
