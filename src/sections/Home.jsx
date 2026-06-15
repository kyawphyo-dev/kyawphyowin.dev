import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/ProjectSection";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import { pageTransition } from "../Utlils/animations";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (!scrollTo) return;

    const timer = setTimeout(() => {
      document
        .getElementById(scrollTo)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      navigate(location.pathname, { replace: true, state: {} });
    }, 150);

    return () => clearTimeout(timer);
  }, [location.state, location.pathname, navigate]);

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
