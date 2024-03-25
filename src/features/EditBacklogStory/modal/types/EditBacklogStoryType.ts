export interface EditBacklogStoryProps {
    onStoryEditingChange: (newStoryEditingValue: boolean) => void;
    id: number;
    storypoints: number;
}
export interface EditBacklogStoryServiceProps {
    id: number;
    storypoints: string;
}
