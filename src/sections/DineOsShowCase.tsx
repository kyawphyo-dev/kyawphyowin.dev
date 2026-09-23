import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import SectionTitle from "../components/SectionTitle";
import { fadeIn, staggerContainer } from "../Utlils/animations";

const createPlaceholder = (title: string, description: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="900" fill="#F5EDE6"/>
      <rect x="80" y="80" width="1440" height="740" rx="28" fill="#FAF6F0" stroke="#E8C4A8" stroke-width="4"/>
      <circle cx="800" cy="350" r="76" fill="#C4714A" opacity="0.15"/>
      <path d="M765 350h70M800 315v70" stroke="#C4714A" stroke-width="14" stroke-linecap="round"/>
      <text x="800" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="700" fill="#3D2B1A">
        ${title}
      </text>
      <text x="800" y="580" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#7A6458">
        ${description}
      </text>
      <text x="800" y="685" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#C4714A">
        DineOS · In Active Development
      </text>
    </svg>
  `)}`;

export default function DineOsShowCase() {
  const project = {
    title: "DineOS - Restaurant Management Platform",
    githubLink: "https://github.com/kyawphyo-dev/dineos-nextjs",
    role: "Full-Stack Developer",
    timeline: "Ongoing · Approximately 70% complete",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "NextAuth.js",
      "Cloudinary",
    ],
    sections: [
      {
        id: "admin-manager",
        title: "Admin & Manager Dashboard",
        description:
          "The management workspace is the most developed part of DineOS. It supports a branch-based restaurant workflow for managing operational data, including menus, tables, zones, packages, and staff. Role-based access ensures that managers only access their assigned branch.",
        highlights: [
          "Role-based authentication for restaurant owners, managers, front staff, kitchen staff, and cashiers.",
          "Company → restaurant → branch structure for multi-branch operations.",
          "Zone and table management, including capacities and table statuses.",
          "Menu, category, menu-item, and package management.",
          "Staff account and role management.",
          "Sales reporting and advanced analytics are still in development.",
        ],
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783659876/Admin_Workflow_pvpzs2.png",
            title: "Admin Workflow",
            alt: "DineOS admin workflow",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783659876/Manager_Workflow_mkqwcp.png",
            title: "Manager Workflow",
            alt: "DineOS manager workflow",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783660235/Screenshot_2569-07-10_at_12.10.01_yyg0n1.png",
            title: "Login Page",
            alt: "DineOS login page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583350/03_AdminDashboard_soudn8.png",
            title: "Admin Dashboard",
            alt: "DineOS admin dashboard",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583351/04_AdminZone_is45kd.png",
            title: "Zone Management",
            alt: "DineOS zone management page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583358/08_AdminTables_gowadi.png",
            title: "Table Management",
            alt: "DineOS table management page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583355/07_AdminPackages_pr0hc0.png",
            title: "Package Management",
            alt: "DineOS package management page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583354/06_AdminMenus_l5up9w.png",
            title: "Menu Item Management",
            alt: "DineOS menu item management page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583357/09_AdminStaff_slrx5f.png",
            title: "Staff Management",
            alt: "DineOS staff management page",
          },
        ],
      },
      {
        id: "customer-ordering",
        title: "Customer Ordering Experience",
        description:
          "DineOS includes a customer-facing ordering flow for dine-in restaurants. Customers can access the menu from their table, browse categories and items, create an order, and follow the order journey. The complete production ordering and real-time tracking experience is still being finalized.",
        highlights: [
          "QR-code entry point for table-specific customer ordering.",
          "Digital menu browsing with categories, images, prices, and availability.",
          "Customer cart and order-submission flow.",
          "Orders connect to tables and dining sessions.",
          "Real-time customer order updates are planned as a future enhancement.",
        ],
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583427/01_CustomerLanding_igxjso.png",
            title: "Customer Landing",
            alt: "DineOS customer landing page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583427/02_CustomerMenus_jmmpvv.png",
            title: "Browse Menu",
            alt: "DineOS customer menu browsing interface",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583429/03_CustomerCart_pkchy2.png",
            title: "Customer Cart",
            alt: "DineOS customer cart",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583430/04_CustomerOrders_rqqe1f.png",
            title: "Order Tracking",
            alt: "DineOS customer order tracking interface",
          },
        ],
      },
      {
        id: "staff-dashboard",
        title: "Staff Dashboard",
        description:
          "The staff workspace is being developed to help front-of-house teams manage reservations, table availability, dining sessions, and guest flow.",
        highlights: [
          "Reservation management is included in the data model.",
          "Staff can be assigned to a branch and optional service zone.",
          "Dining sessions track guest counts, start times, and completion.",
          "Table statuses support operational handoffs such as cleaning and bill requests.",
          "Dedicated interface screenshots will be added when this dashboard is complete.",
        ],
        images: [
          {
            src: createPlaceholder(
              "Staff Dashboard",
              "Reservation, table, and dining-session workflow in progress",
            ),
            title: "Staff Dashboard - Coming Soon",
            alt: "Placeholder for the DineOS staff dashboard",
          },
        ],
      },
      {
        id: "kitchen-dashboard",
        title: "Kitchen Dashboard",
        description:
          "The kitchen workspace is being built around an order queue that lets kitchen staff receive orders and progress them through preparation and serving.",
        highlights: [
          "Orders support pending, preparing, served, completed, and cancelled statuses.",
          "Order items retain quantities, prices, and customer notes.",
          "Kitchen staff role is included in the platform's permission model.",
          "Real-time order notifications and kitchen updates are planned.",
          "Dedicated interface screenshots will be added when this dashboard is complete.",
        ],
        images: [
          {
            src: createPlaceholder(
              "Kitchen Dashboard",
              "Order queue and preparation workflow in progress",
            ),
            title: "Kitchen Dashboard - Coming Soon",
            alt: "Placeholder for the DineOS kitchen dashboard",
          },
        ],
      },
      {
        id: "cashier-dashboard",
        title: "Cashier & Billing",
        description:
          "DineOS has a billing foundation for creating a bill from a dining session, applying charges and discounts, recording payment, calculating change, printing receipts, and closing the session.",
        highlights: [
          "Bills include subtotal, discount, service charge, tax, and grand total.",
          "Payments record method, received amount, change, reference number, and cashier.",
          "Bills support unpaid, partially paid, paid, refunded, and void states.",
          "Receipt numbers and receipt-printing support are included.",
          "Split payments, refunds, void approval, and cashier shift reconciliation are planned improvements.",
        ],
        images: [
          {
            src: createPlaceholder(
              "Cashier Dashboard",
              "Billing, payments, and receipt workflow in progress",
            ),
            title: "Cashier Dashboard - Coming Soon",
            alt: "Placeholder for the DineOS cashier dashboard",
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
      className="min-h-screen bg-bg px-6 pt-6 pb-16 font-serif md:pb-30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="mx-auto w-full max-w-5xl"
      >
        <Link
          to="/projects"
          className="mb-6 inline-block text-sm text-text-muted opacity-70 transition-opacity hover:opacity-100"
        >
          ← Back to Projects
        </Link>

        <SectionTitle id="" label={project.title} />

        <div className="mb-12 rounded-xl border border-[#E8C4A8] bg-[#FAF6F0] p-6 text-[#3D2B1A]">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#C4714A]">
            Active development · approximately 70% complete
          </p>
          <p className="leading-7 text-text-muted">
            DineOS is a portfolio-grade SaaS restaurant management platform for
            buffet and dine-in operations. The core management, menu, table,
            ordering, and billing foundations are in place; real-time updates,
            analytics, inventory, and some role-specific dashboards are still
            under development.
          </p>
        </div>

        {project.sections.map((section) => (
          <ProjectDetails
            key={section.id}
            Images={section.images}
            Highlights={section.highlights}
            TechStack={project.techStack}
            githubLink={project.githubLink}
            title={section.title}
            role={project.role}
            timeline={project.timeline}
            details={section.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
