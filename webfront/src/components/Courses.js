import React, { useState } from "react"; // Import useState
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import './Courses.css'; // Import the CSS file

const initialCourses = [
  { name: "Typing", curriculum: "1-4 class" },
  { name: "Drawing", curriculum: "1-4 class" },
  { name: "Computer", curriculum: "5-7 class" },
  { name: "PHP", curriculum: "5-7 class" },
  { name: "Python", curriculum: "8-10 class" },
  { name: "Advanced PHP", curriculum: "8-10 class" },
];

function Courses() {
  const { curriculum } = useParams(); // Extract curriculum from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate
  const [courses, setCourses] = useState(initialCourses); // State to hold courses
  const [newCourseName, setNewCourseName] = useState(""); // State for new course name

  // Filter courses based on the selected curriculum
  const filteredCourses = courses.filter((course) => course.curriculum === curriculum);

  // Function to handle course selection
  const handleCourseSelect = (courseName) => {
    navigate(`/course-details/${curriculum}/${courseName}`); // Navigate to CourseDetails with curriculum and course
  };

  // Function to handle adding a new course
  const handleAddCourse = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (newCourseName.trim() !== "") {
      const newCourse = {
        name: newCourseName.trim(),
        curriculum: curriculum, // Assign the current curriculum
      };
      setCourses((prevCourses) => [...prevCourses, newCourse]); // Add new course to the state
      setNewCourseName(""); // Clear input field
    }
  };

  return (
    <div className="courses">
      <h2 className="header">Courses for Curriculum {curriculum}</h2>

      <form onSubmit={handleAddCourse} className="add-course-form">
        <input
          type="text"
          placeholder="Enter Course Name"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)} // Update state on input change
          required
        />
        <button type="submit">Add Course</button>
      </form>

      <table className="coursesTable">
        <thead>
          <tr>
            <th className="th">Course Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <tr key={index} className="tableRow">
                <td
                  className="td"
                  onClick={() => handleCourseSelect(course.name)} // Call navigate on click
                >
                  {course.name}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="td no-courses" colSpan="1">
                No courses available for this curriculum.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
