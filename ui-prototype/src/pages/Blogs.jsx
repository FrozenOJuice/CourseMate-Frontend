import "../styles/blogs.css";
import { blogs } from "../data/blogs";
import { Link, useLocation } from "react-router-dom";

export default function Blogs() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const clubFilter = params.get("club");

  const filteredBlogs = clubFilter
    ? blogs.filter((post) => post.club === clubFilter)
    : blogs;

  return (
    <div className="blogs-page">
      <h1>
        {clubFilter ? `${clubFilter} Blog Posts` : "Campus Blog Feed"}
      </h1>
      <p>
        {clubFilter
          ? `Recent updates and posts from ${clubFilter}.`
          : "Read updates, event recaps, and club stories from across the university community."}
      </p>

      <div className="blogs-grid">
        {filteredBlogs.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-meta">
              {post.club} · {post.date}
            </p>
            <p>{post.content.substring(0, 120)}...</p>
            <Link to={`/blogs/${post.id}`} className="read-btn">
              Read More
            </Link>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p style={{ marginTop: "2rem", color: "var(--muted)" }}>
          No blog posts found for this club yet.
        </p>
      )}

      {!clubFilter && (
        <div style={{ marginTop: "2rem" }}>
          <Link to="/dashboard" className="view-all-btn">
            ← Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
