import React from "react";
import { useLocation } from "react-router-dom";
import "./JoinedCourses.css"; // Ensure this CSS file exists

const JoinedCourses = ({ initialCourses }) => {
  const location = useLocation();
  const { state } = location;
  const joinedCourses = state?.joinedCourses || [];

  return (
    <div className="joined-courses-container">
      <h2>Your Joined Courses</h2>
      {joinedCourses.length > 0 ? (
        <table className="joined-courses-table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Curriculum</th>
            </tr>
          </thead>
          <tbody>
            {joinedCourses.map((courseId) => {
              const course = initialCourses.find(
                (course) => course.id === courseId
              );
              return (
                <tr key={courseId}>
                  <td>{courseId}</td>
                  <td>{course ? course.name : "Unknown Course"}</td>
                  <td>{course ? course.classRange : "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>You have not joined any courses yet.</p>
      )}
    </div>
  );
};

export default JoinedCourses;
