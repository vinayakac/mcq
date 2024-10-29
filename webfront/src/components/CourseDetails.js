import React, { useState } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Typing', classRange: '1-4', description: 'Learn typing basics for young learners.' },
    { id: 2, name: 'Introduction to C', classRange: '5-7', description: 'An introductory course on C programming.' },
    { id: 3, name: 'Web Development', classRange: '5-7', description: 'Learn the fundamentals of web development.' },
    { id: 4, name: 'Introduction to Java', classRange: '8-10', description: 'Understanding the basics of Java programming.' },
    { id: 5, name: 'Introduction to Python', classRange: '8-10', description: 'A beginner-friendly course on Python programming.' },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: '',
    classRange: '',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    if (!newCourse.name || !newCourse.classRange || !newCourse.description) return;

    const newCourseData = {
      id: courses.length + 1, // Simple ID generation
      name: newCourse.name,
      classRange: newCourse.classRange,
      description: newCourse.description,
    };

    setCourses((prevCourses) => [...prevCourses, newCourseData]);
    setNewCourse({ name: '', classRange: '', description: '' }); // Reset form
    setIsFormVisible(false); // Hide the form after submission
  };

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      <div className="courses-container">
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Class Range</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} className="course-item">
                <td>{course.name}</td>
                <td>{course.classRange}</td>
                <td>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? 'Cancel' : 'Add Course'}
      </button>

      {isFormVisible && (
        <div>
          <h3>Add a New Course</h3>
          <form onSubmit={handleCourseSubmit} className="course-form">
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
              Class Range:
              <input
                type="text"
                name="classRange"
                value={newCourse.classRange}
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
            <button type="submit">Submit Course</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
