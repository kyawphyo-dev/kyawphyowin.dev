import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { fadeIn, staggerContainer } from "../Utlils/animations";
import ProjectDetails from "../components/ProjectDetails";

export default function DineOsShowCase() {
  const projects = {
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "NextAuth.js",
      "Prisma ORM",
    ],
    title: "DineOs",
    githubLink: "https://github.com/kyawphyo-dev/dineos-nextjs",
    role: "Full Stack Developer",
    timeline: "1 Month",
    section: [
      {
        id: "customer",
        title: "Customer Dashboard",
        highlights: [
          "Scan QR codes to access the restaurant menu instantly",
          "Browse menus with categories, images, and pricing",
          "Place orders directly from the table",
          "Track order status in real time",
        ],
        description:
          "A modern restaurant ordering system with QR code menu access, real-time order tracking, and a user-friendly interface built with Next.js and Supabase.",
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583427/01_CustomerLanding_igxjso.png",
            title: "Customer Landing",
            alt: "DineOs customer landing page with QR scan",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583427/02_CustomerMenus_jmmpvv.png",
            title: "Browse Menus",
            alt: "DineOs customer menu browsing interface",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583429/03_CustomerCart_pkchy2.png",
            title: "Shopping Cart",
            alt: "DineOs customer cart and checkout",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583430/04_CustomerOrders_rqqe1f.png",
            title: "Order Tracking",
            alt: "DineOs customer order status tracking",
          },
        ],
      },
    ],
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen px-6 pt-6 pb-16 font-serif bg-bg md:pb-30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        <div>
          <Link
            to="/projects"
            className="mb-6 text-sm text-text-muted opacity-70 hover:opacity-100"
          >
            ← Back to Projects
          </Link>

          <SectionTitle id="" label={projects.title} />
        </div>
        {projects.section.map((item) => (
          <ProjectDetails
            key={item.id}
            Images={item.images}
            Highlights={item.highlights}
            TechStack={projects.techStack}
            githubLink={projects.githubLink}
            title={item.title}
            role={projects.role}
            timeline={projects.timeline}
            details={item.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
