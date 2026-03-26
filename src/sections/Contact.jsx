import React from "react";
import SectionTitle from "../components/sectionTitle";
import { Mail, Github, Linkedin, MapPin, Facebook } from "lucide-react";

export default function Contact() {
  let contactInfo = [
    {
      info: "Kyaw Phyo Win",
      icon: Facebook,
      link: "",
    },
    {
      info: "kyawphyowin242965@gmail.com",
      icon: Mail,
      link: "",
    },
    {
      info: "github.com/kyawphyo-dev",
      icon: Github,
      link: "",
    },
    {
      info: "linkedin.com/in/kyawphyowin-dev",
      icon: Linkedin,
      link: "",
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
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-30 font-serif"
    >
      <div className="max-w-5xl w-full mx-auto">
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
                  <a key={index} href={contact.link} target="_blank">
                    <div className="border border-gray-800 px-5 py-3 me-10 mb-5 hover:bg-gray-800 transition flex items-center">
                      <Icon className=" text-text-muted" size={15} />
                      <p className="text-text-muted ms-5">{contact.info}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="w-full flex flex-col">
              <label htmlFor="name" className="text-text-muted mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-800 px-5 py-3"
              />
            </div>
            <div className="w-full flex flex-col mt-5">
              <label htmlFor="email" className="text-text-muted mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="your@gmail.com"
                className="border border-gray-800 px-5 py-3"
              />
            </div>
            <div className="w-full mt-5">
              <label htmlFor="message" className="text-text-muted">
                Message
              </label>
              <textarea
                name="message"
                className="border border-gray-800 px-5 py-3 w-full mt-3"
                placeholder="Tell me about your project or just say hi"
                id=""
                rows={3}
              ></textarea>
            </div>
            <div className="w-full ">
              <button
                type="submit"
                className="w-full text-start mt-5 bg-primary rounded-sm px-5 py-3 hover:bg-primary-hover"
              >
                ↗ Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
