import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { fadeIn, hoverLift, staggerContainer } from "../Utlils/animations";
import useTheme from "../hooks/useTheme";

export default function Hero() {
  let { isDark } = useTheme();
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden font-serif text-white bg-bg"
    >
      {/* ✅ Background (separate layer) */}

      <div
        className={`absolute inset-0 z-0 ${
          isDark
            ? "bg-[linear-gradient(#444_1px,transparent_1px),linear-gradient(to_right,#444_1px,transparent_1px)] bg-[size:65px_65px] opacity-40"
            : "bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:65px_65px] opacity-70"
        }`}
      ></div>

      {/* ✅ Content (NOT inside background) */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="relative z-10 w-full max-w-5xl px-4 md:px-6"
      >
        {/* Badge */}
        <p
          className="text-green-400 border border-green-700 rounded-sm inline-flex items-center gap-2 px-4 py-1 text-sm mb-2
                     shadow-[0_0_15px_rgba(74,222,128,0.6)] transition duration-300 animate-pulse"
        >
          <span className="w-2 h-2 bg-green-700 rounded-full "></span>
          Portfolio in Progress
        </p>

        {/* Name */}
        <motion.h1
          variants={fadeIn("up", 0.3)}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >
          <span className="text-3xl text-text">Hello, I'm</span> <br />
          <motion.div {...hoverLift}>
            <span className="text-text">Kyaw Phyo</span>{" "}
            <span className="text-primary">Win</span>
          </motion.div>
        </motion.h1>

        {/* Typing */}
        <h2 className="mt-4 text-xl text-gray-400 md:text-2xl">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "React Developer",
              "Laravel Developer",
              "Next.js Developer",
            ]}
            loop
            cursor
          />
        </h2>

        {/* Description */}
        <p className="max-w-xl mt-6 text-gray-500">
          Full-Stack Developer passionate about building real-world web
          applications and continuously improving my skills.
        </p>

        {/* Buttons */}
        <motion.div variants={fadeIn("up", 0.3)} className="flex gap-4 mt-8">
          <motion.a
            {...hoverLift}
            href={`${import.meta.env.BASE_URL}KPW_Resume.pdf`}
            download
            target="_blank"
            className={`bg-primary rounded-sm md:text-lg text-sm px-3 py-1 md:px-6 md:py-3 font-semibold hover:scale-105 transition flex items-center shadow-[0_0_20px_rgba(163,230,53,0.6)] ${
              isDark ? "text-black" : "text-white"
            }`}
          >
            Download Resume
          </motion.a>
          <motion.a
            {...hoverLift}
            href="#contact"
            className={`border border-border text-text text-sm md:text-lg px-5 py-3 rounded-sm  transition ${
              isDark
                ? "hover:bg-gray-200 hover:text-black"
                : "hover:bg-gray-500 hover:text-white"
            }`}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll */}
      </motion.div>
      <div className="absolute text-sm text-gray-500 transform -translate-x-1/2 bottom-7 left-1/2 animate-pulse">
        <a href="#about">↓ Scroll</a>
      </div>
    </motion.section>
  );
}
