import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/cards.css";
import { events } from "../data/events";
import { myClubs } from "../data/myClubs";
import { blogs } from "../data/blogs";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back{user ? `, ${user.username}` : ""}!</h1>
        <p>Here's what's happening around campus this week.</p>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>3</h2>
          <p>Upcoming Events</p>
        </div>
        <div className="stat-card">
          <h2>0</h2>
          <p>Joined Clubs</p>
        </div>
        <div className="stat-card">
          <h2>0</h2>
          <p>Blog Posts</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <h2 className="section-title">Upcoming Events</h2>
      <div className="event-grid">
        {events.slice(0, 3).map((e) => (
          <div key={e.id} className="event-card">
            <img src={e.image} alt={e.title} className="event-thumb" />
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <p className="event-meta">{e.date} · {e.location}</p>
            <Link to={`/browse/${e.id}`} className="event-btn">Learn More</Link>
          </div>
        ))}
      </div>

      <Link to="/browse" className="view-all-btn">
        View All Events
      </Link>

      {/* My Clubs */}
      <div className="my-clubs">
        <h2>My Clubs</h2>
        <div className="my-club-grid">
          {myClubs.map((club) => (
            <div key={club.id} className="my-club-card">
              <h3>{club.name}</h3>
              <p>{club.role}</p>
              <p style={{ fontSize: "0.85rem" }}>
                Next Event: <strong>{club.nextEvent}</strong>
              </p>
            </div>
          ))}
        </div>
        <Link to="/clubs" className="view-all-btn">
          Explore More Clubs
        </Link>
      </div>

      {/* New Blog Section */}
      <div className="my-clubs" style={{ marginTop: "4rem" }}>
        <h2>Recent Blog Posts</h2>
        <div className="my-club-grid">
          {blogs.slice(0, 3).map((post) => (
            <div key={post.id} className="my-club-card">
              <h3>{post.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                {post.club} · {post.date}
              </p>
              <p style={{ fontSize: "0.9rem" }}>
                {post.content.substring(0, 80)}...
              </p>
              <Link to={`/blogs/${post.id}`} className="back-link">
                Read More →
              </Link>
            </div>
          ))}
        </div>
        <Link to="/blogs" className="view-all-btn">
          View All Blogs
        </Link>
      </div>
    </div>
  );
}
