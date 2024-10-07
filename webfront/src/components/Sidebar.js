import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <h3>Curriculums</h3>
      <Link to="/curriculums">View Curriculums</Link>
    </div>
  );
};

export default Sidebar;
