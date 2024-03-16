import { $api } from "shared/api/api";
import { AddWorkspaceProps } from "../types/AddWorkspaceType";

export const AddWorkspace = async (props: AddWorkspaceProps) => {
    const { title, members, ownerId } = props;
    const params = {
        title: title,
        members: members,
        ownerId: ownerId,
    };
    const response = await $api.post("/workspace", params);
    return response;
};
