import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/profile/NavLogo.png";

const navItems = [
  "home",
  "projects",
  "skills",
  "about",
  "education",
  "contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, changeTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage =
    location.pathname === "/" || location.pathname.endsWith("/home");

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleNavClick = (sectionId) => (e) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (!isHomePage) {
      e.preventDefault();
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    e.preventDefault();
    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (!isHomePage) return;

    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage, location.pathname]);

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

  return (
    <>
      {/* 🔹 NAVBAR */}
      <nav
        className={`fixed top-0 w-full font-serif flex justify-between items-center px-6 md:px-10 py-3 z-50 transition-all duration-300
        ${scrolled ? "border-b border-[#292929] bg-bg/20 backdrop-blur-lg" : ""}
        ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link
          to="/"
          onClick={handleNavClick("home")}
          className="text-2xl font-bold cursor-pointer md:text-3xl"
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 rounded-full object-cover"
          />
        </Link>

        {/* 🔹 Desktop Menu */}
        <div
          className={`hidden md:flex gap-8 text-sm items-center ${
            isDark ? "text-text-muted" : "text-text"
          }`}
        >
          {navItems.map((item) => (
            <Link
              to="/"
              key={item}
              onClick={handleNavClick(item)}
              className={`text-lg capitalize transition-colors hover:text-primary ${
                activeSection === item ? "text-primary" : "text-text"
              }`}
            >
              {item}
            </Link>
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
          className="text-2xl md:hidden text-text"
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
            className="fixed top-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen gap-8 bg-bg"
          >
            <div className="flex justify-between">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute text-3xl top-6 right-6 text-text"
              >
                ✕
              </button>

              {/* Light and Dark Toggle */}
              <button
                onClick={() => {
                  changeTheme(isDark ? "light" : "dark");
                  setIsOpen(false);
                }}
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
              <Link
                to="/"
                key={item}
                onClick={handleNavClick(item)}
                className={`text-xl capitalize transition-colors ${
                  activeSection === item ? "text-primary" : "text-text"
                }`}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
