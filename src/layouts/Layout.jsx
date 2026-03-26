import React from "react";

import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/ProjectSection";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

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
          <Education />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
