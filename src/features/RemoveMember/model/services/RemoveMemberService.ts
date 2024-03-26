import { $api } from "shared/api/api";
import { RemoveMemberServiceProps } from "../types/RemoveMemberType";

export const RemoveMemberService = async (props: RemoveMemberServiceProps) => {
    const { members, dashId } = props;
    const params = {
        members: members,
    };
    const response = await $api.patch(`/workspace/members/${dashId}`, params);
    return response;
};
