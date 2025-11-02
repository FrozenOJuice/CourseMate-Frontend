import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import "../styles/blogdetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === Number(id));

  if (!post) {
    return (
      <div className="blog-details missing">
        <h2>Blog post not found</h2>
        <Link to="/blogs" className="back-link">← Back to Blog Feed</Link>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <div className="blog-card-details">
        <div className="blog-header">
          <h1>{post.title}</h1>
          <p className="blog-meta">
            {post.club} · {post.date}
          </p>
        </div>

        <div className="blog-body">
          <p>{post.content}</p>
        </div>

        {/* COMMENTS SECTION */}
        <div className="comments-section">
          <h2>Comments</h2>
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((c, index) => (
              <div key={index} className="comment">
                <p className="comment-user">{c.user}</p>
                <p className="comment-text">{c.text}</p>
              </div>
            ))
          ) : (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          )}

          {/* Fake comment input (visual only) */}
          <div className="add-comment">
            <input
              type="text"
              placeholder="Write a comment..."
              className="comment-input"
              disabled
            />
            <button className="comment-btn" disabled>
              Post
            </button>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="blog-actions">
          <div className="button-group">
            <Link
              to={`/blogs?club=${encodeURIComponent(post.club)}`}
              className="blog-btn"
            >
              View All {post.club} Blogs
            </Link>
            <Link to="/blogs" className="back-link">
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
