import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";
import { hoverLift } from "../Utlils/animations";

export default function Navbar({ setActiveSection, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // 🔥 NEW

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNav(true);
        setScrolled(false);
      } else {
        setScrolled(true);

        if (currentScrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "contact",
  ];

  return (
    <>
      {/* 🔹 NAVBAR */}
      <nav
        className={`fixed top-0 w-full font-serif flex justify-between items-center px-6 md:px-10 py-5 z-50 transition-all duration-300
        ${scrolled ? "border-b border-[#292929] bg-bg/80 backdrop-blur-lg" : ""}
        ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <h1 className="text-white text-2xl md:text-3xl font-bold cursor-pointer items-center my-2"></h1>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item}
              {...hoverLift}
              onClick={() => setActiveSection(item)}
              className={`hover:text-primary transition ${
                activeSection === item
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              {item.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* 🔹 Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* 🔹 MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center gap-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl text-white"
            >
              ✕
            </button>

            {/* Links */}
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsOpen(false);
                }}
                className={`text-xl text-gray-300 ${
                  activeSection === item ? "text-primary" : ""
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
