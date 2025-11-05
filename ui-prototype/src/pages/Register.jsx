import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/forms.css";

export default function Register() {
  const { register } = useAuth();
  const [username, setUsername] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    register(username);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Your Account</h2>
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Join your campus community today
          </p>
        </div>

        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <div className="auth-alt">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
