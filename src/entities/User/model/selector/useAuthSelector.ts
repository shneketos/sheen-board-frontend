import { useUserStore } from "entities/User";

const useAuthSelector = () => {
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);
    const isAuth = user !== null && !isLoading;
    return isAuth;
};

export default useAuthSelector;
