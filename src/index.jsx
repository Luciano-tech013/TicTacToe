import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { SoundEnabledProvider } from "./contexts/soundEnabledContext.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <SoundEnabledProvider>
    <App />
  </SoundEnabledProvider>
);
