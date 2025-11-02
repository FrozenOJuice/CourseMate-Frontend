import { Link } from "react-router-dom";
import "../styles/globals.css";

export default function Home() {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Discover. Connect. Belong.</h1>
          <p>
            CourseMate brings all campus clubs and events to one place — helping
            you find opportunities, friends, and experiences that matter.
          </p>
          <div className="home-buttons">
            <Link to="/login" className="btn">Get Started</Link>
            <Link to="/browse" className="btn secondary">Explore Events</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Everything you need in one place</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2769/2769397.png" alt="Events" />
            <h3>Find Events</h3>
            <p>Browse hundreds of student-run events across all clubs and faculties.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Clubs" />
            <h3>Join Clubs</h3>
            <p>Meet new people, grow your network, and build experiences beyond classes.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/709/709496.png" alt="Community" />
            <h3>Stay Connected</h3>
            <p>Get updates, announcements, and reminders — all in one dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
