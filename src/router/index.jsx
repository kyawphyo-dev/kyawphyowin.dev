import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layouts/Layout";
import Hero from "../sections/Hero";
export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Hero />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
