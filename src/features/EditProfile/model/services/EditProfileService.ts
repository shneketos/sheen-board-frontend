import { $api } from "shared/api/api";
import { EditProfileServiceProps } from "../types/EditProfileType";

export const EditProfileService = async (props: EditProfileServiceProps) => {
    const { id, name, email } = props;
    const params = {
        name: name,
        email: email,
    };
    const response = await $api.patch(`/users/${id}`, params);
    return response;
};
