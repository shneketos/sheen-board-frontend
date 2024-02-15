import "./styles/index.scss";
import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider";
import { Header } from "widgets/Header";

const App = () => {
    const { theme } = useThemes();
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
