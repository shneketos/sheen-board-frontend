import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useUserStore } from "entities/User";

export const OwnerSelector = () => {
    const user = useUserStore((state) => state.user);
    const dash = useDashboardStore((state) => state.thisDash);
    const isOwner = dash !== null && user.id === dash.ownerId;
    return isOwner;
};
export default OwnerSelector;
