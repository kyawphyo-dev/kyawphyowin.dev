import React from "react";

export default function Footer() {
  return (
    <section className=" border-t border-gray-800 bg-black font-serif">
      <div className="flex justify-between items-center text-sm my-3 px-5 py-3 text-gray-400">
        <p>
          © 2025 Kyaw Phyo Win —
          <span className="text-primary">Full-Stack Engineer</span>
        </p>

        <a
          href="https://github.com/kyawphyo-dev"
          target="_blank"
          className="hover:text-primary transition"
        >
          Designed & Built with ♥
        </a>
      </div>
    </section>
  );
}
