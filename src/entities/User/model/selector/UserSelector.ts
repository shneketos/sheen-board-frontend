import { useUserStore } from "entities/User";
import React from "react";

const useAuthSelector = () => {
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);
    const isAuth = React.useMemo(() => {
        if (!isLoading) {
            return Object.keys(user).length > 0;
        }
    }, [user, isLoading]);
    return isAuth;
};

export default useAuthSelector;
