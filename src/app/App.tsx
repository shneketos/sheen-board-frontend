import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider/ui/AppRouter";
import { Header } from "widgets/header";
import { useEffect } from "react";
import { useUserStore } from "entities/User";
export const App = () => {
    useThemes();
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);
    const fetchUser = useUserStore((state) => state.fetchUser);
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);
    console.log(user);
    if (!isLoading) {
        return (
            <div className="app">
                <Header authed={true} />
                <main className="content">
                    <AppRouter />
                </main>
            </div>
        );
    }
};
export default App;
