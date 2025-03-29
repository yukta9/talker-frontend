import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StoreProvider } from "easy-peasy";
import Store from "./store/store.ts";
import InitialLoading from "./web/commonComponent/initialLoading/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={Store}>
      <InitialLoading />
    </StoreProvider>
  </StrictMode>
);
