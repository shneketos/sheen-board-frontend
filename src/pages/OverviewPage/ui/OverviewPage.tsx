import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "widgets/Sidebar";

export const OverviewPage = () => {
    const { id } = useParams();

    return (
        <>
            <Sidebar />
            <div className="content__wrapper">{id}</div>
        </>
    );
};
export default OverviewPage;
