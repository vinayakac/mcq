import React, { useState } from "react";
import "./JoinCourse.css"; // Ensure this CSS file exists

const JoinCourse = () => {
  const initialCourses = [
    { name: "Typing", curriculum: "1-4 class" },
    { name: "Drawing", curriculum: "1-4 class" },
    { name: "Computer", curriculum: "5-7 class" },
    { name: "PHP", curriculum: "5-7 class" },
    { name: "Python", curriculum: "8-10 class" },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [joinedCourses, setJoinedCourses] = useState([]);

  const handleJoinCourse = (courseId) => {
    if (!joinedCourses.includes(courseId)) {
      setJoinedCourses((prev) => [...prev, courseId]);
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== courseId)
      ); // Remove the joined course from the list
      alert(
        `Joined course: ${
          initialCourses.find((course) => course.id === courseId).name
        }`
      );
    } else {
      alert("You are already enrolled in this course.");
    }
  };

  return (
    <div className="join-course-container">
      <h2>Join Computer Courses</h2>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>
                <button
                  className="join-button"
                  onClick={() => handleJoinCourse(course.id)}
                >
                  Join Course
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {joinedCourses.length > 0 && (
        <>
          <h3>Your Joined Courses:</h3>
          <ul className="joined-courses-list">
            {joinedCourses.map((courseId) => {
              const course = initialCourses.find((c) => c.id === courseId);
              return <li key={courseId}>{course.name}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default JoinCourse;
