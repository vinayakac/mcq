import React from "react";
import { Link } from "react-router-dom";

const curriculums = ["1-4", "5-7", "8-10"];

const CurriculumList = () => {
  return (
    <div>
      <h2>Curriculums</h2>
      <button>Add Curriculum</button>
      <ul>
        {curriculums.map((curriculum, index) => (
          <li key={index}>
            <Link to={`/curriculums/${curriculum}`}>{curriculum}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumList;
