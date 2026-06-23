import { motion } from "framer-motion";
import { fadeIn, hoverLift, staggerContainer } from "../Utlils/animations";
import devhome from "../assets/DevForum/devhome.png";
import pizzaMenu from "../assets/PizzaOrderSyatem/User/03_Umenu.png";
import FeaturedProject from "../components/FeatureProject";
import ProjectCard from "../components/Projects";
import SectionTitle from "../components/SectionTitle";
import CLanding from "../assets/DineOs/01:CustomerLanding.png";

const projects = [
  {
    id: 1,
    title: "Pizza Order System",
    description:
      "A full-stack web application for ordering pizzas online with admin dashboard, order management, and reporting system.",
    tech: ["JavaScript", "AJAX", "Bootstrap", "AOS", "PHP", "Laravel", "Mysql"],
    github: "https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel",
    live: "#",
    featured: false,
    view: "/project/pizza",
    image: pizzaMenu,
  },
  {
    id: 2,
    title: "Developer Forum",
    description:
      "Built a full-stack developer community platform inspired by Stack Overflow using Next.js, TypeScript, and MongoDB.",
    tech: ["Next.js", "MongoDB", "JWT", "Typescript"],
    github: "https://github.com/kyawphyo-dev/devforum-next.js",
    view: "/project/devforum",
    featured: false,
    image: devhome,
  },
  {
    id: 1,
    title: "DineOs-Complete Restaurant Management Platform(Ongoing)",
    description:
      "DineOS is an all-in-one restaurant management platform that helps buffet and dine-in restaurants manage menus, orders, staff, inventory, and QR code ordering.",
    tech: ["Next.js", "Supabase", "NextAuth.js", "Typescript", "Prisma ORM"],
    github: "https://github.com/kyawphyo-dev/dineos-nextjs",
    view: "/project/dineos",
    featured: true,
    image: CLanding,
  },
];
export default function ProjectSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen px-6 py-16 font-serif bg-bg text-text md:py-30"
      id="projects"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        <SectionTitle id="02" label="Projects" title="My Work" />

        <motion.div variants={fadeIn("up", 0.2)} {...hoverLift}>
          {featured && <FeaturedProject project={featured} img="" />}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid gap-6 md:grid-cols-2"
        >
          {others.map((p, i) => (
            <motion.div {...hoverLift} key={p.id}>
              <ProjectCard project={p} index={i + 2} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
