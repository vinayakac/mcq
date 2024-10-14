
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  // State to hold checkbox status for each section
  const [checkedItems, setCheckedItems] = useState({
    curriculums: false,
    courses: false,
    mcqExams: false,
    students: false,
  });

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  return (
    <div className="sidebar-container">
      {/* MCQ Application header box */}
      <div className="sidebar-box mcq-header">
        <h1>MCQ Application</h1>
      </div>

      {/* Dashboard box */}
      <div className="sidebar-box">
        <h4>Dashboard</h4>
      </div>

      {/* Curriculums box */}
      <div className="sidebar-section">
        <label className="sidebar-link">
          <input
            type="checkbox"
            name="curriculums"
            checked={checkedItems.curriculums}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/curriculums" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Curriculums</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* Courses box */}
      <div className="sidebar-section">
        <label className="sidebar-link">
          <input
            type="checkbox"
            name="courses"
            checked={checkedItems.courses}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/courses" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Courses</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* MCQ Exams box */}
      <div className="sidebar-section">
        <label className="sidebar-link">
          <input
            type="checkbox"
            name="mcqExams"
            checked={checkedItems.mcqExams}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/mcq-exams" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>MCQ Exams</h4>
            </div>
          </Link>
        </label>
      </div>

      {/* Students box */}
      <div className="sidebar-section">
        <label className="sidebar-link">
          <input
            type="checkbox"
            name="students"
            checked={checkedItems.students}
            onChange={handleCheckboxChange}
          />
          <Link to="/dashboard/students" className="sidebar-box-item">
            <div className="sidebar-box">
              <h4>Students</h4>
            </div>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
