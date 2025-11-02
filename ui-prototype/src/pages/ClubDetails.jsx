import { useParams, Link } from "react-router-dom";
import { clubs } from "../data/clubs";
import "../styles/clubdetails.css";

export default function ClubDetails() {
  const { id } = useParams();
  const club = clubs.find((c) => c.id === Number(id));

  if (!club) {
    return (
      <div className="club-details missing">
        <h2>Club not found</h2>
        <Link to="/clubs" className="back-link">
          ← Back to Clubs
        </Link>
      </div>
    );
  }

  return (
    <div className="club-details">
      <div className="club-card-details">
        <div className="club-header">
          <h1>{club.name}</h1>
          <p className="category">{club.category}</p>
        </div>

        <div className="club-body">
          <p>{club.description}</p>
          <p className="members">
            <strong>{club.members}</strong> members
          </p>
        </div>

        <div className="club-actions">
          <div className="button-group">
            <button className="join-btn">Join Club</button>
            <Link
              to={`/blogs?club=${encodeURIComponent(club.name)}`}
              className="blog-btn"
            >
              View Club Blogs
            </Link>
          </div>

          <Link to="/clubs" className="back-link back-link-bottom">
            ← Back to All Clubs
          </Link>
        </div>
      </div>
    </div>
  );
}
