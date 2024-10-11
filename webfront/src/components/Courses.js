import React, { useState, useEffect } from "react";
import CourseDetails from "./CourseDetails"; // Import the CourseDetails component
import "./Courses.css"; // Import the CSS file

const initialCourses = [
  { name: "Typing", curriculum: "1-4 class" },
  { name: "Drawing", curriculum: "1-4 class" },
  { name: "Computer", curriculum: "5-7 class" },
  { name: "PHP", curriculum: "5-7 class" },
  { name: "Python", curriculum: "8-10 class" },
];

function Courses({ curriculum }) {
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseCurriculum, setNewCourseCurriculum] = useState("");

  // Load courses from localStorage on component mount
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses"));
    if (storedCourses) {
      setCourses(storedCourses);
    }
  }, []);

  // Update localStorage whenever the courses state changes
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // Reset selected course when curriculum changes
  useEffect(() => {
    setSelectedCourse(null); // Clear selected course
  }, [curriculum]);

  // Filter courses based on the selected curriculum
  const filteredCourses = curriculum
    ? courses.filter((course) => course.curriculum === curriculum)
    : courses; // Show all courses if no curriculum is selected

  // Function to handle course selection
  const handleCourseSelect = (courseName) => {
    setSelectedCourse(courseName); // Set the selected course
  };

  // Function to handle adding a new course
  const handleAddCourse = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    const trimmedCourseName = newCourseName.trim();
    const trimmedCourseCurriculum = newCourseCurriculum.trim();
    if (
      trimmedCourseName &&
      trimmedCourseCurriculum &&
      !courses.some(
        (course) =>
          course.name === trimmedCourseName &&
          course.curriculum === trimmedCourseCurriculum
      )
    ) {
      const newCourse = {
        name: trimmedCourseName,
        curriculum: trimmedCourseCurriculum,
      };
      setCourses((prevCourses) => [...prevCourses, newCourse]); // Add the new course
      setNewCourseName(""); // Clear the input fields
      setNewCourseCurriculum(""); // Clear the curriculum input
    } else {
      alert("Course already exists or input fields are empty!");
    }
  };

  return (
    <div className="courses">
      <h2>Courses for Curriculum {curriculum || "All"}</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Curriculum</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <tr
                key={index}
                onClick={() => handleCourseSelect(course.name)}
                className={selectedCourse === course.name ? "selected-course" : ""}
              >
                <td>{course.name}</td>
                <td>{course.curriculum}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No courses available for this curriculum.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Show add course form only when no curriculum is selected */}
      {!curriculum && (
        <form onSubmit={handleAddCourse} className="add-course-form">
          <input
            type="text"
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            placeholder="Course Name"
            required
          />
          <input
            type="text"
            value={newCourseCurriculum}
            onChange={(e) => setNewCourseCurriculum(e.target.value)}
            placeholder="Curriculum (e.g., 1-4 class)"
            required
          />
          <button type="submit">Add Course</button>
        </form>
      )}

      {/* Render CourseDetails when a course is selected */}
      {selectedCourse && <CourseDetails course={selectedCourse} />}
    </div>
  );
}

export default Courses;
