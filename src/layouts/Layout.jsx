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
  const isHomePage =
    location.pathname === "/" || location.pathname.endsWith("/home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      <main className={isHomePage ? undefined : "pt-24"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
