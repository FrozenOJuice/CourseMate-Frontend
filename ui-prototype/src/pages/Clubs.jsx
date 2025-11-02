import "../styles/clubs.css";
import { clubs } from "../data/clubs";
import { Link } from "react-router-dom";

export default function Clubs() {
  return (
    <div className="clubs-page">
      <h1>Explore Campus Clubs</h1>
      <p>
        Discover communities that match your interests — from tech and wellness
        to arts and business.
      </p>

      <div className="clubs-grid">
        {clubs.map((club) => (
          <div key={club.id} className="club-card">
            <img src={club.image} alt={club.name} className="club-thumb" />
            <h3>{club.name}</h3>
            <p className="club-meta">
              {club.category} · {club.members} members
            </p>
            <p>{club.description}</p>
            <Link to={`/clubs/${club.id}`} className="join-btn">
              View Club
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
