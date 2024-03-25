import { $api } from "shared/api/api";
import { EditBacklogPriorityServiceProps } from "../types/EditBacklogPriorityType";

export const EditBacklogPriorityService = async (
    props: EditBacklogPriorityServiceProps
) => {
    const { id, priority } = props;
    const params = {
        id: id,
        priority: priority,
    };
    const response = $api.patch(`/backlog-task/${id}`, params);
    return response;
};
