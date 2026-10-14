import { developer } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer">
        <p>
          © {new Date().getFullYear()} {developer.name}. All rights reserved.
        </p>
        <div className="link-group">
          <a href={developer.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={developer.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${developer.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
