import { KanbanContent } from "entities/Kanban";
import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "shared/ui/Layout/Layout";

export const KanbanPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <Layout>
            <KanbanContent />
        </Layout>
    );
};
export default KanbanPage;
