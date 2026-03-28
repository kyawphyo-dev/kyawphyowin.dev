import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { hoverLift } from "../Utlils/animations";
import { motion } from "framer-motion";

export default function Footer() {
  let contactInfo = [
    {
      info: "Kyaw Phyo Win",
      icon: Facebook,
      link: "https://www.facebook.com/share/1bh41B9Hio/",
    },
    {
      info: "Kyaw Phyo Win",
      icon: Instagram,
      link: "",
    },
    {
      info: "github.com/kyawphyo-dev",
      icon: Github,
      link: "https://github.com/kyawphyo-dev",
    },
    {
      info: "linkedin.com/in/kyawphyowin-dev",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/kyawphyowin-dev/",
    },
  ];
  return (
    <section className=" bg-bg font-serif flex justify-center items-center">
      <div className="max-w-5xl w-full md:flex justify-between text-md my-3 mb-10 md:ms-0 ms-4 py-3  text-text-muted">
        <div className="mb-2 px-2">
          <p>
            Designed & Built by{" "}
            <motion.a
              {...hoverLift}
              href="https://www.linkedin.com/in/kyawphyowin-dev/"
              target="_blank"
              className="text-primary underline"
            >
              <br />
              Kyaw Phyo Win
            </motion.a>{" "}
            — Full-Stack Developer
          </p>
        </div>

        <div className="flex">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                {...hoverLift}
                key={index}
                href={contact.link}
                target="_blank"
                className="hover:text-primary transition px-2"
              >
                <Icon size={22} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
