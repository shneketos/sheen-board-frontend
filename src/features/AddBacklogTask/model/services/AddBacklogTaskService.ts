import { $api } from "shared/api/api";
import { addBacklogTaskServiceProps } from "../types/AddBacklogTaskType";

export const addBacklogTaskService = async (
    props: addBacklogTaskServiceProps
) => {
    const { id, title } = props;
    const params = {
        title: title,
        sprintId: id,
        priority: "Low",
        status: "Not Started",
        story: 5,
    };
    const response = await $api.post("/backlog-task", params);
    return response;
};
