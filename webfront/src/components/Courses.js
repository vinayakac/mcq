// src/components/Courses.js
import React, { useState } from "react";
import CourseDetails from "./CourseDetails"; // Import the CourseDetails component
import "./Courses.css"; // Import the CSS file

const initialCourses = [
  { name: "Math", curriculum: "1-4 class" },
  { name: "Science", curriculum: "1-4 class" },
  { name: "History", curriculum: "5-7 class" },
  { name: "Geography", curriculum: "5-7 class" },
  { name: "Biology", curriculum: "8-10 class" },
];

function Courses({ curriculum }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Filter courses based on the selected curriculum
  const filteredCourses = curriculum
    ? initialCourses.filter((course) => course.curriculum === curriculum)
    : initialCourses; // Show all courses if no curriculum is selected

  // Function to handle course selection
  const handleCourseSelect = (courseName) => {
    setSelectedCourse(courseName); // Set the selected course
  };

  return (
    <div className="courses">
      <h2>Courses for Curriculum {curriculum || "All"}</h2>
      <ul>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <li key={index} onClick={() => handleCourseSelect(course.name)}>
              {course.name} {/* Show only the course name */}
            </li>
          ))
        ) : (
          <li>No courses available for this curriculum.</li>
        )}
      </ul>

      {/* Render CourseDetails when a course is selected */}
      {selectedCourse && <CourseDetails course={selectedCourse} />}
    </div>
  );
}

export default Courses;
