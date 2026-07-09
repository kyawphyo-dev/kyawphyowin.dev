import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Github, TrendingUp } from "lucide-react";
import {
  hoverLift,
  pageTransition,
  fadeIn,
  staggerContainer,
} from "../Utlils/animations";

function ProjectDetails({
  Images,
  Highlights,
  TechStack,
  githubLink,
  title,
  role,
  timeline,
  details,
}) {
  const ScrolllRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullScreenState, setFullScreenState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % Images.length;

        ScrolllRef.current?.scrollTo({
          left: next * ScrolllRef.current.offsetWidth,
          behavior: "smooth",
        });

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [Images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!fullScreenState) return;
      if (e.key === "ArrowRight") {
        const nextIndex = (fullScreenState.index + 1) % Images.length;
        setFullScreenState({
          image: Images[nextIndex],
          index: nextIndex,
        });
      } else if (e.key === "ArrowLeft") {
        const prevIndex =
          (fullScreenState.index - 1 + Images.length) % Images.length;
        setFullScreenState({
          image: Images[prevIndex],
          index: prevIndex,
        });
      } else if (e.key === "Escape") {
        setFullScreenState(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullScreenState, Images]);

  const handleAdminScroll = () => {
    const el = ScrolllRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.offsetWidth));
  };
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full mb-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        {/* ─── PROJECT SECTION ─── */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl"
        >
          {title}
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid w-full min-w-0 gap-6 md:gap-10 md:grid-cols-2"
        >
          {/* LEFT: Images */}
          <motion.div variants={fadeIn("up", 0.4)} className="min-w-0">
            <div className="relative w-full h-[250px] md:h-[340px] overflow-hidden bg-gray-800 rounded-xl">
              <div
                ref={ScrolllRef}
                onScroll={handleAdminScroll}
                className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {Images.map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center h-full min-w-full gap-2 p-3 snap-center"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-contain w-full max-h-[180px] md:max-h-[270px] cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() =>
                        setFullScreenState({
                          image,
                          index,
                        })
                      }
                    />
                    <p className="mt-2 text-xs text-center text-white md:text-sm">
                      {image.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {Images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      ScrolllRef.current?.scrollTo({
                        left: i * ScrolllRef.current.offsetWidth,
                        behavior: "smooth",
                      });
                      setActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex ? "bg-white w-4" : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>

              {/* Full-Screen View Button */}
              <button
                onClick={() =>
                  setFullScreenState({
                    image: Images[activeIndex],
                    index: activeIndex,
                  })
                }
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-text">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {TechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs border border-border text-primary me-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text">Role</h3>
              <p className="text-sm text-text-muted md:text-lg">{role}</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-sm text-text-muted md:text-lg">{timeline}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-5 py-2 border rounded-lg text-text hover:bg-primary transition-all"
              >
                <Github size={18} className="me-1" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="w-full font-serif text-text mt-15"
        >
          <h4 className="text-xl text-primary">Details</h4>
          <p className="mt-3 text-sm text-text-muted md:text-lg">{details}</p>
          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3">
            {Highlights.map((highlight, index) => (
              <li key={index} className="mb-3 text-sm md:text-lg">
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Full-Screen Image Modal */}
      {fullScreenState && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setFullScreenState(null)}
        >
          {/* Left Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const prevIndex =
                (fullScreenState.index - 1 + Images.length) % Images.length;
              setFullScreenState({
                image: Images[prevIndex],
                index: prevIndex,
              });
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullScreenState(null)}
              className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <img
              src={fullScreenState.image.src}
              alt={fullScreenState.image.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {fullScreenState.image.title}
            </p>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const nextIndex = (fullScreenState.index + 1) % Images.length;
              setFullScreenState({
                image: Images[nextIndex],
                index: nextIndex,
              });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </motion.section>
  );
}

export default ProjectDetails;
