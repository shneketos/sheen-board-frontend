export interface LeaveFromWorkspaceProps {
    userId: number;
    workspaceId: number;
    members: number[];
}
export interface LeaveFromWorkspaceServiceProps {
    members: number[];
    workspaceId: number;
}
