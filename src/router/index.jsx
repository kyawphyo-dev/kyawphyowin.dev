import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import ProjectDetails from "../components/PizzaShowCase";
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import ProjectSection from "../sections/ProjectSection";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function Index() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "projects",
            element: <ProjectSection />,
          },

          {
            path: "education",
            element: <Education />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "project/pizza",
            element: <ProjectDetails />,
          },
        ],
      },
    ],
    {
      basename: "/kyawphyowin.dev/", // ✅ ADD THIS
    }
  );

  return <RouterProvider router={router} />;
}
