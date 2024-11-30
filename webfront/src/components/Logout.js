import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css"; // Import the CSS file

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and navigate to login
    localStorage.removeItem("user");
    navigate("/student-login");
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Confirm Logout</button>
    </div>
  );
};

export default Logout;
