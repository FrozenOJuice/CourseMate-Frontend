import { Link } from "react-router-dom";
import "../styles/forms.css";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Your Account</h2>
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Join your campus community today
          </p>
        </div>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="button" className="auth-btn">
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
