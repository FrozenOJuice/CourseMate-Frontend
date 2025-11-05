import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/forms.css";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    login(username);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Sign in to continue to CourseMate
          </p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="password" placeholder="Password" />
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-alt">
          <p>
            Don’t have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
