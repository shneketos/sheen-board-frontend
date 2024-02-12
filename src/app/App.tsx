import { Link } from "react-router-dom";
import "./styles/index.scss";

import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <div className={`app ${theme}`}>
      <Header authed={false} />
      <main className="content">
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
