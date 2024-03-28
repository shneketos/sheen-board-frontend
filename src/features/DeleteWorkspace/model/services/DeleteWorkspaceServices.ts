import { $api } from "shared/api/api";
import { DeleteWorkspaceProps } from "../types/DeleteWorkspaceType";

export const DeleteWorkspaceService = (props: DeleteWorkspaceProps) => {
    const { id } = props;
    const response = $api.delete(`/workspace/${id}`);
    return response;
};
