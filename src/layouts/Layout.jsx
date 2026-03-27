import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/ProjectSection";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { useState } from "react";
import { pageTransition } from "../Utlils/animations";

export default function Layout() {
  let [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (activeSection !== "home") {
      window.scrollTo(0, 0);
    }
  }, [activeSection]);
  return (
    <div className="min-h-screen bg-bg">
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <AnimatePresence mode="wait">
        <motion.div key={activeSection} {...pageTransition}>
          {activeSection === "home" && (
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </>
          )}

          {activeSection === "about" && <About />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "education" && <Education />}
          {activeSection === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
