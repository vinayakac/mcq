import React from "react";
import { useNavigate } from "react-router-dom";

const initialCourses = [
  { name: "Painting", curriculum: "1-4 class" },
  { name: "Typing", curriculum: "1-4 class" },
  { name: "Basic Computer Skills", curriculum: "1-4 class" },
  { name: "Advanced Software Applications", curriculum: "5-7 class" },
  { name: "Introduction to Programming", curriculum: "5-7 class" },
  {name:"Introduction computer", curriculum:"1-4 class"},
  {name:"Introduction to Programming",curriculum:"5-7 class"},
  {name:"Excel",curriculum:"5-7 class"},
  {name:"Powerpoint",curriculum:"8-10class"},
  { name: "C language", curriculum: "8-10 class" },
  { name: "Data Structures", curriculum: "8-10 class" },
  { name: "Algorithms", curriculum: "8-10 class" },
  { name: "Web Development", curriculum: "8-10 class" },
];

function Courses({ curriculum }) {
  const navigate = useNavigate();

  // Filter courses based on the selected curriculum
  const filteredCourses = curriculum
    ? initialCourses.filter((course) => course.curriculum === curriculum)
    : initialCourses;

  // Function to handle course selection
  const handleCourseSelect = (courseName) => {
    navigate(`/courses/${courseName}`); // Navigate to the course details page
  };

  return (
    <div className="courses">
      <h2>Courses for Curriculum {curriculum || "All"}</h2>
      <ul>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <li key={index} onClick={() => handleCourseSelect(course.name)}>
              {course.name}
            </li>
          ))
        ) : (
          <li>No courses available for this curriculum.</li>
        )}
      </ul>
    </div>
  );
}

export default Courses;
