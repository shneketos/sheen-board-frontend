import { useThemes } from "./providers/themeProvider";
import { AppRouter } from "./providers/routerProvider/ui/AppRouter";
import { Header } from "widgets/header";
import { useUserStore } from "entities/User/store/UserStore";
import React from "react";
import useAuthSelector from "entities/User/model/selector/UserSelector";

export const App = () => {
    useThemes();
    const user = useUserStore((state) => state.user);
    const fetchUser = useUserStore((state) => state.fetchUser);
    React.useEffect(() => {
        fetchUser();
    }, []);
    const isAuth = useAuthSelector();

    console.log(isAuth);

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
