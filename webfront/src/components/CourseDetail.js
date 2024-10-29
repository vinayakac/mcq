// CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { courseId } = useParams();

  // Sample data for available courses (You could also fetch this from an API)
  const courses = [
    { id: 1, name: "Typing", class: "1-4 class", curriculum: "Basic Typing Skills" },
    { id: 2, name: "Drawing", class: "1-4 class", curriculum: "Art Basics" },
    { id: 3, name: "Computer", class: "5-7 class", curriculum: "Introduction to Computers" },
    { id: 4, name: "PHP", class: "5-7 class", curriculum: "Web Development with PHP" },
    { id: 5, name: "Python", class: "8-10 class", curriculum: "Advanced Python Programming" },
  ];

  // Find the course by ID
  const course = courses.find(c => c.id === parseInt(courseId));

  return (
    <div className="course-detail-container">
      {course ? (
        <>
          <h2>{course.name}</h2>
          <p>Class: {course.class}</p>
          <p>Curriculum: {course.curriculum}</p>
          {/* Add more details or actions here, like "Join Course" */}
          <button>Join Course</button>
        </>
      ) : (
        <p>No course found with this ID.</p>
      )}
    </div>
  );
};

export default CourseDetail;
