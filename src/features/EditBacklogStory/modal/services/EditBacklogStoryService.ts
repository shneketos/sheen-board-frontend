import { $api } from "shared/api/api";
import { EditBacklogStoryServiceProps } from "../types/EditBacklogStoryType";

export const EditBacklogStoryService = async (
    props: EditBacklogStoryServiceProps
) => {
    const { id, storypoints } = props;
    const params = {
        id: id,
        story: parseInt(storypoints),
    };
    const response = $api.patch(`/backlog-task/${id}`, params);
    return response;
};
