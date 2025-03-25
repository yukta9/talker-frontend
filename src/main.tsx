import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StoreProvider } from "easy-peasy";
import Store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={Store}>
      <App />
    </StoreProvider>
  </StrictMode>
);
