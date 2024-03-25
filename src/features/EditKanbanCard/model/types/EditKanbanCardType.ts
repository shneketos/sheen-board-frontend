import { type KanbanCardProps } from "entities/KanbanBoard";

export interface EditKanbanCardProps extends KanbanCardProps {
    id: number;
    title: string;
    desc: string;
    priority: string;
    date: Date;
    rowId: number;
    rowTitle: string;
    onClose: () => void;
}
export interface EditKanbanCardSerivceProps {
    id: number;
    title: string;
    desc: string;
    priority: string;
    date: Date;
    stage: number;
}
