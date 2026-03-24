import React from "react";

import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/ProjectSection";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
