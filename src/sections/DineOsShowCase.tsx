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
    title: "DineOs - Restaurant Management System",
    githubLink: "https://github.com/kyawphyo-dev/dineos-nextjs",
    role: "Full Stack Developer",
    timeline: "1 Month",
    section: [
      {
        id: "admin & manager",
        title: "Admin & Manager Dashboard",
        highlights: [
          "Role-Based Authentication – Secure login for Admin and Manager with permission-based access.",
          "Multi-Branch Management – Manage multiple restaurants and branches from a single platform.",
          "Dashboard Overview – Real-time branch statistics for zones, tables, menus, staff, orders, and packages.",
          "Restaurant Operations – Manage zones, tables, menus, categories, menu items, packages, and staff accounts.",
          "Performance & Analytics – Monitor staff performance and generate sales reports.",
          "Role-Based Restrictions – Managers share the same interface but are limited to their assigned branch and cannot access sales reports.",
        ],
        description:
          " The Admin & Manager Dashboard is the central management system of DineOS, designed to simplify restaurant operations through a structured, branch-based workflow. The interface supports multiple restaurants and branches while using role-based authorization to provide secure access to business data and management tools.",
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783659876/Admin_Workflow_pvpzs2.png",
            title: "Admin WorkFlow",
            alt: "adminworkflow",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783659876/Manager_Workflow_mkqwcp.png",
            title: "Manager WorkFlow",
            alt: "Manager workflow",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783660235/Screenshot_2569-07-10_at_12.10.01_yyg0n1.png",
            title: "Login Page",
            alt: "Login page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583348/01_AdminRestaurantSelect_r65py5.png",
            title: "Admin Select Restaurant",
            alt: "Admin select restaurant",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583349/02_AdminBranchSelect_cl2k2e.png",
            title: "Admin Select Branch",
            alt: "Admin select branch",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583350/03_AdminDashboard_soudn8.png",
            title: "Admin Dashboard",
            alt: "Admin dashboard",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583351/04_AdminZone_is45kd.png",
            title: "Zones Management",
            alt: "Zones management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583358/08_AdminTables_gowadi.png",
            title: "Tables Management",
            alt: "Tables management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583355/07_AdminPackages_pr0hc0.png",
            title: "Packages Management",
            alt: "Packages management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783660241/Screenshot_2569-07-10_at_12.09.44_yitj07.png",
            title: "Menus Management",
            alt: "Menus management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583352/05_AdminCategories_q21qub.png",
            title: "Categories Management",
            alt: "Categories management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583354/06_AdminMenus_l5up9w.png",
            title: "Menu Items Management",
            alt: "Menu items management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583357/09_AdminStaff_slrx5f.png",
            title: "Staff Management",
            alt: "Staff management",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583358/10_AdminPerformance_jvas94.png",
            title: "Staff Performance",
            alt: "Staff performance",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583360/11_AdminSale_uiinay.png",
            title: "Sales Report",
            alt: "Sales report",
          },
        ],
      },

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
