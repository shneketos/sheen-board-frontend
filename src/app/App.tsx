import { Link } from "react-router-dom";
import "./styles/index.scss";

import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider";

const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
};

export default App;
