import { Link } from "react-router-dom";
import "./styles/index.scss";

import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <div className={`app ${theme}`}>
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
