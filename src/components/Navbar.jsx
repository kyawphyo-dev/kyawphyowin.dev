import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/profile/NavLogo.png";

const navItems = [
  "home",
  "projects",
  "skills",
  "about",
  "education",
  "contact",
];

const navRoutes = {
  home: "/",
  projects: "/projects",
  skills: "/skills",
  about: "/about",
  education: "/education",
  contact: "/contact",
};

const getActiveNavItem = (pathname) => {
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (normalized === "/" || normalized.endsWith("/home")) {
    return "home";
  }

  if (normalized.includes("/project/")) {
    return "projects";
  }

  const segment = normalized.split("/").pop();
  return navItems.includes(segment) ? segment : "home";
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, changeTheme } = useTheme();
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname.endsWith("/home");

  const routeActiveItem = getActiveNavItem(location.pathname);
  const [scrollActiveSection, setScrollActiveSection] = useState("home");
  const activeSection = isHomePage ? scrollActiveSection : routeActiveItem;

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
          setScrollActiveSection(visible[0].target.id);
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

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full font-serif flex justify-between items-center px-6 md:px-10 py-3 z-50 transition-all duration-300
        ${scrolled ? "border-b border-[#292929] bg-bg/20 backdrop-blur-lg" : ""}
        ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link to="/" className="text-2xl font-bold cursor-pointer md:text-3xl">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 rounded-full object-cover"
          />
        </Link>

        <div
          className={`hidden md:flex gap-8 text-sm items-center ${
            isDark ? "text-text-muted" : "text-text"
          }`}
        >
          {navItems.map((item) => (
            <Link
              to={navRoutes[item]}
              key={item}
              className={`text-lg capitalize transition-colors hover:text-primary ${
                activeSection === item ? "text-primary" : "text-text"
              }`}
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => changeTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`relative flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
              isDark ? "bg-gray-200" : "bg-gray-700"
            }`}
          >
            <span
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
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

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          className="text-2xl md:hidden text-text"
        >
          ☰
        </button>
      </nav>

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
              <button
                onClick={closeMobileMenu}
                className="absolute text-3xl top-6 right-6 text-text"
              >
                ✕
              </button>

              <button
                onClick={() => {
                  changeTheme(isDark ? "light" : "dark");
                  closeMobileMenu();
                }}
                className={`relative flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
                  isDark ? "bg-gray-200" : "bg-gray-700"
                }`}
              >
                <span
                  className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
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

            {navItems.map((item) => (
              <Link
                to={navRoutes[item]}
                key={item}
                onClick={closeMobileMenu}
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
