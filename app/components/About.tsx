import { about } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading index="01 — About" title="A bit about me" />

      <div className="about-grid">
        <div>
          <p>{about.background}</p>
          <p>{about.goals}</p>
        </div>

        <div className="about-aside">
          <h3>Areas of interest</h3>
          <ul className="interest-list">
            {about.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
