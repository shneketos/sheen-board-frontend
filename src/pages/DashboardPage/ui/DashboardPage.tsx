import { DashboardContent } from "entities/Dashboard";
import React from "react";
import { Layout } from "shared/ui/Layout/Layout";

export const DashboardPage = () => {
    return (
        <Layout>
            <DashboardContent />
        </Layout>
    );
};

export default DashboardPage;
