import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CLanding from "../assets/DineOs/01:CustomerLanding.png";

import { Github, TrendingUp } from "lucide-react";
import {
  hoverLift,
  pageTransition,
  fadeIn,
  staggerContainer,
} from "../Utlils/animations";

export default function ProjectDetails() {
  const CustomerImages = [
    { src: CLanding, title: "Customer Landing", alt: "Customer Landing" },
  ];

  const CustomerHighlights = [
    "> Scan QR Codes",
    "> Browse menus",
    "> Place orders",
    "> Track order status",
  ];
  const TechStack = ["Next.js", "Tailwind", "Css", "Typescript", "MongoDB"];

  // Admin image scroll
  const adminScrollRef = useRef(null);
  const [adminActiveIndex, setAdminActiveIndex] = useState(0);
  const GithubLink = "https://github.com/kyawphyo-dev/dineos-nextjs";

  useEffect(() => {
    const interval = setInterval(() => {
      setAdminActiveIndex((prev) => {
        const next = (prev + 1) % CustomerImages.length;

        adminScrollRef.current?.scrollTo({
          left: next * adminScrollRef.current.offsetWidth,
          behavior: "smooth",
        });

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAdminScroll = () => {
    const el = adminScrollRef.current;
    if (!el) return;
    setAdminActiveIndex(Math.round(el.scrollLeft / el.offsetWidth));
  };

  // User scroll
  // const userScrollRef = useRef(null);
  // const [userActiveIndex, setUserActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const el = userScrollRef.current;
  //     if (!el) return;
  //     const nextIndex = (userActiveIndex + 1) % userImages.length;
  //     el.scrollTo({ left: nextIndex * el.offsetWidth, behavior: "smooth" });
  //     setUserActiveIndex(nextIndex);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [userActiveIndex]);

  // const handleUserScroll = () => {
  //   const el = userScrollRef.current;
  //   if (!el) return;
  //   setUserActiveIndex(Math.round(el.scrollLeft / el.offsetWidth));
  // };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen px-6 py-16 font-serif bg-bg md:py-30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        {/* Back Button */}
        <Link
          to="/"
          className="mb-6 text-sm text-text-muted opacity-70 hover:opacity-100"
        >
          ← Back to Projects
        </Link>

        {/* Title */}
        <SectionTitle id="" label="DineOs - Restaurant Management System" />

        {/* ─── ADMIN SECTION ─── */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl"
        >
          DineOs Customer Interface
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid w-full min-w-0 gap-6 md:gap-10 md:grid-cols-2"
        >
          {/* LEFT: Admin Images */}
          <motion.div variants={fadeIn("up", 0.4)} className="min-w-0">
            <div className="relative w-full h-[250px] md:h-[340px] overflow-hidden bg-gray-800 rounded-xl">
              <div
                ref={adminScrollRef}
                onScroll={handleAdminScroll}
                className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {CustomerImages.map((admin, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center h-full min-w-full gap-2 p-3 snap-center"
                  >
                    <img
                      src={admin.src}
                      alt={admin.alt}
                      className="object-contain w-full max-h-[180px] md:max-h-[270px]"
                    />
                    <p className="mt-2 text-xs text-center text-white md:text-sm">
                      {admin.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Admin Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {CustomerImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      adminScrollRef.current?.scrollTo({
                        left: i * adminScrollRef.current.offsetWidth,
                        behavior: "smooth",
                      });
                      setAdminActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === adminActiveIndex
                        ? "bg-white w-4"
                        : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Admin Info */}
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
              <p className="text-sm text-text-muted md:text-lg">
                Full-stack Developer
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-sm text-text-muted md:text-lg">Ongoing</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={GithubLink}
                className="flex px-5 py-2 border rounded-lg text-text"
              >
                <Github size={18} className="me-1" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Admin Details */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="w-full font-serif text-text mt-15"
        >
          <h4 className="text-xl text-primary">Details</h4>
          <p className="mt-3 text-sm text-text-muted md:text-lg">
            DineOS is a comprehensive restaurant management platform designed
            for buffet and dine-in restaurants. It provides restaurant owners
            with a complete ecosystem to manage restaurant operations,
            including: menu management, order management, staff management,
            Inventory management, Customer Ordering via QR Codes , and more...
          </p>
          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3">
            {CustomerHighlights.map((highlight, index) => (
              <li key={index} className="mb-3 text-sm md:text-lg">
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
