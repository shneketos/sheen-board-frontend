import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "widgets/Sidebar";

export const BacklogPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <Sidebar />
            <section className="content__wrapper">Backlog</section>
        </>
    );
};
export default BacklogPage;
