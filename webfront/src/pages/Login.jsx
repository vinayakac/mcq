import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .min(3, 'Email must be at least 3 characters long')
    .max(20, 'Email must be less than or equal to 20 characters')
    .email('Please enter a valid email address')
    .regex(/^[a-zA-Z0-9_.-]+$/, 'Email can only contain letters, numbers, underscores, hyphens, and dots'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be less than or equal to 20 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      '*Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Reset previous errors
    setErrors({});

    // Validate form data using Zod schema
    const result = loginSchema.safeParse({ email, password });

    if (result.success) {
      // If validation passes, log in and navigate
      console.log("Logging in with", email, password);
      navigate("/dashboard");
    } else {
      // If validation fails, set the errors
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
    }
  };

  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "30px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      backgroundImage: "url('https://cdn.wallpapersafari.com/0/62/TA4eir.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
    },
    signupLink: {
      textAlign: "center",
      marginTop: "15px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
    eyeIcon: {
      cursor: "pointer",
      position: "absolute",
      right: "10px",
      top: "35px",
    },
    inputContainer: {
      position: "relative",
    },
    error: {
      color: "red",
      marginBottom: "15px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleLogin}>
        {errors.email && <div style={styles.error}>{errors.email._errors[0]}</div>}
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Username or Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your username or email"
            required
            style={styles.input}
          />
        </div>
        {errors.password && <div style={styles.error}>{errors.password._errors[0]}</div>}
        <div style={{ ...styles.formGroup, ...styles.inputContainer }}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={styles.input}
          />
          <span
            style={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </span>
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Login
        </button>
      </form>
      <div style={styles.signupLink}>
        <p>
          Don't have an account? <a href="/register" style={styles.link} onMouseOver={(e) => (e.target.style.textDecoration = "underline")} onMouseOut={(e) => (e.target.style.textDecoration = "none")}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
