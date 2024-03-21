import { $api } from "shared/api/api";
import { DeleteBacklogSprintProps } from "../types/DeleteBacklogSprintType";

export const DeleteBacklogSprintService = async (
    props: DeleteBacklogSprintProps
) => {
    const { id } = props;
    const response = await $api.delete(`backlog-sprint/${id}`);
    return response;
};
