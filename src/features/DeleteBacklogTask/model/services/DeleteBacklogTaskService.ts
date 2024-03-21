import { $api } from "shared/api/api";
import { DeleteBacklogTaskProps } from "../types/DeleteBacklogTaskType";

export const DeleteBacklogTaskService = async (
    props: DeleteBacklogTaskProps
) => {
    const { id } = props;
    const response = await $api.delete(`/backlog-task/${id}`);
    return response;
};
