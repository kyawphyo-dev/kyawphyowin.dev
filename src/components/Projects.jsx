import { Link } from "react-router-dom";

export default function Projects({ project, index }) {
  return (
    <div className="border border-border p-6 hover:bg-bg-hover transition-colors h-full">
      <p className="text-text-muted">/{String(index).padStart(2, "0")}</p>
      <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
      <p className="text-text-muted mt-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-border text-primary px-2 py-1 text-xs"
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
  );
}
