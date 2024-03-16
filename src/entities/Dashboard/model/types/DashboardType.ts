export interface DashboardCard {
    id: number;
    title: string;
    members?: number[];
    ownerId?: number;
}

export interface DashboardState {
    dashboards: DashboardCard[];
    isLoading: boolean;
    errors: string[];
    fetchDashboards: (id: number) => Promise<void>;
}
