import { $api } from "shared/api/api";
import { EditBacklogStatusServiceProps } from "../types/EditBacklogStatusType";

export const EditBacklogStatusService = async (
    props: EditBacklogStatusServiceProps
) => {
    const { id, status } = props;
    const params = {
        id: id,
        status: status,
    };
    const response = $api.patch(`/backlog-task/${id}`, params);
    return response;
};
