import { $api } from "shared/api/api";
import { addKanbanCardServiceProps } from "../types/AddKanbanCardType";

export const AddKanbanRowService = async (props: addKanbanCardServiceProps) => {
    const { id, rowTitle, title } = props;
    const params = {
        listId: id,
        title: title,
        desc: "",
        date: new Date(),
        priority: "Low",
        stage: rowTitle,
    };
    const response = await $api.post("/kanban-tasks", params);
    console.log(response);

    return response;
};
