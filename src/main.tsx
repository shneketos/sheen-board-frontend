import App from "app/App";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import ThemeProvider from "app/providers/themeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
