import React from "react";

export default function Projects({ project, index }) {
  return (
    <div className="border border-gray-800 p-6">
      <p className="text-gray-500">/{String(index).padStart(3, "0")}</p>
      <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-400 mt-3">{project.description}</p>

      <div className="flex flex-wrap gap-0 mt-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="border border-primary text-primary me-1 px-2 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6 text-sm">
        <a href={project.github}>↗ GitHub</a>
        <a href={project.live}>↗ Live</a>
      </div>
    </div>
  );
}
