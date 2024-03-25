export interface EditBacklogPriorityProps {
    onPriorityEditingChange: (newPriorityEditingValue: boolean) => void;
    priority: string;
    id: number;
}
export interface EditBacklogPriorityServiceProps {
    id: number;
    priority: string;
}
