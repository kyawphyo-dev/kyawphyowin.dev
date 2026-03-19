import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between px-10 py-6 z-50 transition-all duration-300
        ${
          scrolled
            ? "border-b border-[#00f0ff33] bg-black/30 backdrop-blur-md"
            : ""
        }`}
    >
      <h1 className="text-white text-3xl font-bold cursor-pointer">
        dev<span className="text-neonBlue">.</span>
      </h1>

      <ul className="flex gap-8 text-sm text-gray-400">
        <li className="hover:text-neonBlue cursor-pointer">About</li>
        <li className="hover:text-neonBlue cursor-pointer">Skills</li>
        <li className="hover:text-neonBlue cursor-pointer">Projects</li>
        <li className="hover:text-neonBlue cursor-pointer">Education</li>
        <li className="hover:text-neonBlue cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
