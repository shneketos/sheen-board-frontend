import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider/ui/AppRouter";
import { Header } from "widgets/header";
import { useEffect } from "react";
import { CheckAuth } from "entities/User";

export const App = () => {
    useThemes();
    useEffect(() => {
        CheckAuth();
    }, []);
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
