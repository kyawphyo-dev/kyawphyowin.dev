import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layouts/Layout";

export default function Index() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
      },
    ],
    {
      basename: "/kyawphyowin.dev/", // ✅ ADD THIS
    }
  );

  return <RouterProvider router={router} />;
}
