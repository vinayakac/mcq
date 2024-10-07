// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css"; // Import CSS for styling

const Sidebar = ({ onShowCurriculums }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <button className="curriculum-button" onClick={onShowCurriculums}>
        Curriculums
      </button>
    </div>
  );
};

export default Sidebar;
