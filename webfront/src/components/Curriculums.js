import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Curriculums.css'; // Import the CSS file

const initialCurriculumsData = ["1-4 class", "5-7 class", "8-10 class"]; // Updated curriculums

function Curriculums() {
  const [curriculums, setCurriculums] = useState(initialCurriculumsData);
  const [newCurriculum, setNewCurriculum] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const addCurriculum = () => {
    if (newCurriculum.trim() && !curriculums.includes(newCurriculum.trim())) {
      setCurriculums([...curriculums, newCurriculum.trim()]);
      setNewCurriculum("");
    }
  };

  const handleCurriculumClick = (curriculum) => {
    navigate(`/courses/${curriculum}`); // Navigate to the courses page with the curriculum
  };

  return (
    <div className="container">
      <h2 className="header">Curriculums</h2>
      <div className="addCurriculum">
        <input
          type="text"
          value={newCurriculum}
          onChange={(e) => setNewCurriculum(e.target.value)}
          placeholder="Add new curriculum"
          className="input"
        />
        <button onClick={addCurriculum} className="button">
          Add Curriculum
        </button>
      </div>

      <table className="curriculumTable">
        <thead>
          <tr>
            <th className="th">Curriculum Name</th>
            <th className="th">Action</th>
          </tr>
        </thead>
        <tbody>
          {curriculums.map((curriculum, index) => (
            <tr key={index} className="tableRow">
              <td className="td" onClick={() => handleCurriculumClick(curriculum)}>
                {curriculum}
              </td>
              <td className="td">
                <button className="actionButton" onClick={() => handleCurriculumClick(curriculum)}>
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
