// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/ProjectSection";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import { pageTransition } from "../Utlils/animations";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div {...pageTransition}>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}
