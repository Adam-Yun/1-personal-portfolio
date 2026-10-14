import { skills } from "@/data/portfolio";
import { getSkillIcon } from "@/data/skill-icons";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        index="03"
        title="Skills"
        description="The tools I build with."
      />

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group" data-reveal>
            <h3>{category}</h3>
            <div className="tags">
              {items.map((skill) => {
                const icon = getSkillIcon(skill);
                return (
                  <span key={skill} className="tag">
                    {icon && (
                      <svg
                        className="tag-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        style={
                          {
                            "--icon-light": icon.colorLight,
                            "--icon-dark": icon.colorDark,
                          } as React.CSSProperties
                        }
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    <span className="tag-label">{skill}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
