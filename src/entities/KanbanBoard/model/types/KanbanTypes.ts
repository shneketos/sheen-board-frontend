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
    onClose?: () => void;
}

export interface Kanban {
    id: number;
}
export interface KanbanStore {
    kanban: Kanban;
    isLoading: boolean;
    fetchKanban: (id: number) => Promise<void>;
}
