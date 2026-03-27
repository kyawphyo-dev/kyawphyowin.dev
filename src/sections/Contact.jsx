import React from "react";
import SectionTitle from "../components/sectionTitle";
import { Mail, Github, Linkedin, MapPin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverLift } from "../Utlils/animations";

export default function Contact() {
  let contactInfo = [
    {
      info: "Kyaw Phyo Win",
      icon: Facebook,
      link: "https://www.facebook.com/share/1bh41B9Hio/",
    },
    {
      info: "kyawphyowin242965@gmail.com",
      icon: Mail,
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
    {
      info: "Phuket, Thailand - Open to relocation",
      icon: MapPin,
      link: "",
    },
  ];

  //handle submit
  let onSubmit = (e) => {
    e.preventDefault();
    alert("On submit");
  };
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-16 md:py-30 font-serif"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl w-full mx-auto"
      >
        <SectionTitle id="06" label="Contact" title="Let's Build Together" />
        <div className=" grid md:grid-cols-2 gap-12">
          <div className="flex flex-col ">
            <p className="text-text-muted">
              Have a project in mind or want to discuss opportunities? I’m
              always open to meaningful collaborations and conversations.
            </p>
            <div className="mt-10">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    variants={fadeIn("up", index * 0.1)}
                    key={index}
                    href={contact.link}
                    target="_blank"
                  >
                    <motion.div
                      {...hoverLift}
                      className="border border-gray-800 px-5 py-3 me-10 mb-5 hover:bg-gray-800 transition flex items-center"
                    >
                      <Icon className=" text-text-muted" size={15} />
                      <p className="text-text-muted ms-5">{contact.info}</p>
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="w-full flex flex-col"
            >
              <label htmlFor="name" className="text-text-muted mb-3">
                Name
              </label>
              <motion.input
                {...hoverLift}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="border border-gray-800 px-5 py-3"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              className="w-full flex flex-col mt-5"
            >
              <label htmlFor="email" className="text-text-muted mb-3">
                Email
              </label>
              <motion.input
                {...hoverLift}
                type="email"
                name="email"
                id="email"
                placeholder="your@gmail.com"
                className="border border-gray-800 px-5 py-3"
              />
            </motion.div>
            <motion.div variants={fadeIn("up", 0.4)} className="w-full mt-5">
              <label htmlFor="message" className="text-text-muted">
                Message
              </label>
              <motion.textarea
                {...hoverLift}
                id="message"
                name="message"
                className="border border-gray-800 px-5 py-3 w-full mt-3"
                placeholder="Tell me about your project or just say hi"
                rows={3}
              ></motion.textarea>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.5)} className="w-full ">
              <motion.button
                {...hoverLift}
                type="submit"
                className="w-full text-start mt-5 bg-primary rounded-sm px-5 py-3 hover:bg-primary-hover"
              >
                ↗ Send Message
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
}
