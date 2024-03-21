import { $api } from "shared/api/api";
import { DeleteKanbanCardProps } from "../types/DeleteKanbanCardType";

export const DeleteKanbanCardService = async (props: DeleteKanbanCardProps) => {
    const { id } = props;

    const response = await $api.delete(`/kanban-tasks/${id}`);
    return response;
};
