import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  const educationData = [
    {
      year: "2015 - 2024",
      title: "BE.IT",
      subtitle: "Technoloical University (Mawlamyine), Myanmar",
      description:
        "Focused on software engineering, data structures, algorithms, and distributed systems.",
      active: false,
    },
    {
      year: "2022",
      title: "Full-Stack Web Development",
      subtitle: "Self-directed / Online Courses",
      description:
        "Deep dives into React ecosystem, Node.js, and cloud infrastructure.",
      active: false,
    },
    {
      year: "2023",
      title: "AWS Certified Developer – Associate",
      subtitle: "Amazon Web Services",
      description:
        "Certified in developing and deploying cloud-based applications.",
      active: true,
    },
  ];
  return (
    <section
      className="min-h-screen bg-black text-white font-serif px-6 py-30"
      id="education"
    >
      <div className="max-w-5xl w-full mx-auto">
        <SectionTitle
          label="Education"
          id="04"
          title="My Academic Background"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (FIXED CENTER) */}
          <div className="absolute left-[6px] top-0 h-full w-[2px] bg-gray-700"></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Dot (PERFECTLY CENTERED) */}
                <div className="relative z-10 mt-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2  ${
                      item.active
                        ? "bg-primary border-primary"
                        : "bg-black border-gray-500"
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1 mt-5">
                  <p className="text-primary text-sm mb-1">{item.year}</p>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">{item.subtitle}</p>

                  <p className="text-sm text-gray-500 mt-2 max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
