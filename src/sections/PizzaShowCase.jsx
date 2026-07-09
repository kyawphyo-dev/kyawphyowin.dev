import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

import { fadeIn, staggerContainer } from "../Utlils/animations";
import ProjectDetails from "../components/ProjectDetails";

export default function PizzaShowCase() {
  const projects = {
    techStack: ["HTML", "CSS", "Bootstrap", "PHP", "Laravel", "AJAX", "MySQL"],
    title: "Pizza Order System",
    githubLink: "https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel",
    role: "Full Stack Developer",
    timeline: "2.5 months",
    section: [
      {
        id: "admin",
        title: "Admin Dashboard",
        highlights: [
          "🔐 Secure authentication (register / login)",
          "📈 Earnings reports (daily, weekly, monthly, overall)",
          "🍕 Full CRUD menu management (Pizza, Drinks, Desserts, Combos)",
          "📦 Order & booking management with status tracking",
          "🛡️ Role-based access (Admin , Super Admin )",
          "👤 Create or change role (admin,user)",
          "👤 Manage profile (Name,Profile Image, Change password,address, phone)",
          "💳 Manage Payment method management",
        ],
        description:
          " A full-stack web application for pizza ordering with role-based admin dashboard, order management, and reporting system built using Laravel.",
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583002/a_login_jreful.png",
            title: "Admin Login",
            alt: "Admin login page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583003/a_dashboard1_cmvvhx.png",
            title: "Dashboard Overview",
            alt: "Admin dashboard showing reports",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583003/a_dashboard2_kkrojg.png",
            title: "Analytics Dashboard",
            alt: "Admin analytics and charts",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583002/a_addMenu_sxtyqk.png",
            title: "Add Menu",
            alt: "Admin add menu form",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583004/a_pizza_h8fmmd.png",
            title: "Pizza Management",
            alt: "Manage pizza items",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583004/a_combo_a7caxy.png",
            title: "Combo Deals",
            alt: "Manage combo deals",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583002/a_category_jybga2.png",
            title: "Category Management",
            alt: "Manage categories",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583003/a_orderList_cojlff.png",
            title: "Order List",
            alt: "View and manage orders",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583002/a_booking_mbg0uk.png",
            title: "Booking Management",
            alt: "Manage bookings",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583002/a_adminList_icpn3j.png",
            title: "Admin Management",
            alt: "Manage admin users",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583004/a_profile_y9hbgq.png",
            title: "Profile Settings",
            alt: "Admin profile page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583002/a_changePassword_evcnez.png",
            title: "Change Password",
            alt: "Password update page",
          },
        ],
      },
      {
        id: "user",
        title: "User Dashboard",
        description:
          "The user-facing site allows customers to browse the menu, customize pizzas with toppings, and place orders through an intuitive and responsive interface. It provides a smooth ordering experience with secure authentication and personal account management.",
        highlights: [
          "🔐 Secure authentication (register / login)",
          "🍕 Browse menu by categories (Pizza, Drinks, Desserts)",
          "🛒 Add items to cart and customize with toppings",
          "📦 Place orders with real-time status tracking",
          "📦 Book table for Din in (real-time status tracking)",
          "👤 Manage profile (Name,Profile Image, Change password,address, phone)",
          "📜 View order history",
        ],
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583040/01_Ulogin_ctpv3x.png",
            title: "User Login",
            alt: "User login page",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583034/02_UHome_uxcnnf.png",
            title: "Homepage",
            alt: "User homepage",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583035/03_Umenu_sspicr.png",
            title: "Menu Page",
            alt: "Browse pizza menu",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583037/04_Udesserts_ihovke.png",
            title: "Desserts Category",
            alt: "View desserts menu",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583048/05_Usoftdrinks_vwqen1.png",
            title: "Soft Drinks",
            alt: "View drinks menu",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583048/06_Uaddtocard_aghb2i.png",
            title: "Add to Cart",
            alt: "Adding item to cart",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583046/07_Utoppings_elgzrp.png",
            title: "Customize Toppings",
            alt: "Select pizza toppings",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583030/08_Ucartdetails_l2xgqm.jpg",
            title: "Cart Details",
            alt: "View cart and selected items",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583041/09_Uorderhistory_kb4g2c.png",
            title: "Order History",
            alt: "View past orders",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583047/010_Ubooking_vnmems.jpg",
            title: "Booking Page",
            alt: "Create booking",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583050/011_Ubookinghistory_l6wbjk.png",
            title: "Booking History",
            alt: "View booking history",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583044/012_Uprofile_wlhoaz.png",
            title: "Profile Management",
            alt: "User profile settings",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583049/013_Ucontact_nru4ok.png",
            title: "Contact Page",
            alt: "Contact information page",
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

          <SectionTitle id="" label="Pizza Order System" />
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
