import { $api } from "shared/api/api";
import { FindUserByEmailServiceProps } from "../types/AddMemberToWorkspaceType";

export const FindUserByEmail = async (props: FindUserByEmailServiceProps) => {
    const { email } = props;
    const response = $api.get(`/users/${email}`);
    return response;
};
