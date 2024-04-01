import { useBacklogStore } from "entities/Backlog/model/store/BacklogStore";
import { useCalendarStore } from "entities/Calendar/model/store/CalendarStore";
import { useDashboardStore } from "entities/Dashboard/model/store/DashboardStore";
import { useKanbanStore } from "entities/KanbanBoard/model/store/KanbanStore";
import { Overview, OverviewHeader } from "entities/Overview";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const OverviewPage = () => {
    const { id } = useParams();
    const { thisDash, fetchDashMembers, fetchThisDash, thisDashIsLoading } =
        useDashboardStore();
    const fetchKanban = useKanbanStore((state) => state.fetchKanban);
    const kanbanLoading = useKanbanStore((state) => state.isLoading);
    const fetchBacklog = useBacklogStore((state) => state.fetchBacklog);
    const backlogLoading = useBacklogStore((state) => state.isLoading);
    const fetchCalendar = useCalendarStore((state) => state.fetchCalendar);
    const calendarLoading = useCalendarStore((state) => state.isLoading);
    useEffect(() => {
        fetchThisDash(parseInt(id));
    }, [fetchThisDash, id]);
    useEffect(() => {
        if (thisDash !== null) {
            fetchDashMembers(thisDash.id)
                .then(() => fetchKanban(thisDash.kanban.id))
                .then(() => fetchBacklog(thisDash.backlog.id))
                .then(() => fetchCalendar(thisDash.calendar.id));
        }
    }, [fetchBacklog, fetchCalendar, fetchDashMembers, fetchKanban, thisDash]);
    if (
        !thisDashIsLoading &&
        !kanbanLoading &&
        !backlogLoading &&
        !calendarLoading
    ) {
        return (
            <>
                <OverviewHeader />
                <Overview />
            </>
        );
    }
};
export default OverviewPage;
