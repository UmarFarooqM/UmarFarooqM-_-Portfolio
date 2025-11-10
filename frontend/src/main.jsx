import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ Create root for React 18+
const root = createRoot(document.getElementById("root"));

// ✅ Render App inside StrictMode for dev safety
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
