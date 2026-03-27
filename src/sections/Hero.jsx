import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { fadeIn, hoverLift, staggerContainer } from "../Utlils/animations";

export default function Hero() {
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="hero"
      className="relative font-serif min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* ✅ Background (separate layer) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(#444_1px,transparent_1px),linear-gradient(to_right,#444_1px,transparent_1px)] bg-[size:65px_65px] opacity-40"></div>

      {/* ✅ Content (NOT inside background) */}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="relative z-10 max-w-5xl w-full px-4 md:px-6"
      >
        {/* Badge */}
        <p
          className="text-green-400 border border-green-400 rounded-sm inline-flex items-center gap-2 px-4 py-1 text-sm mb-2
                     shadow-[0_0_15px_rgba(74,222,128,0.6)] transition duration-300 animate-pulse"
        >
          <span
            className="w-2 h-2 bg-green-400 rounded-full 
                    "
          ></span>
          Available for new projects
        </p>

        {/* Name */}
        <motion.h1
          variants={fadeIn("up", 0.3)}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="text-3xl">Hello, I'm</span> <br />
          <motion.div {...hoverLift}>
            <span className="text-white">Kyaw Phyo</span>{" "}
            <span className="text-primary">Win</span>
          </motion.div>
        </motion.h1>

        {/* Typing */}
        <h2 className="text-xl md:text-2xl mt-4 text-gray-400">
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
        <p className="mt-6 max-w-xl text-gray-500">
          Full-Stack Developer passionate about building real-world web
          applications and continuously improving my skills.
        </p>

        {/* Buttons */}
        <motion.div variants={fadeIn("up", 0.3)} className="mt-8 flex gap-4">
          <motion.a
            {...hoverLift}
            href="#projects"
            className="bg-primary md:text-md text-sm text-black px-4 py-2 md:px-6 md:py-3 font-semibold hover:scale-105 transition flex items-center shadow-[0_0_20px_rgba(163,230,53,0.6)]"
          >
            View Projects ↓
          </motion.a>
          <motion.a
            {...hoverLift}
            href="#contact"
            className="border border-gray-600 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll */}
      </motion.div>
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-pulse">
        <a href="#about">↓ Scroll</a>
      </div>
    </motion.section>
  );
}
