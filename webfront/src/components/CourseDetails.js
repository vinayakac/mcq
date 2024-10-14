import React, { useState } from 'react';
import './CourseDetails.css'; // Ensure the CSS file is created
const CourseDetails = () => {
  const [courses] = useState([
    { id: 1, name: 'Typing', classRange: '1-4', description: 'Learn typing basics for young learners.' },
    { id: 2, name: 'Introduction to C', classRange: '5-7', description: 'An introductory course on C programming.' },
    { id: 3, name: 'Web Development', classRange: '5-7', description: 'Learn the fundamentals of web development.' },
    { id: 4, name: 'Introduction to Java', classRange: '8-10', description: 'Understanding the basics of Java programming.' },
    { id: 5, name: 'Introduction to Python', classRange: '8-10', description: 'A beginner-friendly course on Python programming.' },
  ]);
  return (
    <div className="course-details">
      <h2>Course Details</h2>
      <div className="courses-container">
        <ul>
          {courses.map(course => (
            <li key={course.id} className="course-item">
              <h3>{course.name}</h3>
              <p>Class Range: {course.classRange}</p>
              <p>Description: {course.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CourseDetails;