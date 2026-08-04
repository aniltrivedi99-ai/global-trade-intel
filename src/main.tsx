import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import heroAvif from "@/assets/hero-globe.jpg?format=avif&w=1600&quality=52";
import "./index.css";

// Preload the LCP hero image (AVIF — the variant modern browsers actually
// download) with high priority, before React mounts.
const preload = document.createElement("link");
preload.rel = "preload";
preload.as = "image";
preload.href = heroAvif;
preload.type = "image/avif";
preload.fetchPriority = "high";
document.head.appendChild(preload);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
