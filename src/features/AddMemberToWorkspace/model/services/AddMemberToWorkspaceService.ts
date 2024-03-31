import { $api } from "shared/api/api";
import { AddMemberToWorkspaceServiceProps } from "../types/AddMemberToWorkspaceType";

export const AddMemberToWorkspaceService = async (
    props: AddMemberToWorkspaceServiceProps
) => {
    const { members, workspaceId } = props;
    const params = {
        workspaceId: workspaceId,
        members: members,
    };
    const response = await $api.patch(
        `/workspace/members/${workspaceId}`,
        params
    );
    return response;
};
