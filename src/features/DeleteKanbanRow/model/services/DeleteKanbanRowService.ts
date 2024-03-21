import { $api } from "shared/api/api";
import { DeleteKanbanRowProps } from "../types/DeleteKanbanRowType";

export const DeleteKanbanRowService = async (props: DeleteKanbanRowProps) => {
    const { id } = props;
    const response = await $api.delete(`/kanban-list/${id}`);
    return response;
};
