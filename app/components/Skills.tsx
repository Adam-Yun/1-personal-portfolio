import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        index="03 — Skills"
        title="Tools I work with"
        description="The languages, frameworks, and infrastructure I reach for day to day."
      />

      <div className="grid grid-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <div className="tags">
              {items.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
