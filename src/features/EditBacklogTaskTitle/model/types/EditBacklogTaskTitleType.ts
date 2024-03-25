export interface EditBacklogTaskTitleProps {
    id: number;
    title: string;
    onTitleEditingChange: (newTitleEditingValue: boolean) => void;
}
export interface EditBacklogTaskTitleServiceProps {
    id: number;
    title: string;
}
