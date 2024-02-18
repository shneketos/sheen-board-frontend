import React from "react";
interface KanbanContentProps {
    type: string;
}
export const KanbanContent = (props: KanbanContentProps) => {
    const { type } = props;
    return <div>{type}</div>;
};
