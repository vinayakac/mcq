import React, { useState } from "react";
import CurriculumList from "./CurriculumList"; // Assume this component will display the list of curriculums

const Dashboard = () => {
  const [showCurriculums, setShowCurriculums] = useState(false);

  const handleShowCurriculums = () => {
    setShowCurriculums(!showCurriculums);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px", padding: "20px", background: "#f0f0f0" }}>
        <h2>Dashboard</h2>
        <button onClick={handleShowCurriculums}>
          {showCurriculums ? "Hide Curriculums" : "Show Curriculums"}
        </button>
      </div>
      <div style={{ flexGrow: 1, padding: "20px" }}>
        {showCurriculums ? (
          <CurriculumList />
        ) : (
          <p>
            Welcome to the dashboard! Click on 'Show Curriculums' to see the
            list.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
