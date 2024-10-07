import React from "react";

// Sample data structure for curricula and their corresponding courses
const curriculaData = {
  "1-4": [
    { id: 1, name: "Math 101", description: "Introduction to Mathematics" },
    { id: 2, name: "Science 101", description: "Basics of Science" },
    { id: 3, name: "English 101", description: "Fundamentals of English" },
  ],
  "5-7": [
    {
      id: 1,
      name: "History 101",
      description: "Introduction to World History",
    },
    { id: 2, name: "Geography 101", description: "Basics of Geography" },
    {
      id: 3,
      name: "Literature 101",
      description: "Introduction to Literature",
    },
  ],
  "8-10": [
    { id: 1, name: "Physics 101", description: "Introduction to Physics" },
    { id: 2, name: "Biology 101", description: "Basics of Biology" },
    { id: 3, name: "Chemistry 101", description: "Fundamentals of Chemistry" },
  ],
};

const CurriculumTable = ({ curriculum }) => {
  // Get courses for the selected curriculum
  const courses = curriculaData[curriculum.name];

  return (
    <div>
      <h2>{curriculum.name} Curriculum</h2>
      <p>Description of {curriculum.name} curriculum.</p>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <button>Add Course</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No courses available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CurriculumTable;
