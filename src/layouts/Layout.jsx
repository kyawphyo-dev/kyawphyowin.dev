import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
