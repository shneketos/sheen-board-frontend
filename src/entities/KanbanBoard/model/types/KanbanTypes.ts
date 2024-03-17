export interface KanbanCardProps extends KanbanCard {
    rowId?: number;
    rowTitle?: string;
}
export interface KanbanRowProps extends KanbanRow {
    onClose?: () => void;
}

export interface KanbanCard {
    id?: number;
    title?: string;
    desc?: string;
    priority?: string;
    date?: string;
}

export interface KanbanRow {
    id?: number;
    title?: string;
    tasks?: KanbanCard[];
}

export interface Kanban {
    id: number;
    lists?: KanbanRow[];
}
export interface KanbanStore {
    kanban: Kanban;
    isLoading: boolean;
    fetchKanban: (id: number) => Promise<void>;
}
