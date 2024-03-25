import { $api } from "shared/api/api";
import { EditBacklogSprintTitleServiceProps } from "../types/EditBacklogSprintTitleType";

export const EditBacklogSprintTitleService = async (
    props: EditBacklogSprintTitleServiceProps
) => {
    const { id, title } = props;
    const params = {
        id: id,
        title: title,
    };
    const response = $api.patch(`/backlog-sprint/${id}`, params);
    return response;
};
