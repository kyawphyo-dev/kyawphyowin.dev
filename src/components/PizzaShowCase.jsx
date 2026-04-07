import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
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
import {
  hoverLift,
  pageTransition,
  fadeIn,
  staggerContainer,
} from "../Utlils/animations";

export default function ProjectDetails() {
  const adminImages = [
    { src: adminlogin, title: "Admin Login", alt: "Admin login page" },
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
    { src: adminMenu, title: "Add Menu", alt: "Admin add menu form" },
    { src: adminpizza, title: "Pizza Management", alt: "Manage pizza items" },
    { src: admincombo, title: "Combo Deals", alt: "Manage combo deals" },
    {
      src: admincategory,
      title: "Category Management",
      alt: "Manage categories",
    },
    { src: adminorder, title: "Order List", alt: "View and manage orders" },
    { src: adminbooking, title: "Booking Management", alt: "Manage bookings" },
    { src: adminlist, title: "Admin Management", alt: "Manage admin users" },
    { src: adminprofile, title: "Profile Settings", alt: "Admin profile page" },
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
    { src: UserLogin, title: "User Login", alt: "User login page" },
    { src: UserHome, title: "Homepage", alt: "User homepage" },
    { src: UserMenu, title: "Menu Page", alt: "Browse pizza menu" },
    {
      src: UserDesserts,
      title: "Desserts Category",
      alt: "View desserts menu",
    },
    { src: UserSoftdrinks, title: "Soft Drinks", alt: "View drinks menu" },
    { src: UserAddToCart, title: "Add to Cart", alt: "Adding item to cart" },
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
    { src: UserOrder, title: "Order History", alt: "View past orders" },
    { src: UserBooking, title: "Booking Page", alt: "Create booking" },
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

  const TechStack = [
    "HTML",
    "CSS",
    "Bootstrap",
    "PHP",
    "Laravel",
    "AJAX",
    "MySQL",
  ];

  // Admin scroll
  const adminScrollRef = useRef(null);
  const [adminActiveIndex, setAdminActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdminActiveIndex((prev) => {
        const next = (prev + 1) % adminImages.length;

        adminScrollRef.current?.scrollTo({
          left: next * adminScrollRef.current.offsetWidth,
          behavior: "smooth",
        });

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAdminScroll = () => {
    const el = adminScrollRef.current;
    if (!el) return;
    setAdminActiveIndex(Math.round(el.scrollLeft / el.offsetWidth));
  };

  // User scroll
  const userScrollRef = useRef(null);
  const [userActiveIndex, setUserActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = userScrollRef.current;
      if (!el) return;
      const nextIndex = (userActiveIndex + 1) % userImages.length;
      el.scrollTo({ left: nextIndex * el.offsetWidth, behavior: "smooth" });
      setUserActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [userActiveIndex]);

  const handleUserScroll = () => {
    const el = userScrollRef.current;
    if (!el) return;
    setUserActiveIndex(Math.round(el.scrollLeft / el.offsetWidth));
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
        {/* Back Button */}
        <Link
          to="/"
          className="mb-6 text-sm text-text-muted opacity-70 hover:opacity-100"
        >
          ← Back to Projects
        </Link>

        {/* Title */}
        <SectionTitle id="" label="Pizza Order System" />

        {/* ─── ADMIN SECTION ─── */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl"
        >
          Admin Dashboard
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid w-full min-w-0 gap-6 md:gap-10 md:grid-cols-2"
        >
          {/* LEFT: Admin Images */}
          <motion.div variants={fadeIn("up", 0.4)} className="min-w-0">
            <div className="relative w-full h-[250px] md:h-[340px] overflow-hidden bg-gray-800 rounded-xl">
              <div
                ref={adminScrollRef}
                onScroll={handleAdminScroll}
                className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {adminImages.map((admin, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center h-full min-w-full gap-2 p-3 snap-center"
                  >
                    <img
                      src={admin.src}
                      alt={admin.alt}
                      className="object-contain w-full max-h-[180px] md:max-h-[270px]"
                    />
                    <p className="mt-2 text-xs text-center text-white md:text-sm">
                      {admin.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Admin Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {adminImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      adminScrollRef.current?.scrollTo({
                        left: i * adminScrollRef.current.offsetWidth,
                        behavior: "smooth",
                      });
                      setAdminActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === adminActiveIndex
                        ? "bg-white w-4"
                        : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Admin Info */}
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
              <p className="text-sm text-text-muted md:text-lg">
                Backend Developer
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-sm text-text-muted md:text-lg">2 Months</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel"
                className="flex px-5 py-2 border rounded-lg text-text"
              >
                <Github size={18} className="me-1" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Admin Details */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="w-full font-serif text-text mt-15"
        >
          <h4 className="text-xl text-primary">Details</h4>
          <p className="mt-3 text-sm text-text-muted md:text-lg">
            A full-stack web application for pizza ordering with role-based
            admin dashboard, order management, and reporting system built using
            Laravel.
          </p>
          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3">
            {adminHighlights.map((highlight, index) => (
              <li key={index} className="mb-3 text-sm md:text-lg">
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ─── USER SECTION ─── */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          className="mb-5 text-2xl text-center text-text md:text-3xl mt-30"
        >
          User Site
        </motion.h2>

        <div className="grid w-full min-w-0 gap-6 md:gap-10 md:grid-cols-2">
          {/* LEFT: User Images */}
          <motion.div variants={fadeIn("up", 0.3)} className="min-w-0">
            <div className="relative w-full h-[220px] md:h-[320px] overflow-hidden bg-gray-800 rounded-xl">
              <div
                ref={userScrollRef}
                onScroll={handleUserScroll}
                className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              >
                {userImages.map((user, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center h-full min-w-full gap-2 p-3 snap-center"
                  >
                    <img
                      src={user.src}
                      alt={user.alt}
                      className="object-contain w-full max-h-[180px] md:max-h-[270px]"
                    />
                    <p className="mt-2 text-xs text-center text-white md:text-sm">
                      {user.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* User Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {userImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      userScrollRef.current?.scrollTo({
                        left: i * userScrollRef.current.offsetWidth,
                        behavior: "smooth",
                      });
                      setUserActiveIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === userActiveIndex ? "bg-white w-4" : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: User Info */}
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
              <p className="text-sm text-text-muted md:text-lg">
                Backend Developer
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Timeline</h3>
              <p className="text-sm text-text-muted md:text-lg">2 Months</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/kyawphyo-dev/Pizza_Order_System_Laravel"
                className="flex px-3 py-2 text-sm border rounded-lg text-text md:px-5 md:text-lg"
              >
                <Github size={18} className="me-1" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* User Details */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="w-full font-serif text-text mt-15"
        >
          <h4 className="text-xl text-primary">Details</h4>
          <p className="mt-3 text-sm md:text-lg text-text-muted">
            The user-facing site allows customers to browse the menu, customize
            pizzas with toppings, and place orders through an intuitive and
            responsive interface. It provides a smooth ordering experience with
            secure authentication and personal account management.
          </p>
          <h4 className="flex items-center text-xl text-primary mt-7">
            <TrendingUp size={20} className="me-1" />
            Highlights
          </h4>
          <ul className="mt-3">
            {userHighlight.map((highlight, index) => (
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
