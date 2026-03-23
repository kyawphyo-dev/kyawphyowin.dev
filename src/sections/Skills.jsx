import React from "react";
import SectionTitle from "../components/SectionTitle";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
  Layers,
  Icon,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: Monitor,
      items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TypeScript"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["PHP", "Laravel", "Node.js", "Next.js"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["MySQL", "Firebase"],
    },
    {
      title: "Cloud Technology",
      icon: Cloud,
      items: ["AWS", "Datadog"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      items: ["Git", "GitHub", "Vercel", "Firebase", "Postman"],
    },
    {
      title: "Other",
      icon: Layers,
      items: ["REST API", "MVC Architecture"],
    },
  ];

  return (
    <section
      className="min-h-screen bg-black text-white px-6 py-30 "
      id="skills"
    >
      <div className="max-w-5xl mx-auto mt-10">
        <SectionTitle label="Skills" title="Technologies I Work With" />

        <div className="grid md:grid-cols-3 gap-0 mt-15">
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="border border-gray-800 p-6 hover:bg-gray-900 transition"
              >
                <Icon className="text-gray-400 mb-4" size={22} />

                <h3 className="text-primary font-bold text-lg mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="border border-gray-700 px-3 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
