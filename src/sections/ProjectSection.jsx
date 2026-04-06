import React from "react";
import SectionTitle from "../components/SectionTitle";
import FeaturedProject from "../components/FeatureProject";
import ProjectCard from "../components/Projects";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverLift } from "../Utlils/animations";

import pizzaMenu from "../assets/PizzaOrderSyatem/User/03_Umenu.png";

const projects = [
  {
    id: 1,
    title: "Pizza Order System",
    description:
      "A full-stack web application for ordering pizzas online with admin dashboard, order management, and reporting system.",
    tech: ["JavaScript", "AJAX", "Bootstrap", "AOS", "PHP", "Laravel", "Mysql"],
    github: "https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel",
    live: "#",
    featured: true,
    image: pizzaMenu,
  },
  // {
  //   id: 2,
  //   title: "E-Commerce API",
  //   description:
  //     "Headless commerce backend with product management, cart, and payments.",
  //   tech: ["NestJS", "MongoDB", "Stripe"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   id: 3,
  //   title: "Dev Portfolio CMS",
  //   description:
  //     "Headless CMS for managing portfolio content with API and admin panel.",
  //   tech: ["React", "Express", "PostgreSQL", "JWT"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   id: 4,
  //   title: "Real-time Chat App",
  //   description:
  //     "WebSocket chat app with rooms, file sharing, and notifications.",
  //   tech: ["React", "Socket.io", "Node.js"],
  //   github: "#",
  //   live: "#",
  // },
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
      className="min-h-screen px-6 py-16 font-serif bg-bg text-text md:py-30"
      id="projects"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        <SectionTitle id="04" label="Projects" title="My Work" />

        <motion.div variants={fadeIn("up", 0.2)} {...hoverLift}>
          {featured && <FeaturedProject project={featured} img="" />}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid gap-6 md:grid-cols-2"
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
