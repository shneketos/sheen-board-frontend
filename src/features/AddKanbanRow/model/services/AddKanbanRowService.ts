import { $api } from "shared/api/api";
import { addKanbanRowServiceProps } from "../types/AddKanbanRowType";

export const AddKanbanRowService = async (props: addKanbanRowServiceProps) => {
    const { id, title } = props;
    const params = {
        kanbanId: id,
        title: title,
    };
    const response = await $api.post("/kanban-list", params);
    console.log(response);

    return response;
};
