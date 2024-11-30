import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Exams from "./Exams"; // Import Exam component
import Layout from "../layouts/Layout";
import "./CoursesPage.css"; // Ensure this path is correct

const initialCourses = [
  { name: "Typing", curriculum: "1-4 class" },
  { name: "Drawing", curriculum: "1-4 class" },
  { name: "Computer", curriculum: "5-7 class" },
  { name: "PHP", curriculum: "5-7 class" },
  { name: "Python", curriculum: "8-10 class" },
];

const CoursesPage = () => {
  const { curriculumName } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course

  // Filter courses based on the selected curriculum
  const filteredCourses = initialCourses.filter(
    (course) => course.curriculum === curriculumName
  );

  return (
    <Layout>
      <div className="courses-page-container">
        <div className="main-content">
          <h2>Courses for {curriculumName}</h2>
          {filteredCourses.length > 0 ? (
            <table className="courses-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Curriculum</th>
                  {/* Removed Actions heading */}
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.name}</td>
                    <td>{course.curriculum}</td>
                    {/* Removed Action button */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No courses available for this curriculum.</p>
          )}
          {/* Pass selectedCourse to the Exams component if needed */}
          {selectedCourse && <Exams course={selectedCourse} />}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
