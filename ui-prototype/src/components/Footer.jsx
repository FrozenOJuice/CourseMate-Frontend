import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2025 CourseMate · UBCO</p>
      <Link to="/credits" className="credits-btn">
        View Credits
      </Link>
    </footer>
  );
}
