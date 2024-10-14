import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const UserProfile = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy user data for demonstration
  const user = {
    username: "john_doe",
    email: "john_doe@example.com",
  };

  // Function to handle logout
  const handleLogout = () => {
    // Here you would typically clear user data and authentication tokens
    // For this example, we'll just redirect to the login page
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Profile</h1>
      <div style={styles.card}>
        <h2>User Details</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

// Styles for the User Profile component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    width: "80%",
  },
  logoutButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#d9534f", // Bootstrap danger color
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default UserProfile;
