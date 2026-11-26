import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./app/App";
import i18n from "./locales/i18n";
import "./styles/index.css";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const root = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

if (root.hasChildNodes() && i18n.resolvedLanguage === "en") {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
