import React from "react";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Utlils/animations";
import useTheme from "../hooks/useTheme";

export default function Education() {
  let { isDark } = useTheme();
  const educationData = [
    {
      year: "2015 - 2024",
      title: "Bachelor of Engineering in Information Technology",
      subtitle: "Technoloical University (Mawlamyine), Myanmar",
      completed: "Graduated: February 2025",
      description:
        "Studied core concepts of Information Technology including software development, database systems, and cloud computing. Completed a final thesis on building a scalable Virtual Data Center using AWS and Datadog, focusing on system design, monitoring, and performance optimization.",
      active: false,
    },
    {
      year: "2021",
      title: "Diploma in Computer Network",
      subtitle: "Institute of Commercial Management,Myanmar",
      completed: "October 2025",
      description:
        "Learned networking fundamentals, protocols, and basic system configuration.",
      active: false,
    },
    {
      year: "2025",
      title: "Laravel Online Course",
      subtitle: "Self-directed / Online Courses",
      completed: "February 2026",
      description:
        "Developed backend applications using Laravel, focusing on APIs, authentication, and database management.",
      active: false,
    },
    {
      year: "2026",
      title: "React-Firebase Online Course",
      subtitle: "Self-directed / Online Courses",
      completed: "February 2026",
      description:
        "Built full-stack applications using React and Firebase, including authentication and real-time database integration.",
      active: true,
    },
  ];
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen bg-bg text-text font-serif px-6 py-16 md:py-30"
      id="education"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl w-full mx-auto"
      >
        <SectionTitle
          label="Education"
          id="05"
          title="My Academic Background"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (FIXED CENTER) */}
          <div
            className={`absolute left-[6px] top-0 h-full w-[2px] ${
              isDark ? "bg-gray-700" : "bg-gray-500"
            }`}
          ></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                variants={fadeIn("up", index * 0.1)}
                key={index}
                className="relative flex items-start gap-6"
              >
                {/* Dot (PERFECTLY CENTERED) */}
                <div className="relative z-10 mt-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2  ${
                      item.active
                        ? "bg-primary border-primary"
                        : "bg-bg border-gray-500"
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1 mt-5">
                  <p className="text-primary text-sm mb-1">{item.year}</p>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>

                  <h4 className=" text-primary">{item.subtitle}</h4>
                  <p className="text-sm text-text-muted">{item.completed}</p>

                  <p className="text-sm text-text mt-2 max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
