import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Monitor, Server, Database, Cloud, Wrench, Layers } from "lucide-react";
import { fadeIn, staggerContainer, hoverLift } from "../Utlils/animations";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: Monitor,
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["PHP", "Laravel", "REST APIs", "Node.js", "Typescript", "MVC"],
    },
    {
      title: "Database",
      icon: Database,
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Supabase",
        "Prisma ORM",
        "Mongoose",
      ],
    },
    {
      title: "Cloud Technology",
      icon: Cloud,
      items: ["AWS", "Datadog", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      items: ["Git", "GitHub", "Postman", "Cursor", "Claude", "Trae"],
    },
    {
      title: "Other",
      icon: Layers,
      items: ["REST API", "MVC Architecture", "GitLab CI/CD"],
    },
  ];

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen bg-bg text-text px-6 pt-6 pb-16 md:pb-30 "
      id="skills"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl w-full mx-auto mt-10"
      >
        <SectionTitle label="Skills" id="03" title="Technologies I Work With" />

        <motion.div
          variants={fadeIn("up", 0.2)}
          className="grid md:grid-cols-3 gap-0 mt-15"
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                {...hoverLift}
                key={index}
                className="border border-border p-6 hover:bg-bg-hover transition"
              >
                <Icon className="text-gray-400 mb-4" size={22} />

                <h3 className="text-primary font-bold text-lg mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="border border-border px-3 py-1 text-sm text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
