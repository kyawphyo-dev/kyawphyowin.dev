import React from "react";
import { Mail, Github, Linkedin, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <section className=" border-t border-gray-800 bg-black font-serif">
      <div className="flex justify-between items-center text-sm my-3 px-5 py-3 text-gray-400">
        <p>
          Designed & Built by{" "}
          <a
            href="https://www.linkedin.com/in/kyawphyowin-dev/"
            target="_blank"
            className="text-primary underline"
          >
            Kyaw Phyo Win
          </a>{" "}
          — Full-Stack Developer
        </p>

        <div className="flex ">
          <a
            href="https://github.com/kyawphyo-dev"
            target="_blank"
            className="hover:text-primary transition px-2"
          >
            <Github size={20} />
          </a>
          <a
            href="https://github.com/kyawphyo-dev"
            target="_blank"
            className="hover:text-primary transition px-2"
          >
            <Github size={20} />
          </a>
          <a
            href="https://github.com/kyawphyo-dev"
            target="_blank"
            className="hover:text-primary transition px-2"
          >
            <Github size={20} />
          </a>

          <a
            href="https://github.com/kyawphyo-dev"
            target="_blank"
            className="hover:text-primary transition px-2"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
