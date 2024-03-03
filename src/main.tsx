import App from "app/App";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/themeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
