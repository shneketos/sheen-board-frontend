import { $api } from "shared/api/api";
import { EditKanbanRowTitleServiceProps } from "../type/EditKanbanRowTitleType";

export const EditKanbanRowTitleService = async (
    props: EditKanbanRowTitleServiceProps
) => {
    const { id, title } = props;
    const params = {
        id: id,
        title: title,
    };
    const response = await $api.patch(`/kanban-list/${id}`, params);
    return response;
};
