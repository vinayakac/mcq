import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinCourses.css"; // Ensure this CSS file exists

const initialCourses = [
  { id: 1, name: "Painting", classRange: "1-4 Class" },
  { id: 2, name: "Typing", classRange: "1-4 Class" },
  { id: 3, name: "Introduction to C", classRange: "5-7 Class" },
  { id: 4, name: "Introduction to Java", classRange: "5-7 Class" },
  { id: 5, name: "Introduction to Web Development", classRange: "8-10 Class" },
  { id: 6, name: "Introduction to Python", classRange: "8-10 Class" },
];

const JoinCourses = () => {
  const [joinedCourses, setJoinedCourses] = useState([]);
  const navigate = useNavigate();

  const handleJoinCourse = (courseId) => {
    if (!joinedCourses.includes(courseId)) {
      setJoinedCourses((prev) => [...prev, courseId]);
      alert(
        `Joined course: ${
          initialCourses.find((course) => course.id === courseId).name
        }`
      );
      navigate("/joined-courses", {
        state: { joinedCourses: [...joinedCourses, courseId] },
      });
    } else {
      alert("You are already enrolled in this course.");
    }
  };

  return (
    <div className="join-course-container">
      <h2>Join Courses</h2>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Curriculums</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {initialCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.classRange}</td>
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
    </div>
  );
};

export default JoinCourses;
