"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { getTechIcon } from "@/data/tech-icons";
import ProjectGallery from "./ProjectGallery";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="section" id="projects">
      <SectionHeading
        index="02"
        title="Work"
        description="A few things I've built and shipped."
      />

      <div className="grid grid-2">
        {projects.map((project) => (
          <article key={project.title} className="card" data-reveal>
            <p className="card-role">{project.contribution}</p>
            <h3>{project.title}</h3>
            <p className="card-description">{project.description}</p>

            <ul className="bullet-list card-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="tags">
              {project.techStack.map((tech) => {
                const icon = getTechIcon(tech);
                return (
                  <span key={tech} className="tag">
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
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="card-footer">
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => setActive(project)}
              >
                Preview ({project.images.length})
              </button>

              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-sm">
                  Visit site ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {active && <ProjectGallery project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
