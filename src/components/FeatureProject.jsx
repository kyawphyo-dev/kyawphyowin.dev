import React from "react";

export default function FeatureProject({ project, img }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 border border-gray-800 p-6 mb-10">
      <img src={img} alt={project.title} className="w-full h-80 object-cover" />
      <div>
        <p className="text-gray-500">/001</p>
        <h3 className="text-3xl font-semibold mt-2">{project.title}</h3>
        <p className="text-gray-400 mt-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="border border-primary  text-primary me-1  px-2 py-1 text-xs"
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
    </div>
  );
}
