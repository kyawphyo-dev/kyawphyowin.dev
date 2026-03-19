import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <Outlet />
    </div>
  );
}
