import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    // Email validation using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Store data in local storage
    const userData = {
      username,
      email,
      password, // Consider encrypting passwords in a real application
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Set success message
    setSuccess("Account created successfully!");

    // Clear the form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f4f8", // Light background color
        minHeight: "100vh", // Full height of the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "50px",
          border: "5px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "lightblue", // White background for the form
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Create Account</h2>
        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
        {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#87CEEB", // Sky blue background for input
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)", // Inner shadow for depth
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#87CEEB", // Sky blue background for input
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)", // Inner shadow for depth
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#87CEEB", // Sky blue background for input
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)", // Inner shadow for depth
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#87CEEB", // Sky blue background for input
                boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)", // Inner shadow for depth
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 15px",
              backgroundColor: "blue", // Dark blue background for the button
              color: "#fff", // White text color for contrast
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
              transition: "background-color 0.3s, color 0.3s", // Smooth transition
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#00509e"; // Lighter dark blue on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#003366"; // Revert to original dark blue
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
