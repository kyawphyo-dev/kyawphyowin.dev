import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between px-10 py-5 z-50 transition-all duration-100
        ${
          scrolled ? "border-b border-[#292929] bg-bg backdrop-blur-lg " : ""
        }, `}
    >
      <h1 className="text-white text-3xl font-bold cursor-pointer"></h1>

      <ul className="flex gap-3 md:gap-8 text-xs md:text-sm text-gray-400 items-center">
        <a
          className="hover:text-primary cursor-pointer transition"
          href="#about"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="hover:text-primary cursor-pointer transition"
        >
          SKILLS
        </a>
        <li className="hover:text-primary cursor-pointer transition">
          PROJECTS
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          EDUCATION
        </li>
        <li className="hover:text-primary cursor-pointer transition">
          CONTACT
        </li>
      </ul>
    </nav>
  );
}
