import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const emailExists = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      alert("An account with this email already exists.");
      return;
    }

    // Store the new user data (excluding confirmPassword)
    const { username, email, password } = formData;
    const newUser = { username, email, password };

    // Add the new user to the existing users array and save it to localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Navigate to login page after storing the data
    navigate("/login");
  };

  return (
    <div
      className="register-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
