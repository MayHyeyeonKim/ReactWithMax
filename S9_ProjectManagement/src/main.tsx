import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**
✅ Packages installed
✅ tailwind.config.ts properly configured
✅ postcss.config.cjs properly configured
✅ Tailwind directives present in index.css
✅ CSS file imported in main.tsx
✅ Tailwind classes in use inside ProjectSidebar.tsx
 */
