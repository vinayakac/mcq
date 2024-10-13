import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "./CourseDetails"; // Adjust the import based on your folder structure

const initialCourses = [
  { name: "Typing", curriculum: "1-4 class" },
  { name: "Drawing", curriculum: "1-4 class" },
  { name: "Computer", curriculum: "5-7 class" },
  { name: "PHP", curriculum: "5-7 class" },
  { name: "Python", curriculum: "8-10 class" },
];

const styles = {
  courses: {
    backgroundColor: "#f5f5f5", // Light gray background
    padding: "20px", // Space around the content
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  },
  header: {
    color: "#333", // Dark text for the heading
    marginBottom: "15px", // Space below the heading
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#e0e0e0", // Header background color
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    cursor: "pointer", // Change cursor to pointer on hover
    transition: "background-color 0.3s ease", // Smooth background color transition
  },
};

function Courses() {
  const { curriculumName } = useParams(); // Get the curriculum name from the URL
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Filter courses based on the selected curriculum
  const filteredCourses = initialCourses.filter(
    (course) => course.curriculum === curriculumName
  );

  const handleCourseSelect = (courseName) => {
    setSelectedCourse(courseName); // Set the selected course
  };

  return (
    <div style={styles.courses}>
      <h2 style={styles.header}>Courses for Curriculum: {curriculumName}</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <tr key={index} onClick={() => handleCourseSelect(course.name)}>
                <td style={styles.td}>{course.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={styles.td}>
                No courses available for this curriculum.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedCourse && <CourseDetails course={selectedCourse} />}
    </div>
  );
}

export default Courses;
