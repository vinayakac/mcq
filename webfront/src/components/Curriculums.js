import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Curriculums.css';

const Curriculums = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [courses, setCourses] = useState({
    "1-4": [
      { id: 1, name: 'Typing', description: 'Learn typing skills.' },
      { id: 2, name: 'Painting', description: 'Introduction to painting techniques.' },
    ],
    "5-7": [
      { id: 3, name: 'Introduction to C', description: 'Basic programming concepts using C.' },
      { id: 4, name: 'Introduction to Web Development', description: 'Learn HTML, CSS, and JavaScript.' },
    ],
    "8-10": [
      { id: 5, name: 'Introduction to Java', description: 'Fundamentals of Java programming.' },
      { id: 6, name: 'Introduction to Python', description: 'Learn Python programming for beginners.' },
    ],
  });

  const [newCourse, setNewCourse] = useState({ name: '', description: '' });
  const [showForm, setShowForm] = useState(false);
  const [newClass, setNewClass] = useState({ range: '' });
  const [showClassForm, setShowClassForm] = useState(false);
  const navigate = useNavigate();

  // Handle class range selection
  const handleRangeClick = (range) => {
    setSelectedRange(range);
    setShowForm(false); // Hide form when changing class range
  };

  // Handle course click and navigate to StudentList component
  const handleCourseClick = (courseName) => {
    navigate(`/dashboard/students/${courseName}`);
  };

  // Handle form input changes for courses
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // Handle form input changes for new class
  const handleClassInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prevClass) => ({
      ...prevClass,
      [name]: value,
    }));
  };

  // Handle course submission
  const handleCourseSubmit = (e) => {
    e.preventDefault();
    if (!newCourse.name || !newCourse.description || !selectedRange) return;

    const courseToAdd = {
      id: courses[selectedRange].length + 1, // Simple ID generation
      name: newCourse.name,
      description: newCourse.description,
    };

    setCourses((prevCourses) => ({
      ...prevCourses,
      [selectedRange]: [...prevCourses[selectedRange], courseToAdd],
    }));

    setNewCourse({ name: '', description: '' }); // Reset the form
    setShowForm(false); // Hide the form after adding
  };

  // Handle class submission
  const handleClassSubmit = (e) => {
    e.preventDefault();
    if (!newClass.range) return;

    // Add the new class range to the classRanges array
    classRanges.push({
      range: newClass.range,
      description: "Description not provided", // You can customize this if needed
    });

    setNewClass({ range: '' }); // Reset the form
    setShowClassForm(false); // Hide the form after adding
  };

  const classRanges = [
    { range: "1-4", description: "Basic education for young learners." },
    { range: "5-7", description: "Intermediate education for growing minds." },
    { range: "8-10", description: "Advanced education preparing for high school." },
  ];

  return (
    <div className="curriculums">
      <h2>Select a Class Range</h2>
      {/* Table format for class ranges */}
      <table className="class-range-table">
        <thead>
          <tr>
            <th>Class Range</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {classRanges.map(({ range, description }) => (
            <tr key={range} onClick={() => handleRangeClick(range)}>
              <td>{range}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render courses for the selected range */}
      {selectedRange && (
        <div className="course-box">
          <h3>Courses for Classes {selectedRange}</h3>
          <ul>
            {courses[selectedRange].map(course => (
              <li key={course.id} className="course-item" onClick={() => handleCourseClick(course.name)}>
                <h4>{course.name}</h4>
                <p>{course.description}</p>
              </li>
            ))}
          </ul>
          {/* Add new course button */}
          <button onClick={() => setShowForm(true)} className="add-course-button">
            Add New Course
          </button>
          {/* Show form to add a new course */}
          {showForm && (
            <form onSubmit={handleCourseSubmit} className="course-form">
              <h4>Add a New Course</h4>
              <label>
                Course Name:
                <input
                  type="text"
                  name="name"
                  value={newCourse.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={newCourse.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          )}
        </div>
      )}

      {/* Button to add a new class */}
      <button onClick={() => setShowClassForm(true)} className="add-class-button">
        Add New Class
      </button>
      {/* Show form to add a new class */}
      {showClassForm && (
        <form onSubmit={handleClassSubmit} className="class-form">
          <h4>Add a New Class</h4>
          <label>
            Class Range:
            <input
              type="text"
              name="range"
              value={newClass.range}
              onChange={handleClassInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowClassForm(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Curriculums;
