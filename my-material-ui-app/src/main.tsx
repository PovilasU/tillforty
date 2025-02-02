import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
