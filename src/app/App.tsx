import { AppRouter } from "./providers/routerProvider";
import { Header } from "widgets/Header";

const App = () => {
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
