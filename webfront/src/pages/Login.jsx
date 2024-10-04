import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import FormInput from '../components/FormInput';

import './Login.css'; // Import the CSS file

// Zod validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email format").refine((value) => {
    return value.endsWith("@gmail.com");
  }, {
    message: "Email must be a Gmail address.",
  }),
  password: z.string().min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
});

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear field-specific errors on input change
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let hasError = false;

    // Check if email/username field is empty
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email or Username is required." }));
      hasError = true;
    }

    // Check if password field is empty
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required." }));
      hasError = true;
    }

    if (hasError) return; // Stop if there are errors

    // Clear general errors
    setErrors({ ...errors, general: "" });

    // Validate with Zod
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        general: result.error.errors.map((err) => err.message).join(", "),
      }));
      return;
    }

    // Check for user in local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email) {
      setErrors((prev) => ({ ...prev, general: "You must register first." }));
      return;
    }

    if (storedUser.password !== formData.password) {
      setErrors((prev) => ({ ...prev, general: "Invalid password. Please try again." }));
      return;
    }

    // If valid, redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      {errors.general && <div className="login-error">{errors.general}</div>}
      <form onSubmit={handleLogin}>
        <FormInput
          label="Email or Username"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email or username"
          error={errors.email} // Pass error message if the email/username field is empty
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password} // Pass error message if the password field is empty
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="signup-link">
        <p>
          Don't have an account? <a href="/register" className="login-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
