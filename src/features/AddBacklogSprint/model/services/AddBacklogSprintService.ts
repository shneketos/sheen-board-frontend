import { $api } from "shared/api/api";
import { AddBacklogSprintServiceProps } from "../types/AddBacklogSprintType";

export const AddBacklogSprintService = async (
    props: AddBacklogSprintServiceProps
) => {
    const { id, title } = props;
    const params = {
        title: title,
        backlogId: id,
    };
    const response = await $api.post("/backlog-sprint", params);
    return response;
};
