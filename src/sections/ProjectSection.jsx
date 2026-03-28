import React from "react";
import SectionTitle from "../components/SectionTitle";
import FeaturedProject from "../components/FeatureProject";
import ProjectCard from "../components/Projects";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverLift } from "../Utlils/animations";
import { div } from "framer-motion/client";

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
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-bg text-text px-6 py-16 md:py-30 min-h-screen font-serif"
      id="projects"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl w-full mx-auto"
      >
        <SectionTitle id="04" label="Projects" title="My Work" />

        <motion.div variants={fadeIn("up", 0.2)} {...hoverLift}>
          {featured && <FeaturedProject project={featured} />}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid md:grid-cols-2 gap-6"
        >
          {others.map((p, i) => (
            <motion.div {...hoverLift} key={p.id}>
              <ProjectCard project={p} index={i + 2} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
