import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validate with Zod
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      setError(result.error.errors.map(err => err.message).join(", "));
      return;
    }

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email) {
      setError("You must register first.");
      return;
    }

    if (storedUser.password !== formData.password) {
      setError("Invalid password. Please try again.");
      return;
    }

    // If valid, redirect to the dashboard
    navigate("/dashboard"); // Adjust this to the correct route for your app
  };

  // Inline styles for the login page
  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      position: "relative",
    },
    error: {
      color: "red",
      marginBottom: "15px",
      textAlign: "center",
    },
    signupLink: {
      textAlign: "center",
      marginTop: "15px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleLogin}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <div style={styles.signupLink}>
        <p>
          Don't have an account? <a href="/register" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
