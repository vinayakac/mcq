// CurriculumDetail.js
import React from "react";

const CurriculumDetail = ({ classId }) => {
  const courses = ["Painting", "Typing", "Math"]; // Sample courses

  return (
    <div>
      <h2>Details for Class {classId}</h2>
      <button>Add Course</button>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumDetail;
