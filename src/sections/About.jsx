import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../components/SectionTitle";
import ProfilePic from "../assets/profile/ProfilePic.png";
import { fadeIn, staggerContainer, hoverLift } from "../Utlils/animations";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { isDark } = useTheme();
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
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about"
      className="min-h-screen flex items-start justify-center font-serif bg-bg text-white px-6 py-16 md:py-30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl w-full px-6"
      >
        <SectionTitle id="02" label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="flex flex-col gap-6 w-full "
          >
            <p className="text-text-muted leading-relaxed">
              I am a passionate{" "}
              <strong className="text-text">Full-Stack Developer</strong> with a
              strong foundation in modern web technologies. I have experience
              working with HTML, CSS, JavaScript, React, and Laravel, and I
              enjoy building responsive and user-friendly applications. I
              recently completed my{" "}
              <strong className="text-text font-bold">
                {" "}
                Bachelor of Engineering in Information Technology
              </strong>{" "}
              , where I developed projects focused on real-world problem
              solving.
              <br />
              <br />I am particularly interested in{" "}
              <strong className="text-text font-bold font-serif">
                backend development, API integration, and scalable system
                design.
              </strong>{" "}
              I am continuously learning new technologies to improve my skills
              and stay updated with industry trends. My goal is to become a
              professional developer who creates efficient, impactful, and
              high-quality web applications.
            </p>

            <div className="bg-bg text-white py-2 px-6 w-full ">
              <motion.div
                variants={fadeIn("up", 0.3)}
                className={`w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border`}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    {...hoverLift}
                    className={`border border-border p-6 flex flex-col justify-center items-start  transition ${
                      isDark ? "hover:bg-gray-900" : "hover:bg-gray-300"
                    }`}
                  >
                    <h2 className="text-2xl font-bold text-primary">
                      {stat.value}
                    </h2>
                    <p className="mt-3 text-gray-400 tracking-widest uppercase text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="relative w-full flex justify-center items-center py-2 md:py-11 bg-bg"
            >
              {/* Profile Picture */}
              <div className="relative">
                <img
                  src={ProfilePic}
                  alt="myProfile"
                  className="object-cover border-b-4 border-primary rounded-xl"
                />

                {/* Label Box */}
                <div className="absolute left-[calc(10%+35px)] md:left-[calc(30%+100px)] top-[calc(90%+50px)] bg-primary px-6 py-3 -translate-y-1/2 min-w-[250px]">
                  <h3
                    className={`font-bold text-lg${
                      isDark ? "text-black" : "text-white"
                    }`}
                  >
                    Full-Stack Developer
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-black" : "text-white"
                    }`}
                  >
                    Based in Phuket, TH
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
