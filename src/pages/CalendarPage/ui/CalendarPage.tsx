import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "widgets/Sidebar";

export const CalendarPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <Sidebar />
            <section className="content__wrapper">Calendar</section>
        </>
    );
};
export default CalendarPage;
