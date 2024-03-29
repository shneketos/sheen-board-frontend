import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { Members } from "entities/Members";
import OwnerSelector from "entities/Members/model/selector/OwnerSelector";
import React from "react";
import { useParams } from "react-router-dom";

export const MembersPage = () => {
    const { id } = useParams();
    const fetchMembers = useDashboardStore((state) => state.fetchDashMembers);
    const dash = useDashboardStore((state) => state.thisDash);
    const fetchDash = useDashboardStore((state) => state.fetchThisDash);
    const isOwner = OwnerSelector();
    React.useEffect(() => {
        fetchDash(parseInt(id)).then(() => fetchMembers(parseInt(id)));
    }, [fetchDash, fetchMembers, id]);
    console.log(isOwner, dash);
    return <Members />;
};
export default MembersPage;
