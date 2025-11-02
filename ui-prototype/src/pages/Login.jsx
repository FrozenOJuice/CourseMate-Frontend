import { Link } from "react-router-dom";
import "../styles/forms.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Sign in to continue to CourseMate
          </p>
        </div>

        <form className="auth-form">
          <input type="text" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <button type="button" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-alt">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
