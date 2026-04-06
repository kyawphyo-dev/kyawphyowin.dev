import React from "react";
import { Link } from "react-router-dom";

export default function FeatureProject({ project }) {
  return (
    <div className="grid gap-8 p-6 mb-10 border md:grid-cols-2 border-border hover:bg-bg-hover">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-80"
      />
      <div>
        <p className="text-text-muted">/{project.id}</p>
        <h3 className="mt-2 text-3xl font-semibold">{project.title}</h3>
        <p className="mt-4 text-text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs border border-border text-primary me-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6 text-sm">
          <a target="_blank" href={project.github}>
            ↗ GitHub
          </a>
          <Link to={`/project/pizza`}>↗ View Project</Link>
        </div>
      </div>
    </div>
  );
}
