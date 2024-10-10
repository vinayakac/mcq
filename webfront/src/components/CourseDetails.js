// src/components/CourseDetails.js
import React from "react";
import Exams from "./Exams"; // Import the Exams component
import "./CourseDetails.css"; // Import the CSS file

function CourseDetails({ course }) {
  return (
    <div className="course-details">
      {/* Show exams for the selected course */}
      <Exams course={course} />
    </div>
  );
}


export default CourseDetails;