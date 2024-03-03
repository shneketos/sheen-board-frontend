import React from "react";
import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider/ui/AppRouter";
import { Header } from "widgets/header";

export const App = () => {
    useThemes();
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
