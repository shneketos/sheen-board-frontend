export interface EditBacklogStatusProps {
    onStatusEditingChange: (newStatusEditingValue: boolean) => void;
    status: string;
    id: number;
}
export interface EditBacklogStatusServiceProps {
    status: string;
    id: number;
}
