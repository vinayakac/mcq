// JoinCourses.js
import React from 'react';
import { Link } from 'react-router-dom';

const JoinCourses = () => {
  // Sample data for available courses
  const courses = [
    { id: 1, name: "Typing", class: "1-4 class", curriculum: "Basic Typing Skills" },
    { id: 2, name: "Drawing", class: "1-4 class", curriculum: "Art Basics" },
    { id: 3, name: "Computer", class: "5-7 class", curriculum: "Introduction to Computers" },
    { id: 4, name: "PHP", class: "5-7 class", curriculum: "Web Development with PHP" },
    { id: 5, name: "Python", class: "8-10 class", curriculum: "Advanced Python Programming" },
  ];

  return (
    <div className="join-courses-container">
      <h2>Available Courses to Join</h2>
      {courses.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Class</th>
              <th>Curriculum</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.class}</td>
                <td>{course.curriculum}</td>
                <td>
                  <Link to={`/join-courses/${course.id}`}>
                    <button>Join Course</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default JoinCourses;
