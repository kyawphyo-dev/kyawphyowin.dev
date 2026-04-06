import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useLocation } from "react-router-dom";
export default function Layout() {
  const { isDark } = useTheme();
  const location = useLocation();
  const body = document.body;
  // Scroll to up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Light and Dark
  useEffect(() => {
    if (isDark) {
      body.classList.add("bg-bg");
      document.documentElement.classList.add("dark");
    } else {
      body.classList.remove("bg-bg");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
