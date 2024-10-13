import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "./Sidebar";
import "./Dashboard.css"; // Import CSS for styling

const Dashboard = () => {
  const [showCurriculums, setShowCurriculums] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleShowCurriculums = () => {
    setShowCurriculums(true); // Show curriculums when the button is clicked
  };

  const handleCurriculumClick = (key) => {
    if (key === "1-4") {
      navigate("/courses1-4"); // Navigate to courses for 1-4
    } else if (key === "5-7") {
      navigate("/courses5-7"); // Navigate to courses for 5-7
    } else if (key === "8-10") {
      navigate("/courses8-10"); // Navigate to courses for 8-10
    }
  };

  const curricula = [
    {
      name: "Curriculum 1-4",
      key: "1-4",
      description: "Overview of Curriculum for grades 1 to 4.",
    },
    {
      name: "Curriculum 5-7",
      key: "5-7",
      description: "Overview of Curriculum for grades 5 to 7.",
    },
    {
      name: "Curriculum 8-10",
      key: "8-10",
      description: "Overview of Curriculum for grades 8 to 10.",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar onShowCurriculums={handleShowCurriculums} />
      <div className="main-content">
        <h1 className="dashboard-heading">Dashboard</h1>{" "}
        {/* Header for Dashboard */}
        {showCurriculums && (
          <div>
            <h2>Curriculums</h2> {/* Heading for the curriculum section */}
            <div className="curriculum-boxes">
              {curricula.map((curriculum) => (
                <div
                  key={curriculum.key}
                  className="curriculum-card"
                  onClick={() => handleCurriculumClick(curriculum.key)} // Handle click
                >
                  <h3>{curriculum.name}</h3> {/* Curriculum name */}
                  <p>{curriculum.description}</p> {/* Description */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
