import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";
import "../styles/eventdetails.css";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="event-details missing">
        <h2>Event not found</h2>
        <Link to="/browse" className="back-link">
          ← Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details">
      <div className="details-card">
        <div className="details-header">
          <h1>{event.title}</h1>
          <p className="club">{event.club}</p>
        </div>

        <div className="details-meta">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
        </div>

        <div className="details-body">
          <p>{event.description}</p>
        </div>

        <div className="details-actions">
          <div className="button-group">
            <button className="join-btn">Join Event</button>
            <Link to={`/blogs?club=${encodeURIComponent(event.club)}`} className="blog-btn">
              View {event.club} Blog
            </Link>
          </div>
          <Link to="/browse" className="back-link">
            ← Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
