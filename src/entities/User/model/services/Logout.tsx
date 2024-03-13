import React from "react";
import { LOCALSTORAGE_TOKEN_KEY } from "shared/const/localstorage";
import { useUserStore } from "entities/User";

const Logout = () => {
    const logout = useUserStore((state) => state.logoutUser);

    React.useEffect(() => {
        window.localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
        logout();
    }, [logout]);
    return null;
};

export default Logout;
