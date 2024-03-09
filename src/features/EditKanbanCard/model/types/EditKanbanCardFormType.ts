import { type KanbanCardProps } from "entities/KanbanBoard";

export interface EditKanbanCardProps extends KanbanCardProps {
    onClose: () => void;
}
