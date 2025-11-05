import "../styles/credits.css";

export default function Credits() {
  return (
    <div className="credits-page">
      <div className="credits-card">
        <h1>Project Credits</h1>
        <p className="subtitle">
          CourseMate UI Prototype · COSC 305 - Project Management
        </p>

        <section className="team-section">
          <h2>Team Members</h2>
          <ul>
            <li>
              <strong>Joel – Frontend Development & Video Creation</strong>
              <br />
              Implemented major frontend components using React, designed and
              styled interactive pages, and produced the final prototype demo video.
            </li>
            <li>
              <strong>Aditi – Frontend Design & Creation</strong>
              <br />
              Led the UI/UX design process, contributed to page layouts and visual
              consistency across the platform.
            </li>
            <li>
              <strong>Graeme – Frontend Design & Video Creation</strong>
              <br />
              Designed UI elements, supported styling and layout refinements, and
              assisted in video narration and editing.
            </li>
          </ul>
        </section>

        <footer className="credits-footer">
          <p>© 2025 UBCO · CourseMate Prototype Project</p>
        </footer>
      </div>
    </div>
  );
}
