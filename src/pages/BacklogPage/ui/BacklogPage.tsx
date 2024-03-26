import { Backlog } from "entities/Backlog";
import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const BacklogPage = () => {
    const { id } = useParams();
    const dash = useDashboardStore((state) => state.thisDash);
    const getDash = useDashboardStore((state) => state.fetchThisDash);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    useEffect(() => {
        getDash(parseInt(id));
    }, [getDash, id]);
    useEffect(() => {
        if (dash !== null) {
            fetchBacklog(dash.backlog.id);
        }
    }, [dash, fetchBacklog]);
    return (
        <>
            <Backlog />
        </>
    );
};
export default BacklogPage;
