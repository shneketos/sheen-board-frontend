import { BacklogContent } from "entities/Backlog";
import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "shared/ui/Layout/Layout";

export const BacklogPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <Layout>
            <BacklogContent />
        </Layout>
    );
};
export default BacklogPage;
