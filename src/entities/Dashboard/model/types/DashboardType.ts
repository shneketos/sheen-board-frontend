import { User } from "entities/User/model/types/UserType";

export interface DashboardCard {
    id: number;
    title: string;
    members?: number[];
    ownerId?: number;
    kanban?: {
        id: number;
    };
    backlog?: {
        id: number;
    };
    calendar?: {
        id: number;
    };
}
export interface Workspaces {
    id: number;
    title: string;
    members: number[];
    ownerId: number;
}
export interface DashboardState {
    dashboards: DashboardCard[];
    thisDash: DashboardCard;
    thisDashIsLoading: boolean;
    isLoading: boolean;
    dashMembers: User[];
    membersIsLoading: boolean;
    workspaces: Workspaces[];
    workspacesLoading: boolean;
    fetchDashboards: (id: number) => Promise<void>;
    fetchThisDash: (id: number) => Promise<void>;
    fetchDashMembers: (id: number) => Promise<void>;
    fetchUserWorkspaces: (id: number) => Promise<void>;

    nullThisDash: () => void;
}
