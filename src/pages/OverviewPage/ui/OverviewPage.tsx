import { OverviewContent, OverviewHeader } from "entities/Overview";
import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "widgets/Sidebar";
export const OverviewPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <Sidebar />
            <section className="content__wrapper">
                <OverviewHeader />
                <OverviewContent />
            </section>
        </>
    );
};
export default OverviewPage;
