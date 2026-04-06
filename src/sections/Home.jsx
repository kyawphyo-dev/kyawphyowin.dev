import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/ProjectSection";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { pageTransition } from "../Utlils/animations";
export default function Home() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div {...pageTransition}>
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
