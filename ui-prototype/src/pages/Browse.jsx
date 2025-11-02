import { events } from "../data/events";
import { Link } from "react-router-dom";
import "../styles/cards.css";

export default function Browse() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ color: "var(--primary)", marginBottom: "1rem" }}>
        Browse Events
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
        Discover upcoming activities from all clubs and groups across campus.
      </p>

      <div className="event-grid">
        {events.map((e) => (
          <div key={e.id} className="event-card">
            <img src={e.image} alt={e.title} className="event-thumb" />
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <p className="event-meta">
              {e.date} · {e.location}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              {e.club} · {e.category}
            </p>
            <Link to={`/browse/${e.id}`} className="event-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
