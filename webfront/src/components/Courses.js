// Courses.js
import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    { id: 'painting', name: 'Painting' },
    { id: 'typing', name: 'Typing' },
    { id: 'math', name: 'Math' },
  ]; // Sample course list

  return (
    <div>
      <h2>All Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
