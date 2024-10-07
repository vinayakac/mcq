import React from "react";

const Sidebar = ({ onCurriculumClick }) => {
  const curricula = [
    { id: 1, name: "1-4" },
    { id: 2, name: "5-7" },
    { id: 3, name: "8-10" },
  ];

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <h3>Curriculums</h3>
      {curricula.map((curriculum) => (
        <button
          key={curriculum.id}
          onClick={() => onCurriculumClick(curriculum)}
        >
          {curriculum.name}
        </button>
      ))}
      <button>Add Curriculum</button>
    </div>
  );
};

export default Sidebar;
