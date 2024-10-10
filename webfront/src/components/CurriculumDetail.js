// src/components/ClassDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CurriculumDetails = () => {
  const { classId } = useParams();

  const courses = {
    '1-4': ['Painting', 'Typing', 'CSS'],
    '5-7': ['Math', 'Science', 'English'],
    '8-10': ['Physics', 'Chemistry', 'Biology'],
  };

  return (
    <div>
      <h2>Class {classId}</h2>
      <ul>
        {courses[classId].map(course => (
          <li key={course}>
            <Link to={`/courses/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurriculumDetails;
