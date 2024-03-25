import { $api } from "shared/api/api";
import { EditBacklogTaskTitleServiceProps } from "../types/EditBacklogTaskTitleType";

export const EditBacklogTaskTitleService = async (
    props: EditBacklogTaskTitleServiceProps
) => {
    const { id, title } = props;
    const params = {
        id: id,
        title: title,
    };
    const response = $api.patch(`/backlog-task/${id}`, params);
    return response;
};
