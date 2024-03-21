import { $api } from "shared/api/api";
import { DeleteKanbanRowCardsProps } from "../types/DeleteKanbanRowCardsType";

export const DeleteKanbanRowCards = async (
    props: DeleteKanbanRowCardsProps
) => {
    const { id } = props;
    const response = await $api.delete(`/kanban-list/cards/${id}`);
    return response;
};
