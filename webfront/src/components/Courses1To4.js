// src/components/Courses1To4.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Courses.css";
import CourseSidebar from "./CourseSidebar";

const Courses1To4 = () => {
  const courses = [{ name: "Basic Computer", id: 1 }];

  return (
    <div className="dashboard">
      <CourseSidebar />
      <div className="main-content">
        <div className="course-list">
          <h1>Course for Curriculum 1-4</h1>
          <div className="course-cards">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <h2>{course.name}</h2>
                <Link to={`/exam1To4`} className="exam-button">
                  Exam
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses1To4;
