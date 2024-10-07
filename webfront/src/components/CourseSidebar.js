// src/components/CourseSidebar.js
import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "./CourseSidebar.css"; // Import CSS for styling

const CourseSidebar = () => {
  return (
    <div className="course-sidebar">
      <h2>Curriculums</h2>
      <ul>
        <li>
          <Link to="/courses1-4" className="curriculum-button">
            Curriculum 1-4
          </Link>
        </li>
        <li>
          <Link to="/courses5-7" className="curriculum-button">
            Curriculum 5-7
          </Link>
        </li>
        <li>
          <Link to="/courses8-10" className="curriculum-button">
            Curriculum 8-10
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CourseSidebar;
