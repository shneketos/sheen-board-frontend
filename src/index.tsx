import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/themeProvider";
import App from "app/App";
const root = createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
