import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

import customerLanding from "../assets/DineOs/customer/01:CustomerLanding.png";
import customerMenus from "../assets/DineOs/customer/02:CustomerMenus.png";
import customerCart from "../assets/DineOs/customer/03:CustomerCart.png";
import customerOrders from "../assets/DineOs/customer/04:CustomerOrders.png";

import { Github, TrendingUp } from "lucide-react";
import { fadeIn, staggerContainer } from "../Utlils/animations";

export default function DineOsShowCase() {
  const customerImages = [
    {
      src: customerLanding,
      title: "Customer Landing",
      alt: "DineOs customer landing page with QR scan",
    },
    {
      src: customerMenus,
      title: "Browse Menus",
      alt: "DineOs customer menu browsing interface",
    },
    {
      src: customerCart,
      title: "Shopping Cart",
      alt: "DineOs customer cart and checkout",
    },
    {
      src: customerOrders,
      title: "Order Tracking",
      alt: "DineOs customer order status tracking",
    },
  ];

  const customerHighlights = [
    "Scan QR codes to access the restaurant menu instantly",
    "Browse menus with categories, images, and pricing",
    "Place orders directly from the table",
    "Track order status in real time",
  ];

  const techStack = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "NextAuth.js",
    "Prisma ORM",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const githubLink = "https://github.com/kyawphyo-dev/dineos-nextjs";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % customerImages.length;
        scrollRef.current?.scrollTo({
          left: next * scrollRef.current.offsetWidth,
          behavior: "smooth",
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [customerImages.length]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.offsetWidth));
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen px-6 py-16 font-serif bg-bg md:py-30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        <Link
          to="/projects"
          className="mb-6 text-sm text-text-muted opacity-70 hover:opacity-100"
        >
          ← Back to Projects
        </Link>

        <SectionTitle id="" label="DineOs — Restaurant Management System" />

        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl"
        >
          Customer Interface
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid w-full min-w-0 gap-6 md:gap-10 md:grid-cols-2"
        >
          <motion.div variants={fadeIn("up", 0.4)} className="min-w-0">
            <div className="relative w-full h-[250px] md:h-[340px] overflow-hidden bg-gray-800 rounded-xl">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {customerImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center h-full min-w-full gap-2 p-3 snap-center"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="object-contain w-full max-h-[180px] md:max-h-[270px]"
                    />
                    <p className="mt-2 text-xs text-center text-white md:text-sm">
                      {image.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {customerImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`View screenshot ${i + 1}`}
                    onClick={() => {
                      scrollRef.current?.scrollTo({
                        left: i * scrollRef.current.offsetWidth,
                        behavior: "smooth",
                      });
                      setActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex ? "bg-white w-4" : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-text">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs border border-border text-primary me-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text">Role</h3>
              <p className="text-sm text-text-muted md:text-lg">
                Full-Stack Developer
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-sm text-text-muted md:text-lg">Ongoing</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-5 py-2 border rounded-lg text-text hover:bg-primary transition-all"
              >
                <Github size={18} className="me-1" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="w-full font-serif text-text mt-15"
        >
          <h4 className="text-xl text-primary">Details</h4>
          <p className="mt-3 text-sm text-text-muted md:text-lg">
            DineOS is a comprehensive restaurant management platform designed
            for buffet and dine-in restaurants. It provides restaurant owners
            with a complete ecosystem to manage operations — including menu
            management, order management, staff management, inventory, and
            customer ordering via QR codes.
          </p>
          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3">
            {customerHighlights.map((highlight, index) => (
              <li key={index} className="mb-3 text-sm md:text-lg">
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
