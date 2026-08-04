import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import heroImage from "@/assets/hero-globe.jpg";
import "./index.css";

// Preload the LCP hero image with high priority so it starts downloading
// as early as possible, before React mounts.
const preload = document.createElement("link");
preload.rel = "preload";
preload.as = "image";
preload.href = heroImage;
preload.fetchPriority = "high";
document.head.appendChild(preload);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
