import { createRoot } from "react-dom/client";
import Router from "./router";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router />
  </ThemeContextProvider>
);
