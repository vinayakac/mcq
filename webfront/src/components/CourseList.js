import React from "react";
import { useParams } from "react-router-dom";

const CourseList = () => {
  const { curriculum } = useParams();

  // Add logic to fetch or display courses based on the curriculum
  return (
    <div>
      <h2>Courses for Curriculum: {curriculum}</h2>
      {/* Display courses here */}
    </div>
  );
};

export default CourseList;
