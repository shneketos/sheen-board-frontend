import { KanbanContent, KanbanHeader } from "entities/Kanban";
import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "widgets/Sidebar";

export const KanbanPage = () => {
    const { id } = useParams();
    console.log(id);
    const [type, setType] = React.useState<string | null>(null);
    return (
        <>
            <Sidebar />
            <section className="content__wrapper">
                <KanbanHeader onTypeChange={setType} />
                <KanbanContent type={type} />
            </section>
        </>
    );
};
export default KanbanPage;
