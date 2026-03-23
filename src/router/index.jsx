import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layouts/Layout";
import Hero from "../sections/Hero";
import About from "../sections/About";
export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);

  return <RouterProvider router={router} />;
}
