import { $api } from "shared/api/api";
import { EditKanbanCardSerivceProps } from "../types/EditKanbanCardType";

export const EditKanbanCardSerivce = async (
    props: EditKanbanCardSerivceProps
) => {
    const { id, title, date, desc, priority, stage } = props;
    const params = {
        id: id,
        title: title,
        date: date,
        desc: desc,
        priority: priority,
        listId: stage,
    };
    const response = await $api.patch(`/kanban-tasks/${id}`, params);
    return response;
};
