import React from "react";
import SectionTitle from "../components/SectionTitle";
import FeaturedProject from "../components/FeatureProject";
import ProjectCard from "../components/Projects";

const projects = [
  {
    id: 1,
    title: "SaaS Analytics Platform",
    description:
      "Real-time analytics dashboard for SaaS products – tracks user behavior and revenue metrics.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    github: "#",
    live: "#",
    featured: true,
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "E-Commerce API",
    description:
      "Headless commerce backend with product management, cart, and payments.",
    tech: ["NestJS", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Dev Portfolio CMS",
    description:
      "Headless CMS for managing portfolio content with API and admin panel.",
    tech: ["React", "Express", "PostgreSQL", "JWT"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description:
      "WebSocket chat app with rooms, file sharing, and notifications.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "#",
    live: "#",
  },
];
export default function ProjectSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <section className="bg-black text-white px-6 py-30" id="projects">
      <div className="max-w-5xl w-full mx-auto">
        <SectionTitle id="04" label="Projects" title="My Work" />

        {featured && <FeaturedProject project={featured} />}

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
