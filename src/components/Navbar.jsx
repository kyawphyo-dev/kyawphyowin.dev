import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Sun, Moon } from "lucide-react";
import { hoverLift } from "../Utlils/animations";
import useTheme from "../hooks/useTheme";

export default function Navbar({ setActiveSection, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // 🔥 NEW
  const { isDark, changeTheme } = useTheme();

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
        <div
          className={`hidden md:flex gap-8 text-sm items-center ${
            isDark ? "text-text-muted" : "text-text"
          }`}
        >
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
          {/* Light and Dark Toggle */}
          <button
            onClick={() => changeTheme(isDark ? "light" : "dark")}
            className={`relative flex items-center w-14 h-8  rounded-full p-1 transition-colors duration-300 ${
              isDark ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            {/* Sliding circle */}
            <span
              className={`absolute w-6 h-6 bg-white  rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
        ${isDark ? "translate-x-6 bg-dark" : "translate-x-0 bg-white"}`}
            >
              {isDark ? (
                <Sun size={14} className="text-gray-800" />
              ) : (
                <Moon size={14} className="text-black" />
              )}
            </span>
          </button>
        </div>

        {/* 🔹 Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-text text-2xl"
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
            className="fixed top-0 right-0 w-full h-screen bg-bg z-50 flex flex-col items-center justify-center gap-8"
          >
            <div className="flex justify-between">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-3xl text-text"
              >
                ✕
              </button>

              {/* Light and Dark Toggle */}
              <button
                onClick={() => changeTheme(isDark ? "light" : "dark")}
                className={`relative flex items-center w-14 h-8  rounded-full p-1 transition-colors duration-300 ${
                  isDark ? "bg-gray-200" : "bg-gray-700"
                }`}
              >
                {/* Sliding circle */}
                <span
                  className={`absolute w-6 h-6 bg-white  rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
        ${isDark ? "translate-x-6 bg-dark" : "translate-x-0 bg-white"}`}
                >
                  {isDark ? (
                    <Sun size={14} className="text-gray-800" />
                  ) : (
                    <Moon size={14} className="text-black" />
                  )}
                </span>
              </button>
            </div>

            {/* Links */}
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsOpen(false);
                }}
                className={`text-xl text-text ${
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
