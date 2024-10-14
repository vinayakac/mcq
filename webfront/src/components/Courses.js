import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Courses.css';
const courseData = {
  '1-4': ['Typing', 'Painting'],
  '5-7': ['Introduction to C', 'Web Development'],
  '8-10': ['Introduction to Python', 'Introduction to Java']
};
const Courses = () => {
  const { classRange } = useParams();
  const courses = courseData[classRange] || [];
  return (
    <div className="courses">
      <h2>Courses for Classes {classRange.replace('-', ' to ')}</h2>
      <div className="course-boxes">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div className="course-box" key={index}>
              <Link to={`/dashboard/students/${course}`}>
                {course}
              </Link>
            </div>
          ))
        ) : (
          <div>No courses available for this class range</div>
        )}
      </div>
    </div>
  );
};
export default Courses;