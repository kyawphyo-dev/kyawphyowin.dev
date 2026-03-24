import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../components/SectionTitle";
import ProfilePic from "../assets/profile/ProfilePic.png";

export default function About() {
  const stats = [
    {
      value: "5+",
      label: "Projects Built",
    },
    {
      value: "React",
      label: "Frontend Focus",
    },
    {
      value: "Next.js",
      label: "Backend Focus",
    },
    {
      value: "∞",
      label: "Learning Mindset",
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-start justify-center font-serif bg-black text-white px-6"
    >
      <div className="max-w-5xl w-full px-6">
        <SectionTitle id="02" label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 w-full ">
            <p className="text-text-muted leading-relaxed">
              I am a passionate{" "}
              <span className="font-bold text-text">Full-Stack Developer</span>{" "}
              with a strong foundation in modern web technologies. I have
              experience working with HTML, CSS, JavaScript, React, and Laravel,
              and I enjoy building responsive and user-friendly applications. I
              recently completed my{" "}
              <span className="text-text font-bold">
                {" "}
                Bachelor of Engineering in Information Technology
              </span>{" "}
              , where I developed projects focused on real-world problem
              solving.
              <br />
              <br />I am particularly interested in{" "}
              <span className="text-text font-bold font-serif">
                backend development, API integration, and scalable system
                design.
              </span>{" "}
              I am continuously learning new technologies to improve my skills
              and stay updated with industry trends. My goal is to become a
              professional developer who creates efficient, impactful, and
              high-quality web applications.
            </p>

            <div className="bg-black text-white py-2 px-6 w-full ">
              <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-800">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, delay: index * 0.1 }}
                    className="border border-gray-800 p-6 flex flex-col justify-center items-start hover:bg-gray-900 transition"
                  >
                    <h2 className="text-2xl font-bold text-primary">
                      {stat.value}
                    </h2>
                    <p className="mt-3 text-gray-400 tracking-widest uppercase text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full flex justify-center items-center py-11 bg-black">
              {/* Profile Picture */}
              <div className="relative">
                <img
                  src={ProfilePic}
                  alt="myProfile"
                  className="object-cover border-b-4 border-primary rounded-xl"
                />

                {/* Label Box */}
                <div className="absolute left-[calc(10%+35px)] md:left-[calc(30%+100px)] top-[calc(90%+50px)] bg-primary px-6 py-3 -translate-y-1/2 min-w-[250px]">
                  <h3 className="font-bold text-black text-lg">
                    Full-Stack Developer
                  </h3>
                  <p className="text-sm text-black">Based in Phuket, TH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
