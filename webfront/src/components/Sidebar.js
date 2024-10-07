import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Create a CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCurriculumClick = () => {
    navigate("/curriculum");
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="dashboard-menu">
        <button className="dashboard-button" onClick={handleCurriculumClick}>
          Curriculum
        </button>
        {/* Add more buttons or links for other sections if needed */}
      </div>
    </div>
  );
};

export default Dashboard;
