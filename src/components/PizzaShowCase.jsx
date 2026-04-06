import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import admindash1 from "../assets/PizzaOrderSyatem/Admin/a_dashboard1.png";
import admindash2 from "../assets/PizzaOrderSyatem/Admin/a_dashboard2.png";
import adminlogin from "../assets/PizzaOrderSyatem/Admin/a_login.png";
import adminMenu from "../assets/PizzaOrderSyatem/Admin/a_addMenu.png";
import adminpizza from "../assets/PizzaOrderSyatem/Admin/a_pizza.png";
import admincombo from "../assets/PizzaOrderSyatem/Admin/a_combo.png";
import admincategory from "../assets/PizzaOrderSyatem/Admin/a_category.png";
import adminorder from "../assets/PizzaOrderSyatem/Admin/a_orderList.png";
import adminbooking from "../assets/PizzaOrderSyatem/Admin/a_booking.png";
import adminlist from "../assets/PizzaOrderSyatem/Admin/a_adminList.png";
import adminprofile from "../assets/PizzaOrderSyatem/Admin/a_profile.png";
import adminpassword from "../assets/PizzaOrderSyatem/Admin/a_changePassword.png";

import UserLogin from "../assets/PizzaOrderSyatem/User/01_Ulogin.png";
import UserHome from "../assets/PizzaOrderSyatem/User/02_UHome.png";
import UserMenu from "../assets/PizzaOrderSyatem/User/03_Umenu.png";
import UserDesserts from "../assets/PizzaOrderSyatem/User/04_Udesserts.png";
import UserSoftdrinks from "../assets/PizzaOrderSyatem/User/05_Usoftdrinks.png";
import UserAddToCart from "../assets/PizzaOrderSyatem/User/06_Uaddtocard.png";
import UserToppings from "../assets/PizzaOrderSyatem/User/07_Utoppings.png";
import UserCart from "../assets/PizzaOrderSyatem/User/08_Ucartdetails.jpeg";
import UserOrder from "../assets/PizzaOrderSyatem/User/09_Uorderhistory.png";
import UserBooking from "../assets/PizzaOrderSyatem/User/010_Ubooking.jpeg";
import UserBookingHistory from "../assets/PizzaOrderSyatem/User/011_Ubookinghistory.png";
import UserProfile from "../assets/PizzaOrderSyatem/User/012_Uprofile.png";
import UserContact from "../assets/PizzaOrderSyatem/User/013_Ucontact.png";

import { Github, TrendingUp } from "lucide-react";
import { title } from "framer-motion/client";

import {
  hoverLift,
  pageTransition,
  fadeIn,
  staggerContainer,
} from "../Utlils/animations";

export default function ProjectDetails() {
  const adminImages = [
    {
      src: adminlogin,
      title: "Admin Login",
      alt: "Admin login page",
    },
    {
      src: admindash1,
      title: "Dashboard Overview",
      alt: "Admin dashboard showing reports",
    },
    {
      src: admindash2,
      title: "Analytics Dashboard",
      alt: "Admin analytics and charts",
    },
    {
      src: adminMenu,
      title: "Add Menu",
      alt: "Admin add menu form",
    },
    {
      src: adminpizza,
      title: "Pizza Management",
      alt: "Manage pizza items",
    },
    {
      src: admincombo,
      title: "Combo Deals",
      alt: "Manage combo deals",
    },
    {
      src: admincategory,
      title: "Category Management",
      alt: "Manage categories",
    },
    {
      src: adminorder,
      title: "Order List",
      alt: "View and manage orders",
    },
    {
      src: adminbooking,
      title: "Booking Management",
      alt: "Manage bookings",
    },
    {
      src: adminlist,
      title: "Admin Management",
      alt: "Manage admin users",
    },
    {
      src: adminprofile,
      title: "Profile Settings",
      alt: "Admin profile page",
    },
    {
      src: adminpassword,
      title: "Change Password",
      alt: "Password update page",
    },
  ];
  const adminHighlights = [
    "🔐 Secure authentication (register / login)",
    "📈 Earnings reports (daily, weekly, monthly, overall)",
    "🍕 Full CRUD menu management (Pizza, Drinks, Desserts, Combos)",
    "📦 Order & booking management with status tracking",
    "🛡️ Role-based access (Admin , Super Admin )",
    "👤 Create or change role (admin,user)",
    "👤 Manage profile (Name,Profile Image, Change password,address, phone)",
    "💳 Manage Payment method management",
  ];

  const userImages = [
    {
      src: UserLogin,
      title: "User Login",
      alt: "User login page",
    },
    {
      src: UserHome,
      title: "Homepage",
      alt: "User homepage",
    },
    {
      src: UserMenu,
      title: "Menu Page",
      alt: "Browse pizza menu",
    },
    {
      src: UserDesserts,
      title: "Desserts Category",
      alt: "View desserts menu",
    },
    {
      src: UserSoftdrinks,
      title: "Soft Drinks",
      alt: "View drinks menu",
    },
    {
      src: UserAddToCart,
      title: "Add to Cart",
      alt: "Adding item to cart",
    },
    {
      src: UserToppings,
      title: "Customize Toppings",
      alt: "Select pizza toppings",
    },
    {
      src: UserCart,
      title: "Cart Details",
      alt: "View cart and selected items",
    },
    {
      src: UserOrder,
      title: "Order History",
      alt: "View past orders",
    },
    {
      src: UserBooking,
      title: "Booking Page",
      alt: "Create booking",
    },
    {
      src: UserBookingHistory,
      title: "Booking History",
      alt: "View booking history",
    },
    {
      src: UserProfile,
      title: "Profile Management",
      alt: "User profile settings",
    },
    {
      src: UserContact,
      title: "Contact Page",
      alt: "Contact information page",
    },
  ];
  const userHighlight = [
    "🔐 Secure authentication (register / login)",
    "🍕 Browse menu by categories (Pizza, Drinks, Desserts)",
    "🛒 Add items to cart and customize with toppings",
    "📦 Place orders with real-time status tracking",
    "📦 Book table for Din in (real-time status tracking)",
    "👤 Manage profile (Name,Profile Image, Change password,address, phone)",
    "📜 View order history",
  ];

  let TechStack = [
    "HTML",
    "CSS",
    "Bootstrap",
    " PHP",
    "Laravel",
    "AJAX",
    "MySQL",
  ];
  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen px-6 py-16 font-serif bg-bg md:py-30"
    >
      {/* Admin */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl mx-auto"
      >
        {/* Back Button */}
        <motion.Link
          variants={fadeIn("up", 0.2)}
          to="/"
          className="mb-6 text-sm text-text-muted opacity-70 hover:opacity-100"
        >
          ← Back to Projects
        </motion.Link>

        {/* Title */}
        <SectionTitle id="" label="Pizza Order System" />

        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl"
        >
          Admin Dashboard
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid gap-10 md:grid-cols-2"
        >
          {/* LEFT: Images */}
          <div>
            <div className="w-full h-[200px] md:h-[300px] overflow-hidden bg-gray-900 rounded-xl flex items-center justify-center">
              <Swiper
                className="h-full"
                modules={[Autoplay, Navigation]}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {adminImages.map((admin, index) => (
                  <SwiperSlide
                    className="flex items-center justify-center h-full"
                    key={index}
                  >
                    <img
                      src={admin.src}
                      alt={admin.alt}
                      className="object-contain w-full h-full"
                    />
                    <p className="mt-3 text-sm text-center text-gray-800">
                      {admin.title}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-text">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {TechStack.map((tech) => (
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
              <p className="text-text-muted">Backend Developer</p>
            </div>

            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-text-muted">2 Months</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              {/* <button className="px-5 py-2 text-white rounded-lg bg-primary">
                Live Demo
              </button> */}
              <a
                href="https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel"
                className="flex px-5 py-2 border rounded-lg"
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
          <p className="mt-3 text-text-muted">
            A full-stack web application for pizza ordering with role-based
            admin dashboard, order management, and reporting system built using
            Laravel.
          </p>

          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3 ">
            {adminHighlights.map((highlight) => (
              <li className="mb-3">{highlight}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      {/* User */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-5xl mx-auto mt-30"
      >
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl"
        >
          User Site
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT: Images */}
          <motion.div variants={fadeIn("up", 0.3)}>
            <div className="w-full h-[200px] md:h-[300px] overflow-hidden bg-gray-900 rounded-xl flex items-center justify-center">
              <Swiper
                className="h-full"
                modules={[Autoplay, Navigation]}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {userImages.map((user, index) => (
                  <SwiperSlide
                    className="flex items-center justify-center h-full"
                    key={index}
                  >
                    <img
                      src={user.src}
                      alt={user.alt}
                      className="object-contain w-full h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* RIGHT: Info */}
          <motion.div variants={fadeIn("up", 0.4)} className="space-y-6">
            <div>
              <h3 className="font-semibold text-text">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {TechStack.map((tech) => (
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
              <p className="text-text-muted">Backend Developer</p>
            </div>

            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-text-muted">2 Months</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              {/* <button className="px-5 py-2 text-white rounded-lg bg-primary">
                Live Demo
              </button> */}
              <a
                href="https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel"
                className="flex px-5 py-2 border rounded-lg"
              >
                <Github size={18} className="me-1" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="w-full font-serif text-text mt-15"
        >
          <h4 className="text-xl text-primary">Details</h4>
          <p className="mt-3 text-text-muted">
            The user-facing site allows customers to browse the menu, customize
            pizzas with toppings, and place orders بسهولة through an intuitive
            and responsive interface. It provides a smooth ordering experience
            with secure authentication and personal account management.
          </p>

          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3 ">
            {userHighlight.map((highlight) => (
              <li className="mb-3">{highlight}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
