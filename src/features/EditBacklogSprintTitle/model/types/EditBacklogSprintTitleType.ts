export interface EditBacklogSprintTitleProps {
    onTitleEditingChange: (newTitleEditingValue: boolean) => void;
    title: string;
    id: number;
}
export interface EditBacklogSprintTitleServiceProps {
    id: number;
    title: string;
}
