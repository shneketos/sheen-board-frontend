export interface KanbanCardProps {
    rowId?: number;
    rowTitle?: string;
    id: number;
    title: string;
    desc: string;
    priority: string;
    date: string;
}
export interface KanbanRowProps {
    id: number;
    title: string;
    cards?: KanbanCardProps[];
}
