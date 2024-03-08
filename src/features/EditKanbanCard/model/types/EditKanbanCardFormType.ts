import { type KanbanCardProps } from "entities/Kanban";

export interface EditKanbanCardProps extends KanbanCardProps {
    onClose: () => void;
}
