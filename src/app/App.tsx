import { AppRouter } from "./providers/routerProvider";
import { Header } from "widgets/Header";
import { useThemes } from "./providers/themeProvider";

const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme } = useThemes();
    return (
        <div className="app">
            <Header authed={true} />
            <main className="content">
                <AppRouter />
            </main>
        </div>
    );
};

export default App;
