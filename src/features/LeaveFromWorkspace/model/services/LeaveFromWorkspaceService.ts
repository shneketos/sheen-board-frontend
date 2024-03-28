import { $api } from "shared/api/api";
import { LeaveFromWorkspaceServiceProps } from "../types/LeaveFromWorkspaceType";

export const LeaveFromWorkspaceService = async (
    props: LeaveFromWorkspaceServiceProps
) => {
    const { members, workspaceId } = props;
    const params = {
        members: members,
    };
    const response = await $api.patch(
        `/workspace/members/${workspaceId}`,
        params
    );
    return response;
};
