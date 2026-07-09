import React from "react";
import { Link } from "react-router-dom";

export default function FeatureProject({ project }) {
  return (
    <div className="grid gap-8 p-6 mb-10 border md:grid-cols-2 border-border hover:bg-bg-hover transition-colors rounded-sm">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className="object-cover w-full h-80 rounded-sm"
      />
      <div>
        <p className="text-text-muted">/{String(project.id).padStart(2, "0")}</p>
        <h3 className="mt-2 text-3xl font-semibold">{project.title}</h3>
        <p className="mt-4 text-text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs border border-border text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6 text-sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github}
            className="hover:text-primary transition-colors"
          >
            ↗ GitHub
          </a>
          <Link to={project.view} className="hover:text-primary transition-colors">
            ↗ View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

