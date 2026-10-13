import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading index="04 — Experience" title="Where I've worked" />

      <div className="timeline">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="job">
            <p className="job-dates">{job.dates}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <ul className="bullet-list">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
