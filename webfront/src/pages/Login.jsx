import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
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
  const [error, setError] = useState({ email: "", password: "", general: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" }); // Clear field-specific errors on input change
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let hasError = false;

    // Check for empty fields
    if (!formData.email) {
      setError((prev) => ({ ...prev, email: "Email is required." }));
      hasError = true;
    }
    if (!formData.password) {
      setError((prev) => ({ ...prev, password: "Password is required." }));
      hasError = true;
    }

    if (hasError) return;

    setError({ ...error, general: "" });

    // Validate with Zod
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      setError((prev) => ({
        ...prev,
        general: result.error.errors.map((err) => err.message).join(", "),
      }));
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email) {
      setError((prev) => ({ ...prev, general: "You must register first." }));
      return;
    }

    if (storedUser.password !== formData.password) {
      setError((prev) => ({ ...prev, general: "Invalid password. Please try again." }));
      return;
    }

    // If valid, redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      {error.general && <div className="login-error">{error.general}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
           <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="login-input"
          />
          {error.email && <div className="field-error">{error.email}</div>}
        </div>
        <div className=
        
        "form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="login-input"
          />
          {error.password && <div className="field-error">{error.password}</div>}
        </div>
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